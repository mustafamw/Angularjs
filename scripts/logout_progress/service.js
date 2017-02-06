myApp.service('timeOutProgress', function($http,$log,$cookies, $rootScope, $interval)
{
    this.timeOut = function(token_issued, token_expires)
    {
		$rootScope.time_out_progress_width = 100;

        $interval.cancel(setpopinterval);
        
		var tokenValid = token_expires - token_issued;

        setpopinterval = $interval(function()
        {
            var refreshcurrenttime = Math.floor(Date.now() / 1000);
            var tokenCountdown = token_expires-refreshcurrenttime;
            var width = (tokenCountdown / tokenValid) * 100;
            $rootScope.time_out_progress_width = width;
        }, 1000);

    }
});