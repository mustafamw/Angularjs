myApp.service('logoutPopup', function($http,$log,$cookies,$location,$timeout,$rootScope,$sce, $interval, jwtHelper, authorization, $route)
{
    this.popup = function()
    {
        $rootScope.popup_confirm = false;
        $rootScope.show_overlay = false;

        $timeout.cancel(time_out_popup);
        $timeout.cancel(time_out_logout);

        var token = authorization.getToken()
        var tokenPayload = jwtHelper.decodeToken(token);

        var token_expires = tokenPayload.exp
        var token_issued = tokenPayload.iat
 
        var popupsecond = 60 * 1; // 2min
        var tokenvalidpopup = ((token_expires - token_issued) - popupsecond) * 1000;
        var tokenlogout = (token_expires - token_issued) * 1000;


        time_out_popup = $timeout(function()
        {
            $log.info(tokenvalidpopup, tokenlogout)
            $rootScope.show_overlay = true;
            $rootScope.popup_confirm = true;

            $rootScope.confirmTitle = $sce.trustAsHtml("Confirm?");;
            $rootScope.confirmInfo = $sce.trustAsHtml("<p>You are about to log out, please click ok to refresh the page...</p>");

            $rootScope.confirm_show = true;
            $rootScope.confirm_value = "OK";

            $rootScope.cancel_show = true;
            $rootScope.cancel_value = "CANCEL";

            $rootScope.confirm = function()
            {
                authorization.refresh();
                $rootScope.popup_confirm = false;
                $rootScope.show_overlay = false;
            };

            $rootScope.cancel = function()
            {
                $rootScope.show_overlay = false;
                $rootScope.popup_confirm = false;
            };

            $rootScope.close = function()
            {
                $rootScope.show_overlay = false;
                $rootScope.popup_confirm = false;
            };
        },tokenvalidpopup);


        time_out_logout = $timeout(function()
        {
                $rootScope.popup_confirm = false;
                $rootScope.show_overlay = false;
                $location.path('/logout');
        },tokenlogout);

    }
});