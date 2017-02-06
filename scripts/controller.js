var time_out_popup;
var time_out_logout;
var setpopinterval;

//var api_link = "https://egb-platform.appspot.com/_ah/api/platform/v1/"
var api_link = "http://localhost:8080/_ah/api/platform/v1/"

var errorTitleMessage = "Please try again later..."
var errorMessage = "<p>It seems we have technical difficulty please try again later. sorry for your inconvenience.</p>"

myApp.config(function($routeProvider){
	$routeProvider
	.when('/login', { 
		templateUrl: "login.html",
		controller: "logincontroller",
		resolve:
        {
            "check":function($q, $location, $log, authorization)
            {
                if(authorization.getToken())
                {
                    $location.path('/');
                }
            }
        }	
	})
    .when('/logout', 
    {
        template: '',
        controller: '',
        resolve:
        {
            "check":function($q, $location, $log, authorization)
            {
                authorization.logout();
				$location.path('/login');
            }
        }
    })
	.when('/', { 
		templateUrl: "template/response/",
		controller: "mainctrl",
        resolve:
        {
            "check":function($q, $log, $location, authorization)
            {
                if(!authorization.getToken())
                {
                    $location.path('/login');
                }
            }
        }
	})
	
	.when('/pension', { 
		templateUrl: "template/pension/pension.html",
		controller: "pensionctrl",
        resolve:
        {
            "check":function($q, $log, $location, authorization)
            {
                if(!authorization.getToken())
                {
                    $location.path('/login');
                }
            }
        }
	})
	.when('/pension/signup', { 
		templateUrl: "template/pension/pension_signup.html",
		controller: "pensionsignupctrl",
        resolve:
        {
            "check":function($q, $log, $location, authorization)
            {
                if(!authorization.getToken())
                {
                    $location.path('/login');
                }
            }
        }
	})
	.when('/pension/signup/amend', { 
		templateUrl: "template/pension/pension_signup_amend.html",
		controller: "pensionsignupamendctrl",
        resolve:
        {
            "check":function($q, $log, $location, authorization)
            {
                if(!authorization.getToken())
                {
                    $location.path('/login');
                }
            }
        }
	})
	.when('/pension/signup/info', { 
		templateUrl: "template/pension/pension_signup_info.html",
		controller: "pensionsignupinfoctrl",
        resolve:
        {
            "check":function($q, $log, $location, authorization)
            {
                if(!authorization.getToken())
                {
                    $location.path('/login');
                }
            }
        }
	})
	.when('/pension/signup/request', { 
		templateUrl: "template/pension/pension_signup_request.html",
		controller: "pensionsignuprequestctrl",
        resolve:
        {
            "check":function($q, $log, $location, authorization)
            {
                if(!authorization.getToken())
                {
                    $location.path('/login');
                }
            }
        }
	})
	.when('/pmi', { 
		templateUrl: "template/pmi/pmi.html",
		controller: "pmictrl",
        resolve:
        {
            "check":function($q, $log, $location, authorization)
            {
                if(!authorization.getToken())
                {
                    $location.path('/login');
                }
            }
        }
	})
	.when('/pmi/signup', { 
		templateUrl: "template/pmi/pmi_signup.html",
		controller: "pmisignupctrl",
        resolve:
        {
            "check":function($q, $log, $location, authorization)
            {
                if(!authorization.getToken())
                {
                    $location.path('/login');
                }
            }
        }
	})
	.when('/pmi/signup/info', { 
		templateUrl: "template/pmi/pmi_signup_info.html",
		controller: "pmisignupinfoctrl",
        resolve:
        {
            "check":function($q, $log, $location, authorization)
            {
                if(!authorization.getToken())
                {
                    $location.path('/login');
                }
            }
        }
	})
	.when('/pmi/signup/request', { 
		templateUrl: "template/pmi/pmi_signup_request.html",
		controller: "pmisignuprequestctrl",
        resolve:
        {
            "check":function($q, $log, $location, authorization)
            {
                if(!authorization.getToken())
                {
                    $location.path('/login');
                }
            }
        }
	})
	.when('/dental', { 
		templateUrl: "template/dental/dental.html",
		controller: "dentalctrl",
        resolve:
        {
            "check":function($q, $log, $location, authorization)
            {
                if(!authorization.getToken())
                {
                    $location.path('/login');
                }
            }
        }
	})
	.when('/dental/signup', { 
		templateUrl: "template/dental/dental_signup.html",
		controller: "dentalsignupctrl",
        resolve:
        {
            "check":function($q, $log, $location, authorization)
            {
                if(!authorization.getToken())
                {
                    $location.path('/login');
                }
            }
        }
	})
	.when('/dental/signup/info', { 
		templateUrl: "template/dental/dental_signup_info.html",
		controller: "dentalsignupinfoctrl",
        resolve:
        {
            "check":function($q, $log, $location, authorization)
            {
                if(!authorization.getToken())
                {
                    $location.path('/login');
                }
            }
        }
	})
	.when('/dental/signup/request', { 
		templateUrl: "template/dental/dental_signup_request.html",
		controller: "dentalsignuprequestctrl",
        resolve:
        {
            "check":function($q, $log, $location, authorization)
            {
                if(!authorization.getToken())
                {
                    $location.path('/login');
                }
            }
        }
	})
	.when('/cashplan', { 
		templateUrl: "template/cashplan/cashplan.html",
		controller: "cashplanctrl",
        resolve:
        {
            "check":function($q, $log, $location, authorization)
            {
                if(!authorization.getToken())
                {
                    $location.path('/login');
                }
            }
        }
	})
	.when('/cashplan/signup', { 
		templateUrl: "template/cashplan/cashplan_signup.html",
		controller: "cashplansignupctrl",
        resolve:
        {
            "check":function($q, $log, $location, authorization)
            {
                if(!authorization.getToken())
                {
                    $location.path('/login');
                }
            }
        }
	})
	.when('/cashplan/signup/info', { 
		templateUrl: "template/cashplan/cashplan_signup_info.html",
		controller: "cashplansignupinfoctrl",
        resolve:
        {
            "check":function($q, $log, $location, authorization)
            {
                if(!authorization.getToken())
                {
                    $location.path('/login');
                }
            }
        }
	})
	.when('/cashplan/signup/request', { 
		templateUrl: "template/cashplan/cashplan_signup_request.html",
		controller: "cashplansignuprequestctrl",
        resolve:
        {
            "check":function($q, $log, $location, authorization)
            {
                if(!authorization.getToken())
                {
                    $location.path('/login');
                }
            }
        }
	})
	.when('/cic', { 
		templateUrl: "template/cic/cic.html",
		controller: "cicctrl",
        resolve:
        {
            "check":function($q, $log, $location, authorization)
            {
                if(!authorization.getToken())
                {
                    $location.path('/login');
                }
            }
        }
	})
	.when('/cic/signup', { 
		templateUrl: "template/cic/cic_signup.html",
		controller: "cicsignupctrl",
        resolve:
        {
            "check":function($q, $log, $location, authorization)
            {
                if(!authorization.getToken())
                {
                    $location.path('/login');
                }
            }
        }
	})
	.when('/cic/signup/info', { 
		templateUrl: "template/cic/cic_signup_info.html",
		controller: "cicsignupinfoctrl",
        resolve:
        {
            "check":function($q, $log, $location, authorization)
            {
                if(!authorization.getToken())
                {
                    $location.path('/login');
                }
            }
        }
	})
	.when('/cic/signup/request', { 
		templateUrl: "template/cic/cic_signup_request.html",
		controller: "cicsignuprequestctrl",
        resolve:
        {
            "check":function($q, $log, $location, authorization)
            {
                if(!authorization.getToken())
                {
                    $location.path('/login');
                }
            }
        }
	})
	.when('/life', { 
		templateUrl: "template/life/life.html",
		controller: "lifectrl",
        resolve:
        {
            "check":function($q, $log, $location, authorization)
            {
                if(!authorization.getToken())
                {
                    $location.path('/login');
                }
            }
        }
	})
	.when('/life/signup', { 
		templateUrl: "template/life/life_signup.html",
		controller: "lifesignupctrl",
        resolve:
        {
            "check":function($q, $log, $location, authorization)
            {
                if(!authorization.getToken())
                {
                    $location.path('/login');
                }
            }
        }
	})
	.when('/life/signup/info', { 
		templateUrl: "template/life/life_signup_info.html",
		controller: "lifesignupinfoctrl",
        resolve:
        {
            "check":function($q, $log, $location, authorization)
            {
                if(!authorization.getToken())
                {
                    $location.path('/login');
                }
            }
        }
	})
	.when('/life/signup/request', { 
		templateUrl: "template/life/life_signup_request.html",
		controller: "lifesignuprequestctrl",
        resolve:
        {
            "check":function($q, $log, $location, authorization)
            {
                if(!authorization.getToken())
                {
                    $location.path('/login');
                }
            }
        }
	})
	.when('/gip', { 
		templateUrl: "template/gip/gip.html",
		controller: "gipctrl",
        resolve:
        {
            "check":function($q, $log, $location, authorization)
            {
                if(!authorization.getToken())
                {
                    $location.path('/login');
                }
            }
        }
	})
	.when('/gip/signup', { 
		templateUrl: "template/gip/gip_signup.html",
		controller: "gipsignupctrl",
        resolve:
        {
            "check":function($q, $log, $location, authorization)
            {
                if(!authorization.getToken())
                {
                    $location.path('/login');
                }
            }
        }
	})
	.when('/gip/signup/info', { 
		templateUrl: "template/gip/gip_signup_info.html",
		controller: "gipsignupinfoctrl",
        resolve:
        {
            "check":function($q, $log, $location, authorization)
            {
                if(!authorization.getToken())
                {
                    $location.path('/login');
                }
            }
        }
	})
	.when('/gip/signup/request', { 
		templateUrl: "template/gip/gip_signup_request.html",
		controller: "gipsignuprequestctrl",
        resolve:
        {
            "check":function($q, $log, $location, authorization)
            {
                if(!authorization.getToken())
                {
                    $location.path('/login');
                }
            }
        }
	})

	.when('/cashback', { 
		templateUrl: "template/offers/cashback.html",
		controller: "cashbackctrl",
        resolve:
        {
            "check":function($q, $log, $location, authorization)
            {
                if(!authorization.getToken())
                {
                    $location.path('/login');
                }
            }
        }
	})

	.when('/voucher', { 
		templateUrl: "template/offers/vouchers.html",
		controller: "voucherctrl",
        resolve:
        {
            "check":function($q, $log, $location, authorization)
            {
                if(!authorization.getToken())
                {
                    $location.path('/login');
                }
            }
        }
	})

	.when('/giftcard', { 
		templateUrl: "template/offers/giftcard.html",
		controller: "giftcardctrl",
        resolve:
        {
            "check":function($q, $log, $location, authorization)
            {
                if(!authorization.getToken())
                {
                    $location.path('/login');
                }
            }
        }
	})

	.when('/holiday/holidayrequest', { 
		templateUrl: "template/holiday/holidayrequest.html",
		controller: "holidayRequestsctrl",
        resolve:
        {
            "check":function($q, $log, $location, authorization)
            {
                if(!authorization.getToken())
                {
                    $location.path('/login');
                }
            }
        }
	})
	
	.when('/holiday/book', { 
		templateUrl: "template/holiday/book.html",
		controller: "holidayBookCtrl",
        resolve:
        {
            "check":function($q, $log, $location, authorization)
            {
                if(!authorization.getToken())
                {
                    $location.path('/login');
                }
            }
        }
	})

	.when('/holiday/pending', { 
		templateUrl: "template/holiday/pending.html",
		controller: "holidayPendingCtrl",
        resolve:
        {
            "check":function($q, $log, $location, authorization)
            {
                if(!authorization.getToken())
                {
                    $location.path('/login');
                }
            }
        }
	})
	.when('/holiday/approved', { 
		templateUrl: "template/holiday/approved.html",
		controller: "holidayApprovedCtrl",
        resolve:
        {
            "check":function($q, $log, $location, authorization)
            {
                if(!authorization.getToken())
                {
                    $location.path('/login');
                }
            }
        }
	})
	.when('/holiday/canceled', { 
		templateUrl: "template/holiday/canceled.html",
		controller: "holidayCanceledCtrl",
        resolve:
        {
            "check":function($q, $log, $location, authorization)
            {
                if(!authorization.getToken())
                {
                    $location.path('/login');
                }
            }
        }
	})
	.when('/holiday/settings', { 
		templateUrl: "template/holiday/settings.html",
		controller: "holidaySettingsCtrl",
        resolve:
        {
            "check":function($q, $log, $location, authorization)
            {
                if(!authorization.getToken())
                {
                    $location.path('/login');
                }
            }
        }
	})

	.when('/holiday/timeline', { 
		templateUrl: "template/holiday/calendar.html",
		controller: "holidayTimelineCtrl",
        resolve:
        {
            "check":function($q, $log, $location, authorization)
            {
                if(!authorization.getToken())
                {
                    $location.path('/login');
                }
            }
        }
	})
    
	.when('/payslip', { 
		templateUrl: "template/payslip/payslip.html",
		controller: "payslipctrl",
        resolve:
        {
            "check":function($q, $log, $location, authorization)
            {
                if(!authorization.getToken())
                {
                    $location.path('/login');
                }
            }
        }
	})
	.when('/trs', { 
		templateUrl: "template/trs/index.html",
		controller: "trsctrl",
        resolve:
        {
            "check":function($q, $log, $location, authorization)
            {
                if(!authorization.getToken())
                {
                    $location.path('/login');
                }
            }
        }
	})
	.when('/ccv', { 
		templateUrl: "template/ccv/ccv.html",
		controller: "ccvctrl",
        resolve:
        {
            "check":function($q, $log, $location, authorization)
            {
                if(!authorization.getToken())
                {
                    $location.path('/login');
                }
            }
        }
	})
	.when('/ccv/signup', { 
		templateUrl: "template/ccv/ccv_signup.html",
		controller: "ccvsignupctrl",
        resolve:
        {
            "check":function($q, $log, $location, authorization)
            {
                if(!authorization.getToken())
                {
                    $location.path('/login');
                }
            }
        }
	})
	.when('/ccv/signup/info', { 
		templateUrl: "template/ccv/ccv_signup_info.html",
		controller: "ccvsignupinfoctrl",
        resolve:
        {
            "check":function($q, $log, $location, authorization)
            {
                if(!authorization.getToken())
                {
                    $location.path('/login');
                }
            }
        }
	})
	.when('/ccv/signup/request', { 
		templateUrl: "template/ccv/ccv_signup_request.html",
		controller: "ccvsignuprequestctrl",
        resolve:
        {
            "check":function($q, $log, $location, authorization)
            {
                if(!authorization.getToken())
                {
                    $location.path('/login');
                }
            }
        }
	})
	.when('/car', { 
		templateUrl: "template/car/car.html",
		controller: "carctrl",
        resolve:
        {
            "check":function($q, $log, $location, authorization)
            {
                if(!authorization.getToken())
                {
                    $location.path('/login');
                }
            }
        }
	})
	.when('/car/signup/info', { 
		templateUrl: "template/car/car_signup_info.html",
		controller: "carsignupinfoctrl",
        resolve:
        {
            "check":function($q, $log, $location, authorization)
            {
                if(!authorization.getToken())
                {
                    $location.path('/login');
                }
            }
        }
	})
	.when('/car/signup/request', { 
		templateUrl: "template/car/car_signup_request.html",
		controller: "carsignuprequestctrl",
        resolve:
        {
            "check":function($q, $log, $location, authorization)
            {
                if(!authorization.getToken())
                {
                    $location.path('/login');
                }
            }
        }
	})
	.when('/ctw', { 
		templateUrl: "template/ctw/ctw.html",
		controller: "ctwctrl",
        resolve:
        {
            "check":function($q, $log, $location, authorization)
            {
                if(!authorization.getToken())
                {
                    $location.path('/login');
                }
            }
        }
	})
	.when('/ctw/signup/info', { 
		templateUrl: "template/ctw/ctw_signup_info.html",
		controller: "ctwsignupinfoctrl",
        resolve:
        {
            "check":function($q, $log, $location, authorization)
            {
                if(!authorization.getToken())
                {
                    $location.path('/login');
                }
            }
        }
	})
	.when('/ctw/signup/request', { 
		templateUrl: "template/ctw/ctw_signup_request.html",
		controller: "ctwsignuprequestctrl",
        resolve:
        {
            "check":function($q, $log, $location, authorization)
            {
                if(!authorization.getToken())
                {
                    $location.path('/login');
                }
            }
        }
	})
	.when('/whitegood', { 
		templateUrl: "template/whitegood/whitegood.html",
		controller: "whitegoodctrl",
        resolve:
        {
            "check":function($q, $log, $location, authorization)
            {
                if(!authorization.getToken())
                {
                    $location.path('/login');
                }
            }
        }
	})
	.when('/whitegood/signup/info', { 
		templateUrl: "template/whitegood/whitegood_signup_info.html",
		controller: "whitegoodsignupinfoctrl",
        resolve:
        {
            "check":function($q, $log, $location, authorization)
            {
                if(!authorization.getToken())
                {
                    $location.path('/login');
                }
            }
        }
	})
	.when('/whitegood/signup/request', { 
		templateUrl: "template/whitegood/whitegood_signup_request.html",
		controller: "whitegoodsignuprequestctrl",
        resolve:
        {
            "check":function($q, $log, $location, authorization)
            {
                if(!authorization.getToken())
                {
                    $location.path('/login');
                }
            }
        }
	})
	/*
    .when('/object', { 
		templateUrl: "core/object.html",
		controller: "objectctrl",
        resolve:
        {
            "check":function($q, $log, $location, authorization)
            {
                if(!authorization.getToken())
                {
                    $location.path('/login');
                }
            }
        }
	})
    .when('/notification', { 
		templateUrl: "notification/notification.html",
		controller: "notificationctrl",
        resolve:
        {
            "check":function($q, $log, $location, authorization)
            {
                if(!authorization.getToken())
                {
                    $location.path('/login');
                }
            }
        }
	})
	*/
    .when('/emi', { 
		templateUrl: "template/emi/index.html",
		controller: "emictrl",
        resolve:
        {
            "check":function($q, $log, $location, authorization)
            {
                if(!authorization.getToken())
                {
                    $location.path('/login');
                }
            }
        }
	})
    .when('/ess', { 
		templateUrl: "template/ess/ess.html",
		controller: "essctrl",
        resolve:
        {
            "check":function($q, $log, $location, authorization)
            {
                if(!authorization.getToken())
                {
                    $location.path('/login');
                }
            }
        }
	})
    .when('/ess/updated', { 
		templateUrl: "template/ess/ess_updated.html",
		controller: "essupdatedctrl",
        resolve:
        {
            "check":function($q, $log, $location, authorization)
            {
                if(!authorization.getToken())
                {
                    $location.path('/login');
                }
            }
        }
	})
    .when('/wagecheck', { 
		templateUrl: "template/wagecheck/index.html",
		controller: "wagecheckctrl",
        resolve:
        {
            "check":function($q, $log, $location, authorization)
            {
                if(!authorization.getToken())
                {
                    $location.path('/login');
                }
            }
        }
	})
	.when('/404', { 
		templateUrl: "template/error/404.html",
		controller: "404ctrl",
        resolve:
        {
            "check":function($q, $log, $location, authorization)
            {
                if(!authorization.getToken())
                {
                    $location.path('/login');
                }
            }
        }
	})
	.otherwise({
		redirectTo: "/404"
	});
});

myApp.run(function($rootScope, $location, $log, $http, $cookies, $localStorage, $sessionStorage, jwtHelper, authorization, logoutPopup)
{
    $rootScope.$on( "$routeChangeStart", function(event, next, current) 
    {
		if($location.path() != '/logout' && $location.path() != '/login')
		{
			logoutPopup.popup()
		}
		$rootScope.location = $location;
		$rootScope.loggedIn = true;
		var token = authorization.getToken()
		if(token && jwtHelper.isTokenExpired(token))
		{
			authorization.logout();
			$rootScope.loggedIn = false;
		}
		if(!token)
		{
			$rootScope.loggedIn = false;
		}

		if($location.path() != '/ccv/signup')
		{
			delete $rootScope.right_side_details
		}
		/*	
		if (!$window.ga)
        return;
 
        $window.ga('send', 'pageview', { page: $location.path() });
		
		serviceWorker.sw();
		*/

    });
});


function capitalizeFirstLetter(string) 
{
    return string.charAt(0).toUpperCase() + string.slice(1);
}


myApp.controller('logincontroller', function($scope,$rootScope,$location,$log,$route,authorization)
{	
	$rootScope.location = $location;
    
    $scope.username = "admin"
    $scope.password = "password"
	
	$scope.login = function()
	{	
			$rootScope.loader_buffer = true;
            var username = this.username;
            var password = this.password;
			authorization.auth(username, password).then(function(data)
			{
				if(data.status == -1)
				{
					$scope.error_message = "It seems we have technical difficulty please try again later. sorry for your inconvenience.";
					$rootScope.loader_buffer = false;
				}
				else if(data.status != 200)
				{
					$scope.error_message = data.data.error.message;
					$rootScope.loader_buffer = false;
				}
				else if(data.status == 200)
				{
					$route.reload()
				}

			});
	};
});


myApp.controller('mainctrl', function($scope,$cookies,$location,$log,$http,$timeout,$rootScope,main)
{
	main.getMain().then(function(data)
	{
		$scope.benefits = data
	})

});


myApp.controller('company_controller', function($q,$scope,$cookies,$location,$log,$http,$rootScope,$timeout,company)
{
	var comapny = company.getCompanyDetail()

	$q.when(comapny).then(function(data) 
	{
		$rootScope.employer_company = data
	});
});


myApp.controller('voucherctrl', function($scope,$cookies,$location,$log,$http,$timeout,$rootScope,$sce,offers)
{

	offers.getVoucherCategories().then(function(data)
	{
		$scope.categories = data.data.category;

		offers.getVoucherTypeOffers().then(function(data)
		{
			$scope.types = data.data.type;

			offers.getVoucherOffers().then(function(data)
			{
				if(data.status == 200)
				{
					var voucherArr = []
					for(var voucher in data.data.voucher)
					{
						voucherArr.push(data.data.voucher[voucher])
					}
					$scope.vouchers = voucherArr
				}
				else
				{
					$scope.vouchers = data
				}
			})
		})
	})

	$scope.select_offer_type = function(type)
	{
		$scope.offer_type = type
	};

	
	$scope.voucher_info = function(voucher)
	{
		$rootScope.show_overlay = true;
		$scope.voucher_selected = voucher;
	};

    
	$scope.externalLink = function(link)
	{
		var org_voucher = $scope.voucher_selected;
		$scope.voucher_selected = false
		externalLink = link;
		event.preventDefault();
		$scope.offer_voucher_info = false;
		
		$rootScope.popup_confirm = true;
		$rootScope.confirmTitle = $sce.trustAsHtml("Confirm?");;
		$rootScope.confirmInfo = $sce.trustAsHtml("<p>You are about to visit an external website.</p>" +
						  "<p>Ernest Grant Benefits are not responsible for the content on any external services.</p>" +
						  "<p>Click the following link to confirm you are exiting this sit</p>");
		$rootScope.confirm_show = true;
		$rootScope.confirm_value = "OK";
		$rootScope.cancel_show = true;
		$rootScope.cancel_value = "CANCEL";

		$rootScope.confirm = function()
		{
			window.open(externalLink,'_blank');
			$rootScope.popup_confirm = false;
			$scope.voucher_selected = org_voucher;
		};
		
		$rootScope.cancel = function()
		{
			$rootScope.popup_confirm = false;
			$scope.voucher_selected = org_voucher;
		};
	};
	

	$rootScope.close = function()
	{
		$rootScope.show_overlay = false;
		$rootScope.popup_confirm = false;
		$scope.voucher_selected = false;
	};
});
		 
myApp.controller('cashbackctrl', function($scope,$cookies,$location,$log,$http,$timeout,$rootScope,$sce,offers)
{
	offers.getCashbackCategories().then(function(data)
	{
		$scope.categories = data.data.category;

		offers.getCashbackOffers().then(function(data)
		{
			if(data.status == 200)
			{
				var cashbackArr = []
				for(var cashback in data.data.cashback)
				{
					cashbackArr.push(data.data.cashback[cashback])
				}
				$scope.cashback = cashbackArr
			}
			else
			{
				$scope.cashback = data
			}
		})
	})

	$scope.order_type = function(order)
	{
		$scope.order_active = order;
	};
	
	$scope.discount_short_replace = function(value)
	{
		return value.replace("&#163;", "£");;
	};

	$scope.category_select = function(category)
	{
		$rootScope.show_overlay = false;
		$scope.cashback_selected = false;
		$scope.cashback_category = category
	}
	
	$scope.cashback_info = function (cashback)
	{
		$rootScope.show_overlay = true;
		$scope.cashback_selected = cashback
	};
	
	$scope.externalLink = function(link)
	{
		externalLink = link;
		event.preventDefault();
		var org_cashback = $scope.cashback_selected
		$scope.cashback_selected = false;
		
		$rootScope.popup_confirm = true;
		$rootScope.confirmTitle = $sce.trustAsHtml("Confirm?");;
		$rootScope.confirmInfo = $sce.trustAsHtml("<p>You are about to visit an external website.</p>" +
						  "<p>Ernest Grant Benefits are not responsible for the content on any external services.</p>" +
						  "<p>Click the following link to confirm you are exiting this sit</p>");
		$rootScope.confirm_show = true;
		$rootScope.confirm_value = "OK";
		$rootScope.cancel_show = true;
		$rootScope.cancel_value = "CANCEL";

		$rootScope.confirm = function()
		{
			window.open(externalLink,'_blank');
			$rootScope.popup_confirm = false;
			$scope.cashback_selected = org_cashback;
		};
		
		$rootScope.cancel = function()
		{
			$rootScope.popup_confirm = false;
			$scope.cashback_selected = org_cashback;
		};
	};

	$rootScope.close= function()
	{
		$rootScope.show_overlay = false;
		$rootScope.popup_confirm = false;
		$scope.cashback_selected = false;
	};

});


myApp.controller('giftcardctrl', function($scope,$cookies,$location,$log,$http,$timeout,$rootScope,$sce,offers)
{
	offers.getGiftcardCategories().then(function(data)
	{
		$scope.categories = data.data.category

		offers.getGiftcardTypeOffers().then(function(data)
		{
			$scope.types = data.data.type;

			offers.getGiftcardOffers().then(function(data)
			{
				if(data.status == 200)
				{
					var giftcardArr = []
					for(var giftcard in data.data.giftcard)
					{
						giftcardArr.push(data.data.giftcard[giftcard])
					}
					$scope.giftcard = giftcardArr
				}
				else
				{
					$scope.giftcard = data
				}
			})
		})

		
	});
	
	$scope.order_type = function(order)
	{
		$scope.order_active = order;
	};
	
	$scope.select_offer_type = function(type)
	{
		$scope.offer_type = type
	}

	$scope.category_select = function(category)
	{
		$rootScope.show_overlay = false;
		$scope.giftcard_selected = false;
		$scope.giftcard_category = category
	}

	$scope.giftcard_info = function(giftcard)
	{		
		$rootScope.show_overlay = true;
		$scope.giftcard_selected = giftcard
	};
	
	var more_info_show = true;
	$scope.more_info = function(descriptionShort, descriptionLong)
	{
		if(more_info_show == true)
		{
			$scope.more_details = "Less...";
			$scope.description = descriptionLong;
			more_info_show = false;
		}
		else
		{
			$scope.more_details = "More...";
			$scope.description = descriptionShort;
			more_info_show = true;
		}
		
	};
	
	$scope.tandc = function(tandc)
	{
		$scope.titletandc = "Terms & Conditions";
		$scope.tandcshow = true;
		$scope.tandcinfo = $sce.trustAsHtml(""+tandc+"");

		$scope.close_tandc = function()
		{
			$scope.tandcshow = false;
		};
	};
	
	
	$scope.external_link = function(card_code)
	{
		var org_giftcard = $scope.giftcard_selected
		$scope.giftcard_selected = false;
		event.preventDefault();
		$scope.offer_giftcard_info = false;
		$rootScope.popup_confirm = true;
		$rootScope.confirmTitle = $sce.trustAsHtml("Confirm?");;
		$rootScope.confirmInfo = $sce.trustAsHtml("<p>You are about to visit an external website.</p>" +
						  "<p>Ernest Grant Benefits are not responsible for the content on any external services.</p>" +
						  "<p>Click the following link to confirm you are exiting this sit</p>");
		$rootScope.confirm_show = true;
		$rootScope.confirm_value = "OK";
		$rootScope.cancel_show = true;
		$rootScope.cancel_value = "CANCEL";

		$rootScope.confirm = function()
		{
			offers.giftcardExternalLink(org_giftcard).then(function(data)
			{
				window.open(data,'_blank');
				$rootScope.popup_confirm = false;
				$scope.giftcard_selected = org_giftcard;
			})

		};
		
		$rootScope.cancel = function()
		{
			$rootScope.show_overlay = true;
			$rootScope.popup_confirm = false;
			$scope.giftcard_selected = org_giftcard;
		};
	};
	
	
	$rootScope.close = function()
	{
		$rootScope.show_overlay = false;
		$rootScope.popup_confirm = false;
		$scope.giftcard_selected = false;
		
	};
	

	
});

myApp.controller('holidayBookCtrl', function($scope,$cookies,$location,$log,$http,$rootScope,$timeout,$sce,$window,$route,holiday,datelibs,utils)
{	
	var startHalfDay = 0;	
	var endHalfDay = 0;	
	var startNoon = 1;
	var endNoon = 1;
    
    $scope.noonOptions = [
        {value:1,name:'Full day'}, 
        {value:2,name:'Morning'}, 
        {value:3,name:'Afternoon'}
    ];
    
    $scope.startNoon = $scope.noonOptions[0].value;
    $scope.endNoon = $scope.noonOptions[0].value;
    
	$scope.year = datelibs.getYearDate();
	
	$scope.startDateModel = moment().format('DD/MM/YYYY');
	$scope.endDateModel = moment().format('DD/MM/YYYY');

	holiday.getHolidayDetail().then(function(data)
	{
		if(data.status == 200)
		{
			$scope.holiday_detail = data
			$scope.allowance = $scope.holiday_detail.data.holiday_detail_list[0].allowance;
			$scope.allowance_type = $scope.holiday_detail.data.holiday_detail_list[0].allowance_type;
			$scope.daysOff = $scope.holiday_detail.data.holiday_detail_list[0].days_off;
		}
		else
		{
			$scope.holiday_detail = data
		}


		holiday.getHolidayList('1,4').then(function(listHolidays)
		{
            if(listHolidays.totalDayTaken)
            {
                $scope.totalDayTaken = listHolidays.totalDayTaken[$scope.year];
            }
			$scope.checkHolidayList = function(start, end)
			{
				for(var listHoliday in listHolidays.listHoliday)
				{
					var checkStart  = listHolidays.listHoliday[listHoliday].start_date;
					var checkEnd  = listHolidays.listHoliday[listHoliday].end_date;
					if(checkRangeDateInBetween(start, end, checkStart, checkEnd))
					{
						return listHolidays.listHoliday[listHoliday];
					}
				}
			};

			$scope.calculate();
		});
	})


    $scope.onStartPikadaySelect = function onPikadaySelect(pikaday) 
	{
		var date = moment(pikaday._d).format("DD/MM/YYYY")
		$scope.startDateModel = parseDateFormat(date);
        $scope.pikerCheck()
    };

    $scope.onEndPikadaySelect = function onPikadaySelect(pikaday) 
	{
		var date = moment(pikaday._d).format("DD/MM/YYYY")
	  	$scope.endDateModel = parseDateFormat(date);
        $scope.pikerCheck()
    };

	$scope.pikerCheck = function()
	{
		var start = parseDate($scope.startDateModel);
		var end = parseDate($scope.endDateModel);

		if(start && end)
		{
			if(start > end)
			{	
				$scope.greaterDate = true
                $scope.holidayTaken = 0;
			}
			else
			{
                if(moment(start).format('DD/MM/YYYY') == moment(end).format('DD/MM/YYYY'))
                {
                    endHalfDay = 0;
                    endNoon = 1;
                }
				$scope.greaterDate = false
				$scope.calculate();
			}
		}
	};
    
    
    $scope.HalfDayOption = function(option, noon)
    {
		if(option == "start")
		{
			if(noon == 1)
			{
				startHalfDay = 0;
				startNoon = noon
			}
			else
			{
				startHalfDay = 0.5;
				startNoon = noon
			}
		}
		else if(option == "end")
		{
			if(noon == 1)
			{
				endHalfDay = 0;
				endNoon = noon;
			}
			else
			{
				endHalfDay = 0.5;
				endNoon = noon
			}
		}

		$scope.calculate();
    };
    

    
    holiday.getPublicHolidays().then(function(response)
    {
        $scope.optionDisable = function(option, date)
        {
            var day = moment(parseDate(date)).format("dddd").toLowerCase()
            var publicHoliday = response[moment(parseDate(date)).format("YYYY-MM-DD")];
            if(day == "saturday" || day == "sunday" || publicHoliday || utils.inArray(day, $scope.daysOff))
            {
                if(option == "start")
                {
                    startHalfDay = 0;
                    startNoon = 1
                }
                else if(option == "end")
                {
                    endHalfDay = 0;
                    endNoon = 1;
                }
                return true;
            }
            else
            {
                return false;
            }
        };
    });
    
	
    $scope.calculate = function()
    {
		var start = parseDate($scope.startDateModel)
		var end = parseDate($scope.endDateModel)

        var countdays = datelibs.getBusinessWorkingDays(start, end);

		datelibs.getPublicAndDaysOff(start, end, $scope.daysOff).then(function(data)
		{
			var countpublicdays = data
		
			if(countdays >= 0)
			{
				$scope.holidayTaken = countdays - startHalfDay - endHalfDay  - countpublicdays;

				var total = 0;
				
				if($scope.allowance)
				{
					total += $scope.allowance;
				}
				if($scope.totalDayTaken)
				{
					total -= $scope.totalDayTaken;
				}
				if($scope.holidayTaken)
				{
					total -= $scope.holidayTaken;
				}

				$scope.remaining = total;
			}
		})
    };

    $scope.submit_request = function()
    {
		var start = $scope.startDateModel
		var end =  $scope.endDateModel

		var start_halfday = "";
    	var end_halfday = "";

		if($scope.checkHolidayList(start, end))
		{
			var listHoliday = $scope.checkHolidayList(start, end);
			var start_date = parseDateFormat(listHoliday.start_date)
			var end_date = parseDateFormat(listHoliday.end_date)
			var start_halfday = listHoliday.start_halfday;
			var end_halfday = listHoliday.end_halfday;
			var status = listHoliday.status;

			var status_message = "";

			if(status == "pending")
			{
				status_message = "pending";
			}
			else if(status == "accept")
			{
				status_message = "approved";
			}

			if(start_halfday != 'false')
			{
				start_halfday = "("+capitalizeFirstLetter(start_halfday)+")";
			}
			else
			{
				start_halfday = ""
			}
			
			if(end_halfday != 'false')
			{
				end_halfday = "("+capitalizeFirstLetter(end_halfday)+")";
			}
			else
			{
				end_halfday = ""
			}
			
			$rootScope.show_overlay = true;
			$rootScope.popup_confirm = true;
			$rootScope.confirmTitle = $sce.trustAsHtml("Date already booked...");
			if(start_date != end_date)
			{
				$rootScope.confirmInfo = $sce.trustAsHtml("<p>You have already booked from <b>"+start_date+start_halfday+"</b> - " +
														  "<b>"+end_date+end_halfday+"</b> that is currently <b>"+status_message+"</b>, please choose different date...");
			}
			else
			{
				$rootScope.confirmInfo = $sce.trustAsHtml("<p>You have already booked <b>"+start_date+start_halfday+"</b> that is currently <b>"+status_message+"</b>, please choose different date...");
			}
			$rootScope.confirm_show = false;
			$rootScope.cancel_show = true;
			$rootScope.cancel_value = "Close";
		}
		else
		{
			var start_date = parseDateFormat(start)
			var end_date =  parseDateFormat(end)

			if(startNoon != 1)
			{
				if(startNoon == 2)
				{
					start_halfday = "(Morning)";
				}
				else
				{
					start_halfday = "(Afternoon)";
				}
			}
			
			if(endNoon != 1)
			{
				if(endNoon == 2)
				{
					end_halfday = "(Morning)";
				}
				else
				{
					end_halfday = "(Afternoon)";
				}
			}
			
    		$rootScope.show_overlay = true;
    		$rootScope.popup_confirm = true;
    		$rootScope.confirmTitle = $sce.trustAsHtml("Confirm?");
			if(start_date != end_date)
			{
				$rootScope.confirmInfo = $sce.trustAsHtml("<p>You have booked from <b>"+start_date+start_halfday+"</b> "+" - <b>"+end_date+end_halfday+"</b> that will deduct <b>"+$scope.holidayTaken+capitalizeFirstLetter($scope.allowance_type)+"(s)<b/> from your allowance?");
			}
			else
			{
				$rootScope.confirmInfo = $sce.trustAsHtml("<p>You have booked <b>"+start_date+start_halfday+"</b> that will deduct <b>"+$scope.holidayTaken+capitalizeFirstLetter($scope.allowance_type)+"(s)<b/> from your allowance?");
			}
    		$rootScope.confirm_show = true;
    		$rootScope.cancel_show = true;
    		$rootScope.confirm_value = "OK";
    		$rootScope.cancel_value = "CANCEL";
    	}

    	$rootScope.confirm  = function()
    	{
            var start_date = parseDateFormatGAE(start);
            var end_date = parseDateFormatGAE(end);
			holiday.holidayBook(start_date, end_date, startNoon, endNoon, $scope.holidayTaken).then(function(data)
			{
				if(data)
				{
					var start_date = parseDateFormat(start)
					var end_date =  parseDateFormat(end)
					
					$rootScope.confirmTitle = $sce.trustAsHtml("Successfully Booked");
					if(start_date != end_date)
					{
						$rootScope.confirmInfo = $sce.trustAsHtml("<p>You have successfully booked from <b>"+start_date+start_halfday+"</b> " +
														" - <b>"+end_date+end_halfday+"</b></p>");
					}
					else
					{
						$rootScope.confirmInfo = $sce.trustAsHtml("<p>You have successfully booked <b>"+start_date+start_halfday+"</b></p>");
					}
					$rootScope.confirm_show = false;
					$rootScope.cancel_show = true;
					$rootScope.cancel_value = "CLOSE";
                    $route.reload()
				}
				else
				{
					$rootScope.confirmTitle = $sce.trustAsHtml(errorTitleMessage);;
					$rootScope.confirmInfo = $sce.trustAsHtml(errorMessage);
					$rootScope.confirm_show = false;
					$rootScope.cancel_show = true;
					$rootScope.cancel_value = "CLOSE";

				}

			})
    	};

    	$rootScope.cancel  = function()
    	{
    		$rootScope.show_overlay = false;
			$rootScope.popup_confirm = false;
    	};
    	$rootScope.close  = function()
    	{
    		$rootScope.show_overlay = false;
			$rootScope.popup_confirm = false;
    	};

    };
});


myApp.controller('holidayPendingCtrl', function($scope,$cookies,$location,$log,$http,$timeout,$rootScope,$sce,$window,holiday)
{
	holiday.getHolidayBookedList(1).then(function(data)
	{
		$scope.listHolidays = data
	})

	$scope.holiday_withdraw = function(holidayinfo)
	{
		var holiday_book_key = holidayinfo.holiday_book_key;
		var start_date = holidayinfo.start_date;
		var start_date_format = parseDateFormat(start_date);
		var end_date = holidayinfo.end_date;
		var end_date_format = parseDateFormat(end_date);
		var start_halfday = holidayinfo.start_halfday;
		var end_halfday = holidayinfo.end_halfday;
		var hashed = holidayinfo.token;
		if(start_halfday != 'false')
		{
			start_halfday = " ("+capitalizeFirstLetter(start_halfday)+" )";
		}
		else
		{
			start_halfday = "";
		}
		if(end_halfday != 'false')
		{
			end_halfday = " ("+capitalizeFirstLetter(end_halfday)+") ";
		}
		else
		{
			end_halfday = "";
		}
		
		$rootScope.show_overlay = true;
		$rootScope.popup_confirm = true;
		$rootScope.confirmTitle = $sce.trustAsHtml("Confirm?");;
		$rootScope.confirmInfo = $sce.trustAsHtml("<p>Do you want to withdraw from <b>"+start_date_format+start_halfday+"</b> " +
																			 " - <b>"+end_date_format+end_halfday+"</b>?");
		$rootScope.confirm_show = true;
		$rootScope.confirm_value = "OK";
		$rootScope.cancel_show = true;
		$rootScope.cancel_value = "CANCEL";
		
		$rootScope.confirm = function()
		{
			holiday.holidayBookWithdraw(holiday_book_key, hashed).then(function(data)
			{
				if(data)
				{
					$rootScope.confirmTitle = $sce.trustAsHtml("Successfully withdrawn");;
					$rootScope.confirmInfo = $sce.trustAsHtml("<p>You have successfully withdrawn from <b>"+start_date_format+start_halfday+"</b> " +
																			 " - <b>"+end_date_format+end_halfday+"</b>.</p>");
					$rootScope.confirm_show = false;
					$rootScope.cancel_show = true;
					$rootScope.cancel_value = "CLOSE";
				}
				else
				{
					$rootScope.confirmTitle = $sce.trustAsHtml(errorTitleMessage);;
					$rootScope.confirmInfo = $sce.trustAsHtml(errorMessage);
					$rootScope.confirm_show = false;
					$rootScope.cancel_show = true;
					$rootScope.cancel_value = "CLOSE";
				}

			})
		}
		$rootScope.cancel = function()
		{
			$rootScope.show_overlay = false;
			$rootScope.popup_confirm = false;
		};
	};
});

myApp.controller('holidayApprovedCtrl', function($scope,$cookies,$location,$log,$http,$timeout,$rootScope,$sce,$window,holiday)
{	
	holiday.getHolidayBookedList(4).then(function(data)
	{
		$scope.listHolidays = data
	})

	$scope.holiday_cancel = function(holidayinfo)
	{
		var holiday_book_key = holidayinfo.holiday_book_key;
		var start_date = holidayinfo.start_date;
		var start_date_format = parseDateFormat(start_date);
		var end_date = holidayinfo.end_date;
		var end_date_format = parseDateFormat(end_date);
		var start_halfday = holidayinfo.start_halfday;
		var end_halfday = holidayinfo.end_halfday;
		var hashed = holidayinfo.token;
		
		if(start_halfday != 'false')
		{
			start_halfday = " ("+start_halfday+") ";
		}
		else
		{
			start_halfday = "";
		}
		if(end_halfday != 'false')
		{
			end_halfday = " ("+end_halfday+") ";
		}
		else
		{
			end_halfday = "";
		}
		
		$rootScope.show_overlay = true;
		$rootScope.popup_confirm = true;
		$rootScope.confirmTitle = $sce.trustAsHtml("Confirm?");;
		$rootScope.confirmInfo = $sce.trustAsHtml("<p>Do you want to cancel from <b>"+start_date_format+start_halfday+"</b> " +
																			 " - <b>"+end_date_format+end_halfday+"</b>?<p>");
		$rootScope.confirm_show = true;
		$rootScope.confirm_value = "OK";
		$rootScope.cancel_show = true;
		$rootScope.cancel_value = "CANCEL";
		
		$rootScope.confirm = function()
		{
			holiday.holidayBookCancel(holiday_book_key, hashed).then(function(data)
			{
				if(data)
				{
					$rootScope.confirmTitle = $sce.trustAsHtml("Successfully canceled");;
					$rootScope.confirmInfo = $sce.trustAsHtml("<p>You have successfully canceled from <b>"+start_date_format+start_halfday+"</b> " +
																			 " - <b>"+end_date_format+end_halfday+"</b>.</p>");
					$rootScope.confirm_show = false;
					$rootScope.cancel_show = false;
					$rootScope.cancel_value = "CLOSE";
				}
				else
				{
					$rootScope.confirmTitle = $sce.trustAsHtml(errorTitleMessage);;
					$rootScope.confirmInfo = $sce.trustAsHtml(errorMessage);
					$rootScope.confirm_show = false;
					$rootScope.cancel_show = true;
					$rootScope.cancel_value = "CLOSE";
				}

			})
			
		}
		$rootScope.cancel = function()
		{
			$rootScope.show_overlay = false;
			$rootScope.popup_confirm = false;
		};
	};
});

myApp.controller('holidayCanceledCtrl', function($scope,$cookies,$location,$log,$http,$timeout,$rootScope,$sce,holiday)
{
	holiday.getHolidayBookedList().then(function(data)
	{
		$scope.listHolidays = data
	})
});


myApp.controller('holidayRequestsctrl', function($scope,$cookies,$location,$log,$http,$timeout,$rootScope,$sce,$window,holiday)
{
	holiday.getHolidayListAuth(1, '1').then(function(data)
	{
		if(data)
		{
			$scope.listHolidays = data
		}
	});
	
	$scope.holiday_confirm = function(list, status)
	{
		var statusMessage = ""
		if(status == 4)
		{
			statusMessage = "Approve";
		}
		else if(status == 2)
		{
			statusMessage = "Reject";
		}
		var user_id = list.user_id;
		var employee = list.employee;
		var holiday_book_key = list.holiday_book_key;
		var start_date = list.start_date;
		var start_date_format = parseDateFormat(start_date);
		var end_date = list.end_date;
		var end_date_format = parseDateFormat(end_date);
		var start_halfday = list.start_halfday;
		var end_halfday = list.end_halfday;
		var hashed = list.token;
		
		if(start_halfday != 'false')
		{
			start_halfday = " ("+start_halfday+") ";
		}
		else
		{
			start_halfday = "";
		}
		if(end_halfday != 'false')
		{
			end_halfday = " ("+end_halfday+") ";
		}
		else
		{
			end_halfday = "";
		}
		
		$rootScope.show_overlay = true;
		$rootScope.popup_confirm = true;
		$rootScope.confirmTitle = $sce.trustAsHtml("Confirm?");;
		$rootScope.confirmInfo = $sce.trustAsHtml("<p>Do you want to <b>"+statusMessage+"</b> for <b>"+user_id+" - "+capitalizeFirstLetter(employee.firstname)+" "+capitalizeFirstLetter(employee.lastname)+"</b> from <b>"+start_date_format+start_halfday+"</b> " +
																			 " - <b>"+end_date_format+end_halfday+"</b>?");
		$rootScope.confirm_show = true;
		$rootScope.confirm_value = "OK";
		$rootScope.cancel_show = true;
		$rootScope.cancel_value = "CANCEL";

		$rootScope.confirm = function()
		{
			holiday.holidayBookApproval(holiday_book_key, hashed, status).then(function(data)
			{
				if(data)
				{
					var statusMessage = ""
					if(status == 4)
					{
						statusMessage = "approved";
					}
					else if(status == 2)
					{
						statusMessage = "canceled";
					}
					$rootScope.confirmTitle = $sce.trustAsHtml("Successfully " + statusMessage);;
					$rootScope.confirmInfo = $sce.trustAsHtml("<p>You have successfully "+statusMessage+" from <b>"+start_date_format+start_halfday+"</b> " +
																				" - <b>"+end_date_format+end_halfday+"</b>.</p>");
					$rootScope.confirm_show = false;
					$rootScope.cancel_show = false;
					$rootScope.cancel_value = "CLOSE";

					holiday.getHolidayBookedList(4).then(function(data)
					{
						$scope.listHolidays = data
					})
				}
				else
				{
					$rootScope.confirmTitle = $sce.trustAsHtml(errorTitleMessage);;
					$rootScope.confirmInfo = $sce.trustAsHtml(errorMessage);
					$rootScope.confirm_show = false;
					$rootScope.cancel_show = true;
					$rootScope.cancel_value = "CLOSE";
				}
			});
		};

		$rootScope.cancel = function()
		{
			$rootScope.show_overlay = false;
			$rootScope.popup_confirm = false;
			$scope.booking_controller_info_controller = true;
		};
	};
	
	$rootScope.close = function()
	{
		$rootScope.show_overlay = false;
		$rootScope.popup_confirm = false;
		$scope.booking_controller_info_controller = true;
	};
});


myApp.controller('holidaySettingsCtrl', function($scope,$cookies,$location,$log,$http,$timeout,$rootScope,$sce,$window,holiday,utils)
{	
	$scope.weekdays = {'M':'monday',
					   'T':'tuesday',
					   'W':'wednesday',
					   'TH':'thursday',
					   'F':'friday'};

	$scope.allowance_type = {'day':'day',
							 'hour':'hour'}
	
	holiday.getHolidayDetailAuth(1).then(function(data)
	{
		$scope.team_option = {}

		for(holidayDetail in data)
		{
			$scope.team_option[data[holidayDetail].team] = data[holidayDetail].team;
		}

		$scope.details = data;
	})
	
	$scope.checkdaysoff = function(day, dayoff)
	{
		return(utils.inArray(day, dayoff))
	};

	$scope.submit_details = function(detail)
	{
		var holiday_key = detail.holiday_key;
		var user_id = detail.user_id;
		var employee = detail.employee
		var position = detail.position;
		var allowance = detail.allowance;
		var allowance_type = detail.allowance_type;
		var allowance_type_value = 0;
		var day_offArr = [];
		
		for(option in detail.daysoffoption)
		{
			if(detail.daysoffoption[option].selected == true)
			{
				day_offArr.push(option);
			}
		}
		var days_off = day_offArr.join();
		
		$rootScope.show_overlay = true;
		$rootScope.popup_confirm = true;
		$rootScope.confirmTitle = $sce.trustAsHtml("Confirm?");;
		$rootScope.confirmInfo = $sce.trustAsHtml("You have updated holiday detail for "+user_id+" - "+capitalizeFirstLetter(employee.firstname)+" "+capitalizeFirstLetter(employee.lastname));
		$rootScope.confirm_show = true;
		$rootScope.confirm_value = "OK";
		$rootScope.cancel_show = true;
		$rootScope.cancel_value = "CANCEL";

		$rootScope.confirm = function()
		{
			if(allowance_type == 'day')
			{
				allowance_type_value = 1
			}
			else if(allowance_type == 'hour')
			{
				allowance_type_value = 2
			}
			holiday.holidayDetailUpdate(holiday_key, user_id, allowance, allowance_type_value, days_off).then(function(data)
			{
				if(data)
				{
					$rootScope.confirmTitle = $sce.trustAsHtml("Successfully updated");;
					$rootScope.confirmInfo = $sce.trustAsHtml("<p>Holiday detail has been updated for "+user_id+" - "+capitalizeFirstLetter(employee.firstname)+" "+capitalizeFirstLetter(employee.lastname)+"</p>");
					$rootScope.confirm_show = false;
					$rootScope.cancel_show = true;
					$rootScope.cancel_value = "CLOSE";
				}
				else
				{
					$rootScope.confirmTitle = $sce.trustAsHtml(errorTitleMessage);;
					$rootScope.confirmInfo = $sce.trustAsHtml(errorMessage);
					$rootScope.confirm_show = false;
					$rootScope.cancel_show = true;
					$rootScope.cancel_value = "CLOSE";
				}

			});
		};

		$rootScope.close = function()
		{
			$rootScope.show_overlay = false;
			$rootScope.popup_confirm = false;
			$scope.booking_controller_info_controller = true;
			holiday.getHolidayDetailAuth(1).then(function(data)
			{
				$scope.details = data;
			})
		};
		$rootScope.cancel = function()
		{
			$rootScope.show_overlay = false;
			$rootScope.popup_confirm = false;
			$scope.booking_controller_info_controller = true;
			holiday.getHolidayDetailAuth(1).then(function(data)
			{
				$scope.details = data;
			})
		};
	};
});

myApp.controller('holidayTimelineCtrl', function($scope,$cookies,$location,$log,$http,$timeout,$rootScope,$sce,$window,$route,holiday,datelibs)
{
	holiday.getPublicHolidays().then(function(data)
	{
		$scope.publicHoliday = data
	})

	$scope.status_option = ["Status", "Accept", "Cancel", "Pending"];

	$scope.status_class = {accept:"accept", 
						   pending:"pending", 
						   cancel:"cancel"}

	//Date Navigation 
	var currentDate = moment();
	var year = moment(currentDate).format("YYYY");
	var month = moment(currentDate, "YYYY-MM-DD").format("MM");

	$scope.month_nav = function(day, month, year)
	{	
		if(day && month && year)
		{
			currentDate = moment(year+"-"+month+"-"+day, "YYYY-MM-DD")
			$scope.year = moment(currentDate).format("YYYY");
			$scope.month = moment(currentDate, "YYYY-MM-DD").format("MMMM");
			$scope.monthVal = moment(currentDate, "YYYY-MM-DD").format("MM");
			$scope.dayVal = moment(currentDate, "YYYY-MM-DD").format("DD");
		}

		var preMonth = moment(currentDate, "DD/MM/YYYY");
		preMonth.subtract(1, 'months').toDate();
		
		var nextMonth = moment(currentDate, "DD/MM/YYYY");
		nextMonth.add(1, 'months').toDate()

		$scope.preDayVal = moment(preMonth).format("MM");
		$scope.preMonthVal = moment(preMonth).format("MM");
		$scope.preMonthStr = moment(preMonth).format("MMMM");
		$scope.preYearVal = moment(preMonth).format("YYYY");

		$scope.nextDayVal = moment(nextMonth).format("MM");
		$scope.nextMonthVal = moment(nextMonth).format("MM");
		$scope.nextMonthStr = moment(nextMonth).format("MMMM");
		$scope.nextYearVal = moment(nextMonth).format("YYYY");
		
		var date = $scope.year+'-'+$scope.monthVal+'-'+$scope.dayVal

		$scope.listDates = datelibs.getListDates(date);
	};
	$scope.month_nav(1, month, year);

	$scope.day_nav = function(day)
	{	
		if(day == "add")
		{
			currentDate.add(1, 'day').toDate()
		}
		else
		{
			currentDate.subtract(1, 'day').toDate()
		}

		var preMonth = moment(currentDate, "DD/MM/YYYY");
		preMonth.subtract(1, 'months').toDate();
		
		var nextMonth = moment(currentDate, "DD/MM/YYYY");
		nextMonth.add(1, 'months').toDate()

		$scope.year = moment(currentDate).format("YYYY");
		$scope.month = moment(currentDate, "YYYY-MM-DD").format("MMMM");
		$scope.monthVal = moment(currentDate, "YYYY-MM-DD").format("MM");
		$scope.dayVal = moment(currentDate, "YYYY-MM-DD").format("DD");
		$scope.preMonthStr = moment(preMonth).format("MMMM");
		$scope.nextMonthStr = moment(nextMonth).format("MMMM");

		var date = $scope.year+'-'+$scope.monthVal+'-'+$scope.dayVal

		$scope.listDates = datelibs.getListDates(date);
	};

	$scope.today_nav = function()
	{
		var currentDate = year+'-'+month+'-1'
		$scope.year = moment(currentDate, 'YYYY-MM-DD').format("YYYY");
		$scope.month = moment(currentDate, "YYYY-MM-DD").format("MMMM");
		$scope.monthVal = moment(currentDate, "YYYY-MM-DD").format("MM");
		$scope.dayVal = moment(currentDate, "YYYY-MM-DD").format("DD");
		$scope.listDates = datelibs.getListDates(currentDate);
	};

	$scope.selectOption = function(status)
	{
		status = status.toLowerCase()

		if(status == "status")
		{
			$scope.status_class = {accept:"accept", 
						   		   pending:"pending", 
						   		   cancel:"cancel"}
		}
		else
		{
			$scope.status_class = {[status]:status}
		}
	};
	
	
	holiday.getHolidayDetailAuth(1).then(function(data)
	{
		$scope.team_option = {}

		for(holidayDetail in data)
		{
			$scope.team_option[data[holidayDetail].team] = data[holidayDetail].team;
		}

		$scope.holidayDetail = data

	})
	
	holiday.getHolidayListAuth(1, '4,1,2').then(function(data)
	{
		$scope.holidayBook = {}
		$scope.totalHolidayBook = {}

		var i = 0
        for(var holiday_book in data)
		{
			var user_id = data[holiday_book].user_id
			var status = data[holiday_book].status
			var start_date = data[holiday_book].start_date

			if ($scope.holidayBook[user_id])
			{
				$scope.holidayBook[user_id][i]= data[holiday_book]
			}
			else
			{
				$scope.holidayBook[user_id] = {0: data[holiday_book]}
			}
			
			if(status == 'accept' || status == 'pending')
			{
				if($scope.totalHolidayBook[user_id])
				{
					$scope.totalHolidayBook[user_id].totalTaken += data[holiday_book].taken
				}
				else
				{
					$scope.totalHolidayBook[user_id] = {'totalTaken':data[holiday_book].taken}
				}
			}
			i ++;
		}

		$scope.checkHolidayBook = function(user_id, date)
		{
			if($scope.holidayBook[user_id])
			{
				for(var holiday_book in $scope.holidayBook[user_id])
				{
					if($scope.holidayBook[user_id][holiday_book].start_date && $scope.holidayBook[user_id][holiday_book].end_date)
					{
						var check_date = parseDate(date)
						var star_date = parseDate($scope.holidayBook[user_id][holiday_book].start_date)
						var end_date = parseDate($scope.holidayBook[user_id][holiday_book].end_date)
						
						if(check_date >= star_date && check_date <= end_date)
						{
							return $scope.holidayBook[user_id][holiday_book]
						}
					}
				}
			}
		}

		$scope.checkHolidayList = function(user_id, start, end)
		{
			for(var listHoliday in $scope.holidayBook[user_id])
			{
				var checkStart  = $scope.holidayBook[user_id][listHoliday].start_date;
				var checkEnd  = $scope.holidayBook[user_id][listHoliday].end_date;
				var status = $scope.holidayBook[user_id][listHoliday].status;
				if(status != 'cancel')
				{
					if(checkDateInBetween(start, end, checkStart, checkEnd))
					{
						return $scope.holidayBook[user_id][listHoliday];
					}
				}
			}
		};

	});

	
	$scope.holidayBookInfo = function(data)
	{
		if(data)
		{
			if(data.status != 'cancel')
			{
				$rootScope.show_overlay = true
				$scope.holiday_list_info_ctrl = true
				$scope.holiday_info = data

				$rootScope.close = function()
				{
					$scope.holiday_list_info_ctrl = false
					$rootScope.show_overlay = false
				}
				
			}
		}
	}
	
	$scope.confirm_booking = function(status, list)
	{
		$scope.holiday_list_info_ctrl = false
		var statusMessage = ""
		if(status == 4)
		{
			statusMessage = "Approve";
		}
		else if(status == 2)
		{
			statusMessage = "Reject";
		}
		var user_id = list.user_id;
		var employee = list.employee;
		holiday_book_key = list.holiday_book_key;
		var start_date = list.start_date;
		start_date_format = parseDateFormat(start_date);
		var end_date = list.end_date;
		end_date_format = parseDateFormat(end_date);
		start_halfday = list.start_halfday;
		end_halfday = list.end_halfday;
		hashed = list.token;
		
		if(start_halfday != 'false')
		{
			start_halfday = " ("+start_halfday+") ";
		}
		else
		{
			start_halfday = "";
		}
		if(end_halfday != 'false')
		{
			end_halfday = " ("+end_halfday+") ";
		}
		else
		{
			end_halfday = "";
		}
		
		$rootScope.show_overlay = true;
		$rootScope.popup_confirm = true;
		$rootScope.confirmTitle = $sce.trustAsHtml("Confirm?");;
		$rootScope.confirmInfo = $sce.trustAsHtml("<p>Do you want to <b>"+statusMessage+"</b> for <b>"+user_id+" - "+capitalizeFirstLetter(employee.firstname)+" "+capitalizeFirstLetter(employee.lastname)+"</b> from <b>"+start_date_format+start_halfday+"</b> " +
																			 " - <b>"+end_date_format+end_halfday+"</b>?");
		$rootScope.confirm_show = true;
		$rootScope.confirm_value = "OK";
		$rootScope.cancel_show = true;
		$rootScope.cancel_value = "CANCEL";

		$rootScope.confirm = function()
		{
			$scope.holiday_list_info_ctrl = false
			holiday.holidayBookApproval(holiday_book_key, hashed, status).then(function(data)
			{
				if(data)
				{
					var statusMessage = ""
					if(status == 4)
					{
						statusMessage = "approved";
					}
					else if(status == 2)
					{
						statusMessage = "canceled";
					}
					$rootScope.confirmTitle = $sce.trustAsHtml("Successfully " + statusMessage);;
					$rootScope.confirmInfo = $sce.trustAsHtml("<p>You have successfully "+statusMessage+" from <b>"+start_date_format+start_halfday+"</b> " +
																				" - <b>"+end_date_format+end_halfday+"</b>.</p>");
					$rootScope.confirm_show = false;
					$rootScope.cancel_show = false;
					$rootScope.cancel_value = "CLOSE";

					holiday.getHolidayBookedList(4).then(function(data)
					{
						$scope.listHolidays = data
					})
				}
				else
				{
					$rootScope.confirmTitle = $sce.trustAsHtml(errorTitleMessage);;
					$rootScope.confirmInfo = $sce.trustAsHtml(errorMessage);
					$rootScope.confirm_show = false;
					$rootScope.cancel_show = true;
					$rootScope.cancel_value = "CLOSE";
				}
			});
		};

		$rootScope.cancel = function()
		{
			$scope.holiday_list_info_ctrl = true
			$rootScope.popup_confirm = false
		}

		$rootScope.close = function()
		{
			$rootScope.popup_confirm = false
			$rootScope.show_overlay = false
			$scope.holiday_list_info_ctrl = false
		}
		
	}

	var touched = false

	$scope.mouse_touched = function(touch)
	{
		touched = touch

		if(!touched)
		{
			if(!angular.equals($scope.selectedDate, {}))
			{
				$rootScope.show_overlay = true
				$rootScope.holiday_book_ctrl = true

				var selectedDateArr = []
				for(var selectedDate in $scope.selectedDate.selected_date)
				{
					selectedDateArr.push($scope.selectedDate.selected_date[selectedDate])
				}
				$scope.holiday_key = $scope.selectedDate.detail.holiday_key
				$scope.startDateModel = parseDateFormat(selectedDateArr[0])
				$scope.endDateModel = parseDateFormat(selectedDateArr[selectedDateArr.length - 1])
				$scope.user_id = $scope.selectedDate.detail.user_id
				$scope.employee = $scope.selectedDate.detail.employee
				$scope.allowance = $scope.selectedDate.detail.allowance
				$scope.allowance_type = $scope.selectedDate.detail.allowance_type
				$scope.daysOff = $scope.selectedDate.detail.days_off
				if($scope.totalHolidayBook[$scope.user_id])
				{
					$scope.totalDayTaken = $scope.totalHolidayBook[$scope.user_id].totalTaken
				}

				$scope.calculate();

				$rootScope.close = function()
				{
					$rootScope.show_overlay = false
					$rootScope.holiday_book_ctrl = false
				}

			}
			$scope.selectedDate = {}
			$scope.highlight = {}
		}
	}

	$scope.selectedDate = {}
	var indexed = 0
	var indexedOrg = 0
	var indexedBool = false
	var booked = false
	$scope.highlight = {}
	$scope.getSelectedListDate = function(index, holiday_detail, date, holidayBooked)
	{
		
		if(holidayBooked && holidayBooked.status != 'cancel' && holidayBooked != undefined)
		{
			booked = true
		}
		else
		{
			booked = false
		}
		if(touched && !booked)
		{
			if(!indexedBool)
			{
				indexedBool = true;
				indexedOrg = index
			}
			if(index >= indexed)
			{
				if($scope.selectedDate.selected_date)
				{
					$scope.selectedDate.selected_date[index] = date
				}
				else
				{
					$scope.selectedDate= {'detail':holiday_detail,
										  'selected_date':{[index]:date}}
				}
				
				if($scope.highlight[holiday_detail.user_id])
				{
					$scope.highlight[holiday_detail.user_id][index] = index
				}
				else
				{
					$scope.highlight = {[holiday_detail.user_id]:{[index]:index}}
				}
				
			}
			else if(index >= indexedOrg)
			{
				if($scope.selectedDate.selected_date)
				{
					delete $scope.selectedDate.selected_date[index + 1]
				}
				if($scope.highlight[holiday_detail.user_id])
				{
					delete $scope.highlight[holiday_detail.user_id][index + 1]
				}
			}

			indexed = index 
		}
		
	}

			
	/* --------------------------------------------------------- */

	var startHalfDay = 0;	
	var endHalfDay = 0;	
	var startNoon = 1;
	var endNoon = 1;

    $scope.noonOptions = [
        {value:1,name:'Full day'}, 
        {value:2,name:'Morning'}, 
        {value:3,name:'Afternoon'}
    ];
    
    $scope.startNoon = $scope.noonOptions[0].value;
    $scope.endNoon = $scope.noonOptions[0].value;
    
    $scope.year = parseInt(moment().format('YYYY'));

	$scope.onStartPikadaySelect = function onPikadaySelect(pikaday) 
	{
		var date = moment(pikaday._d).format("DD/MM/YYYY")
		$scope.startDateModel = parseDateFormat(date);
        $scope.pikerCheck()
    };

    $scope.onEndPikadaySelect = function onPikadaySelect(pikaday) 
	{
		var date = moment(pikaday._d).format("DD/MM/YYYY")
	  	$scope.endDateModel = parseDateFormat(date);
        $scope.pikerCheck()
    };

	$scope.pikerCheck = function()
	{
		var start = parseDate($scope.startDateModel);
		var end = parseDate($scope.endDateModel);

		if(start && end)
		{
			if(start > end)
			{	
				$scope.greaterDate = true
                $scope.holidayTaken = 0;
			}
			else
			{
                if(moment(start).format('DD/MM/YYYY') == moment(end).format('DD/MM/YYYY'))
                {
                    endHalfDay = 0;
                    endNoon = 1;
                }
				$scope.greaterDate = false
				$scope.calculate();
			}
		}
	};
    
	$scope.pikerCheck()
    
    $scope.HalfDayOption = function(option, noon)
    {
		if(option == "start")
		{
			if(noon == 1)
			{
				startHalfDay = 0;
				startNoon = noon
			}
			else
			{
				startHalfDay = 0.5;
				startNoon = noon
			}
		}
		else if(option == "end")
		{
			if(noon == 1)
			{
				endHalfDay = 0;
				endNoon = noon;
			}
			else
			{
				endHalfDay = 0.5;
				endNoon = noon
			}
		}

		$scope.calculate();
    };
    

    
    holiday.getPublicHolidays().then(function(response)
    {
        $scope.optionDisable = function(option, date)
        {
            var day = moment(parseDate(date)).format("dddd").toLowerCase()
            var publicHoliday = response[moment(parseDate(date)).format("YYYY-MM-DD")];
            if(day == "saturday" || day == "sunday" || publicHoliday || isInArray(day, $scope.daysOff))
            {
                if(option == "start")
                {
                    startHalfDay = 0;
                    startNoon = 1
                }
                else if(option == "end")
                {
                    endHalfDay = 0;
                    endNoon = 1;
                }
                return true;
            }
            else
            {
                return false;
            }
        };
    });
    
	
    $scope.calculate = function()
    {
		var start = parseDate($scope.startDateModel)
		var end = parseDate($scope.endDateModel)

        var countdays = datelibs.getBusinessWorkingDays(start, end);
		
		datelibs.getPublicAndDaysOff(start, end, $scope.daysOff).then(function(data)
		{
			var countpublicdays = data
		
			if(countdays >= 0)
			{
				$scope.holidayTaken = countdays - startHalfDay - endHalfDay  - countpublicdays;

				var total = 0;
				
				if($scope.allowance)
				{
					total += $scope.allowance;
				}
				if($scope.totalDayTaken)
				{
					total -= $scope.totalDayTaken;
				}
				if($scope.holidayTaken)
				{
					total -= $scope.holidayTaken;
				}

				$scope.remaining = total;
			}
		})
    };

    $scope.submit_request = function()
    {
		$rootScope.holiday_book_ctrl = false

		var start = $scope.startDateModel
		var end =  $scope.endDateModel

		var start_halfday = "";
    	var end_halfday = "";

		if($scope.checkHolidayList($scope.user_id, start, end))
		{
			var listHoliday = $scope.checkHolidayList($scope.user_id, start, end);
			var user_id = listHoliday.user_id;
			var employee = listHoliday.employee
			var start_date = parseDateFormat(listHoliday.start_date)
			var end_date = parseDateFormat(listHoliday.end_date)
			var start_halfday = listHoliday.start_halfday;
			var end_halfday = listHoliday.end_halfday;
			var status = listHoliday.status[0];

			var status_message = "";

			if(status == "pending")
			{
				status_message = "Status(Pending)";
			}
			else if(status == "accept")
			{
				status_message = "Status(Accepted)";
			}

			if(start_halfday != 'false')
			{
				start_halfday = "("+capitalizeFirstLetter(start_halfday)+")";
			}
			else
			{
				start_halfday = ""
			}
			
			if(end_halfday != 'false')
			{
				end_halfday = "("+capitalizeFirstLetter(end_halfday)+")";
			}
			else
			{
				end_halfday = ""
			}
			
			$rootScope.show_overlay = true;
			$rootScope.popup_confirm = true;
			$rootScope.confirmTitle = $sce.trustAsHtml("Date already booked...");;
			$rootScope.confirmInfo = $sce.trustAsHtml("<p>Date already exists for <b>"+user_id+" - "+capitalizeFirstLetter(employee.firstname)+" "+capitalizeFirstLetter(employee.lastname)+"</b> from <b>"+start_date+start_halfday+"</b> - " +
														"<b>"+end_date+end_halfday+" "+status_message+"</b>, please choose different date...");
			$rootScope.confirm_show = false;
			$rootScope.cancel_show = true;
			$rootScope.cancel_value = "Close";
		}
		else
		{
			var start_date = parseDateFormat(start)
			var end_date =  parseDateFormat(end)

			if(startNoon != 1)
			{
				if(startNoon == 2)
				{
					start_halfday = "(Morning)";
				}
				else
				{
					start_halfday = "(Afternoon)";
				}
			}
			
			if(endNoon != 1)
			{
				if(endNoon == 2)
				{
					end_halfday = "(Morning)";
				}
				else
				{
					end_halfday = "(Afternoon)";
				}
			}
			
    		$rootScope.show_overlay = true;
    		$rootScope.popup_confirm = true;
    		$rootScope.confirmTitle = $sce.trustAsHtml("Confirm?");;
    		$rootScope.confirmInfo = $sce.trustAsHtml("<p>You have booked from <b>"+start_date+start_halfday+"</b> " +
											 " - <b>"+end_date+end_halfday+"</b>?");
    		$rootScope.confirm_show = true;
    		$rootScope.cancel_show = true;
    		$rootScope.confirm_value = "OK";
    		$rootScope.cancel_value = "CANCEL";
    	}

    	$rootScope.confirm  = function()
    	{
            var start_date = parseDateFormatGAE(start);
            var end_date = parseDateFormatGAE(end);
			holiday.holidayBookAuth($scope.holiday_key, $scope.user_id, start_date, end_date, startNoon, endNoon, $scope.holidayTaken).then(function(data)
			{
				if(data)
				{
					var start_date = parseDateFormat(start)
					var end_date =  parseDateFormat(end)
					
					$rootScope.confirmTitle = $sce.trustAsHtml("Successfully Booked");;
					$rootScope.confirmInfo = $sce.trustAsHtml("<p>You have successfully booked from <b>"+start_date+start_halfday+"</b> " +
													" - <b>"+end_date+end_halfday+"</b></p>");
					$rootScope.confirm_show = false;
					$rootScope.cancel_show = true;
					$rootScope.cancel_value = "CLOSE";
                    $route.reload()

					$rootScope.cancel  = function()
					{
						$rootScope.holiday_book_ctrl = false;
						$rootScope.popup_confirm = false;
						$rootScope.show_overlay = false;
					};
				}
				else
				{
					$rootScope.confirmTitle = $sce.trustAsHtml(errorTitleMessage);;
					$rootScope.confirmInfo = $sce.trustAsHtml(errorMessage);
					$rootScope.confirm_show = false;
					$rootScope.cancel_show = true;
					$rootScope.cancel_value = "CLOSE";

				}

			})
    	};

    	$rootScope.cancel  = function()
    	{
			$rootScope.holiday_book_ctrl = true;
    		$rootScope.popup_confirm = false;
    	};

		$rootScope.close  = function()
		{
			$rootScope.show_overlay = false;
    		$rootScope.popup_confirm = false;
			$rootScope.holiday_book_ctrl = false;
		};	
	};
	
});

myApp.controller('payslipctrl', function($scope,$cookies,$location,$log,$http,$timeout,$rootScope,$sce,$window, $route, payslip)
{	
	payslip.getPayslipDates().then(function(data)
	{
		if(data.status == 200)
		{
			$scope.payslip_dates = data.data.date	

			$scope.payslip_option = $scope.payslip_dates[0]

			$scope.select_payslip($scope.payslip_dates[0])
		}
		
	})

	$scope.select_payslip = function(date)
	{
		payslip.getPayslip(date).then(function(data)
		{
			if(data.status == 200)
			{
				$scope.payslip = data.data.payslip_list[0]
			}
		})
	}

})

myApp.controller('pensionctrl', function($scope,$cookies,$location,$log,$http,$timeout,$rootScope,$sce,$window,$route,pension)
{
	pension.getPensionDetail().then(function(data)
	{
		$scope.pension_signup_info = data
	});
});

/*
myApp.controller('pensionsignupctrl', function($scope,$cookies,$location,$log,$http,$timeout,$rootScope,$sce,$window, $route, $filter, user, employee, pension, datelibs)
{
	$scope.date = datelibs.getCurrentDatetime();
    
	$scope.emailFormat = /^[a-z]+[a-z0-9._]+@[a-z]+\.[a-z.]{2,5}$/;
	
	var statePension = 
	{
		table1:
		{	
			start_date:'06-04-1950', 
			end_date:'05-04-1953', 
			reached_start:'06-05-2010', 
			reached_end:'06-03-2016', 
			month_add:2, 
			totalrow:36,
			pension_gender:
			{
				female:'female'
			}
		},
		table2:
		{
			start_date:'06-04-1953', 
			end_date:'05-12-1953', 
			reached_start:'06-07-2016', 
			reached_end:'06-11-2018', 
			month_add:4, 
			totalrow:8,
			pension_gender:
			{
				female:'female'
			}
		},
		table3:
		{
			start_date:'06-12-1953', 
			end_date:'05-04-1960', 
			reached_start:'06-03-2019', 
			reached_end:'66 years', 
			month_add:2, 
			totalrow:11,
			pension_gender:
			{
				male:'male', 
				female:'female'
			}
		},
		table4:
		{
			start_date:'06-04-1960', 
			end_date:'05-04-1977', 
			reached_start:'01-05-2026', 
			reached_end:'67 years', 
			month_add:2, 
			totalrow:12,
			pension_gender:
			{
				male:'male', 
				female:'female'
			}
		},		
		table5:
		{
			start_date:'06-04-1977', 
			end_date:'01-12-9999', 
			reached_start:'06-05-2044', 
			reached_end:'68 years', 
			month_add:2, 
			totalrow:13,
			pension_gender:
			{
				male:'male', 
				female:'female'
			}
		}
	}
	
	var level_option = [{level:'Defensive', level_rate:0.5},
						{level:'Cautious', level_rate:1.5},
						{level:'Balanced', level_rate:2.5},
						{level:'Moderately Adventurous', level_rate:3.75},
						{level:'Adventurous', level_rate:5}]

	
	user.getUserDetail().then(function(data)
	{

		$scope.dob = data.dob
		$scope.age = datelibs.getAge(data.dob)

		employee.getEmployeeDetail().then(function(data)
		{
			$scope.gender = data.gender
			$scope.salary = data.annual_salary
			
			pension.getPensionDetail().then(function(data)
			{
				var data = data.data.pension_list[0]

				var tax_saving = data.tax_saving;

				var saving_value = 0;
				
				if(tax_saving == 'SALARY_SACRIFICE')
				{
					saving_value = data.employee_contribution * 0.138
				}
				else
				{
					saving_value = data.employee_contribution * 0.20
				}

				$scope.expectedContribution = data.employee_contribution

				$scope.pension_detail = 
				{	
					age:datelibs.getAge($scope.dob),
					salary:$scope.salary,
					employee_contribution:
					{
						min_percent:data.min_employee_contribution_percent,
						min_amount:$scope.salary * (data.min_employee_contribution_percent/100) / 12,
						max_percent:data.max_employee_contribution_percent,
						max_amount:$scope.salary * (data.max_employee_contribution_percent/100) / 12,
						percent:data.employee_contribution_percent,
						amount:data.employee_contribution
					},
					employer_contribution:
					{
						min_percent:data.min_employer_contribution_percent,
						min_amount:$scope.salary * (data.min_employer_contribution_percent/100) / 12,
						max_percent:data.max_employer_contribution_percent,
						max_amount:$scope.salary * (data.max_employer_contribution_percent/100) / 12,
						percent:data.employer_contribution_percent,
						amount:data.employer_contribution
					},
					contribution:
                    {
						saving_type: data.tax_saving,
						saving_value: saving_value
                    },
					fund:
					{
						list_fund:data.list_fund,
						fund_value:data.fund_value
					},
					fund_selection:
					{
						list_fund_selection:data.fund_selection
					},
					retirement_age:65,
                    risk_profiling_level:{level:'balanced', rate:2.5}
				};

				if($scope.age <= 55)
				{
					$scope.pension_detail.retirement_age = 60;
					$scope.retirement_age = 
					{
						value:60,
						options: 
						{
							floor: 55,
							ceil: 75,
							onChange: function() 
							{
								$scope.pension_detail.retirement_age = $scope.retirement_age.value;
							}
						},
					};
				}
				else if($scope.age>= 55)
				{
					$scope.pension_detail.retirement_age = $scope.age;
					$scope.retirement_age = 
					{
						value:$scope.age,
						options: 
						{
							floor: $scope.age,
							ceil: $scope.age + 20,
							onChange: function() 
							{
								$scope.pension_detail.retirement_age = $scope.retirement_age.value;
							}
						},
					};
				}
				
				if(!data.list_fund)
				{
					$scope.pension_detail.fund.list_fund = [{name:'Name...', value:0}]
					$scope.add_funds_pot()
				}
				else
				{
					$scope.add_funds_pot()
				}

				if(data.fund_selection)
				{
					$scope.fund_selection = data.fund_selection
				}
				else
				{
					$scope.fund_selection = {'name':'Core Lifestyle Portofolio', 'percent':100}
				}

				$scope.expected_contribution_slider()

				calculateStatePension()
				
			})
		})
	})
	
	$scope.form_nav_i = 1;

	$scope.form_nav_list = [{short:"Personal Details",
							 long:"Your Personal Details"}, 
							{short:"Pension Info",
							 long:"Pension Info"}, 
							{short:"Current Funds",
						     long:"Current Funds"},
							{short:"Profiling Level Rate",
							 long:"Profiling Level Rate"},
							{short:"Summary",
							 long:"Summary"},  
							{short:"Terms & Conditions",
							 long:"Terms & Conditions"},
                            {short:"Authorisation form",
							 long:"Authorisation form"},
                            {short:"Terms & Conditions",
							 long:"Terms & Conditions"},
                            {short:"Assumptions",
							 long:"Assumptions"},
							{short:"Complete",
							 long:"Complete"}];
    
	$scope.form_nav_btn = function(value)
	{
		$scope.form_nav_i += value;
	};
    
    $scope.expected_contribution_amount = function(value)
    {   
		if(value > 0)
		{
			value = value
		}
		else
		{
			value = 0
		}

		var percent = ((parseFloat(value) * 12) / $scope.pension_detail.salary) * 100 ;

		if(percent >= $scope.pension_detail.employee_contribution.min_percent && percent <= $scope.pension_detail.employee_contribution.max_percent)
		{
			$scope.pension_detail.employee_contribution.percent = percent
			$scope.pension_detail.employee_contribution.amount = value
			$scope.expected_employee_contribution.value = percent
		}

		if(percent >= $scope.pension_detail.employer_contribution.min_percent && percent <= $scope.pension_detail.employer_contribution.max_percent)
		{
			$scope.pension_detail.employer_contribution.percent = percent
			$scope.pension_detail.employer_contribution.amount = value
			$scope.expected_employee_contribution.value = percent
		}

		if(percent > $scope.pension_detail.employee_contribution.max_percent)
		{
			$scope.pension_detail.employee_contribution.percent = $scope.pension_detail.employee_contribution.max_percent
			$scope.pension_detail.employee_contribution.amount = $scope.pension_detail.employee_contribution.max_amount
			$scope.expected_employee_contribution.value = $scope.pension_detail.employee_contribution.max_percent
		}
		else if(percent < $scope.pension_detail.employee_contribution.min_percent)
		{
			$scope.pension_detail.employee_contribution.percent = $scope.pension_detail.employee_contribution.min_percent
			$scope.pension_detail.employee_contribution.amount = $scope.pension_detail.employee_contribution.min_amount
			$scope.expected_employee_contribution.value = $scope.pension_detail.employee_contribution.min_percent
		}

		if(percent > $scope.pension_detail.employer_contribution.max_percent)
		{
			$scope.pension_detail.employer_contribution.percent = $scope.pension_detail.employer_contribution.max_percent
			$scope.pension_detail.employer_contribution.amount = $scope.pension_detail.employer_contribution.max_amount
		}
		else if(percent < $scope.pension_detail.employer_contribution.min_percent)
		{
			$scope.pension_detail.employer_contribution.percent = $scope.pension_detail.employer_contribution.min_percent
			$scope.pension_detail.employer_contribution.amount = $scope.pension_detail.employer_contribution.min_amount
		}

		$scope.calculate_saving()


    };

	$scope.expected_contribution_slider = function()
	{   
		$scope.expected_employee_contribution = 
		{
			value: $scope.pension_detail.employee_contribution.percent,
			options: 
			{
			    floor: $scope.pension_detail.employee_contribution.min_percent,
			    ceil: $scope.pension_detail.employee_contribution.max_percent,
			    onChange: function() 
			    {
					$scope.pension_detail.employee_contribution.percent = $scope.expected_employee_contribution.value
					$scope.pension_detail.employee_contribution.amount = ($scope.expected_employee_contribution.value / 100) * $scope.pension_detail.salary / 12
					$scope.expectedContribution = ($scope.expected_employee_contribution.value / 100) * $scope.pension_detail.salary / 12

					if($scope.expected_employee_contribution.value >= $scope.pension_detail.employer_contribution.min_percent && $scope.expected_employee_contribution.value <= $scope.pension_detail.employer_contribution.max_percent)
					{
						$scope.pension_detail.employer_contribution.percent = $scope.expected_employee_contribution.value
						$scope.pension_detail.employer_contribution.amount = ($scope.expected_employee_contribution.value / 100) * $scope.pension_detail.salary / 12
					}

					$scope.calculate_saving()
		        }
			},
		};

		$scope.calculate_saving()
	}

    $scope.calculate_saving = function()
    {
		var saving_value = 0

		if($scope.pension_detail.contribution.saving_type == 'NET_SAVING')
		{
			$scope.pension_detail.contribution.saving_value = $scope.pension_detail.employee_contribution.amount * 0.2
			saving_value = 0
		}
		else if($scope.pension_detail.contribution.saving_type == 'SALARY_SACRIFICE')
		{
			$scope.pension_detail.contribution.saving_value = $scope.pension_detail.employee_contribution.amount * 0.138
			saving_value = $scope.pension_detail.employee_contribution.amount * 0.138
		}

		$scope.pension_detail.contribution.total = parseFloat($scope.pension_detail.employee_contribution.amount) + 
												   parseFloat($scope.pension_detail.employer_contribution.amount) + 
												   parseFloat(saving_value)
    };
    
    $scope.checkinbetween = function(value)
    {
		$log.info()
        var ee_min_amount = $scope.pension_detail.employee_contribution.min_amount;
        var ee_max_amount = $scope.pension_detail.employee_contribution.max_amount;
        if(value < ee_min_amount || value > ee_max_amount)
        {
            return true;
        }
		else
		{
			return false;
		}
    };

	$scope.add_funds = function()
	{
		var keys = Object.keys($scope.pension_detail.fund.list_fund);
		$scope.pension_detail.fund.list_fund[keys.length] = {name:'', value:0}
	};

	$scope.add_empty_list_fund = function()
	{
		$log.info("yes")
		if(!$scope.pension_detail.fund.list_fund)
		{
			$scope.pension_detail.fund.list_fund = [{name:'Name...', value:0}]
		}
	}

	$scope.remove_empty_list_fund = function()
	{
		var value = 0
		for(fund in $scope.pension_detail.fund.list_fund)
		{
			value += $scope.pension_detail.fund.list_fund[fund].value
		}
		if(value == 0)
		{
			delete $scope.pension_detail.fund.list_fund;
		}
	}

	$scope.remove_listfund = function(index)
	{
		delete $scope.pension_detail.fund.list_fund.splice(index, 1); 
		$scope.add_funds_pot()
	};
	
	$scope.add_funds_pot = function()
	{
		var total_fund_pot = 0;
		for(list in $scope.pension_detail.fund.list_fund)
		{
			if($scope.pension_detail.fund.list_fund[list].value > 0)
			{
				total_fund_pot += parseFloat($scope.pension_detail.fund.list_fund[list].value);
			}
		}
		$scope.pension_detail.fund.fund_pot = total_fund_pot;
	};


	$scope.add_funds_selection = function()
	{
		var keys = Object.keys($scope.fund_selection);
		var length = keys.length
		var total_fund_selection = 100 - $scope.total_fund_selection()
		
		$scope.fund_selection[length] = {name:'', percent:total_fund_selection}
	};
	
	$scope.total_fund_selection = function()
	{
		var total_fund_selection = 0;
		for(list in $scope.fund_selection)
		{
			if($scope.fund_selection[list].percent > 0)
			{
				total_fund_selection += parseFloat($scope.fund_selection[list].percent);
			}
		}
        if(total_fund_selection >= 0 && total_fund_selection <= 100)
        {
            $scope.pension_detail.fund_selection.total_fund_selection = total_fund_selection;
        }
        return total_fund_selection;
	};
    

	$scope.remove_fundselection = function(index)
	{
		delete $scope.fund_selection.splice(index, 1); 
		$scope.total_fund_selection()
	};


	$scope.scores = {}
	$scope.questioner = function(question, value)
	{
		$scope.scores[question] = value;
		var score = 0;
		var count = 0;
		for(value in $scope.scores)
		{
			count += 1;
			score += parseInt($scope.scores[value])
		}
		if(count == 5)
		{
			riskQuestioner(parseInt(score));
		}
	};
	
	function riskQuestioner(score)
	{
		if(score >= 7 && score <=14)
		{
			level_value = level_option[0]
		}
		else if(score >= 15 && score <=21)
		{
			level_value = level_option[1]
		}
		else if(score >= 22 && score <=28)
		{
			level_value = level_option[2]
		}
		else if(score >= 29 && score <=34)
		{
			level_value = level_option[3]
		}
		else if(score >= 35 && score <=40)
		{
			level_value = level_option[4]
		}

		$scope.riskquestionermessage = $sce.trustAsHtml("That means your are " + level_value.level);
		$scope.pension_detail['risk_profiling_level'] = {level:level_value.level, rate:level_value.level_rate};
	}	
    
	
	$scope.invested = function(pension_details)
	{
		var total_contribution = pension_details.contribution.total * 12;
	    var fund_amount = pension_details.fund.total_fund_amount;
	    var risk_profiling_rate = pension_details.risk_profiling_level.rate;
	    var age_retirement = pension_details.retirement_age;

		var invested = 0
		var cumulative_payments = 0
		var interest = 0
		var cumulative_interest = 0
		var balance = 0
		for (i = 0; i <= age_retirement; i++)
		{
			if(i == 0)
			{
				invested = parseFloat(fund_amount);
				cumulative_payments += invested
				interest = 0
				balance = fund_amount;
			}
			else
			{
				invested = total_contribution
				cumulative_payments += invested
				interest = balance * (risk_profiling_rate/100)
				cumulative_interest += interest;
				balance = (balance + interest + invested)
			}
		}
		var invested  = {cumulative_payments:cumulative_payments, cumulative_interest:cumulative_interest, balance:balance}
		$scope.pension_detail.invested = invested;
		return invested;
	};

        
    $scope.annuityRates = function(retirement_age)
    {
        var annuityRates = [{start_age:55, end_age: 59, rate:4.3},
                            {start_age:60, end_age: 64, rate:4.7},
                            {start_age:65, end_age: 69, rate:5.3},
                            {start_age:70, end_age: 74, rate:6.1},
                            {start_age:75, end_age: 150, rate:7.3}]
        
        var retirement_age = parseInt(retirement_age)
        
        for(i=0; i < annuityRates.length; i++)
        {
            if(retirement_age >= annuityRates[i].start_age && retirement_age <= annuityRates[i].end_age)
            {
                return annuityRates[i].rate
                break;
            }
        }
    };
	
	
	function tableStatePension(StatePensionDetails, tables)
	{
		var start_date = StatePensionDetails.start_date;
		var end_date = StatePensionDetails.end_date;
		var reached_start = StatePensionDetails.reached_start
		var reached_end = StatePensionDetails.reached_end
		var month_add = StatePensionDetails.month_add
		var date_count = StatePensionDetails.totalrow
		var pension_gender = StatePensionDetails.pension_gender
		var statePensiondates = []

		if(pension_gender.female == $scope.gender || pension_gender.male == $scope.gender)
		{
			start_date = moment(start_date).format("DD-MM-YYYY");
			
			pension_age_reached_start = moment(reached_start).format("DD-MM-YYYY");
			
			pension_age_reached_end = moment(reached_end).format("DD-MM-YYYY");
			

			for(i=0; i < date_count; i++)
			{
				if(i == 0)
				{
					start_date = moment(start_date);
					
					end_date_increament = moment(start_date);
					end_date_increament = end_date_increament.add(1, 'month');
					end_date_increament = end_date_increament.add(-1, 'day')
					if(tables == "table4")
					{
						pension_age_reached_start = moment(pension_age_reached_start);
						pension_age_reached_start = moment(pension_age_reached_start).endOf('month');
						pension_age_reached_start = moment(pension_age_reached_start).toDate()
					}
					else
					{
						pension_age_reached_start = moment(pension_age_reached_start);
						pension_age_reached_start = moment(pension_age_reached_start).toDate()
					}
				}
				else if(i < (date_count - 1))
				{
					start_date = moment(start_date);
					start_date = start_date.add(1, 'month')
					
					end_date_increament = moment(start_date);
					end_date_increament = end_date_increament.add(1, 'month');
					end_date_increament = end_date_increament.add(-1, 'day');
					if(tables == "table4")
					{
						pension_age_reached_start = moment(pension_age_reached_start);
						pension_age_reached_start = moment(pension_age_reached_start).add(month_add, 'month')
						pension_age_reached_start = moment(pension_age_reached_start).toDate()
					}
					else
					{
						pension_age_reached_start = moment(pension_age_reached_start).add(month_add, 'month')
						pension_age_reached_start = moment(pension_age_reached_start).toDate()
					}
				}
				else if(i <= date_count)
				{
					start_date = moment(start_date);
					start_date = start_date.add(1, 'month')
	
					end_date_increament = moment(end_date, 'DD-MM-YYYY')
				
					pension_age_reached_start = moment(pension_age_reached_end, 'DD-MM-YYYY')
					
					if(reached_end != 'Invalid Date')
					{
						pension_age_reached_start = reached_end;
					}
					else
					{
						if(tables == "table4")
						{
							pension_age_reached_start = moment(pension_age_reached_start);
							pension_age_reached_start = moment(pension_age_reached_start).add(month_add, 'month')
							pension_age_reached_start = moment(pension_age_reached_start).toDate()
						}
						else
						{
							pension_age_reached_start = moment(pension_age_reached_end).add(month_add, 'month')
							pension_age_reached_start = moment(pension_age_reached_start).toDate()
						}
					}
					
					
				}
				
				statePensiondates.push({start_date:start_date.toDate(), 
										end_date:end_date_increament.toDate(),
										reached:pension_age_reached_start})
			}
			
		}
		return statePensiondates;
	}
	
	function calculateStatePension()
	{
		dob = moment($scope.dob, "YYYY-MM-DD").toDate()

		for(tables in statePension)
		{
			var start_date = moment(statePension[tables].start_date, 'DD-MM-YYYY').toDate()
			var end_date = moment(statePension[tables].end_date, 'DD-MM-YYYY').toDate()
			
			var age;
			
			if(datelibs.checkDateInBetween(dob,start_date,end_date))
			{
				var reached_list = tableStatePension(statePension[tables], tables);
				var reached_value = getReachedAgePension(dob, reached_list)
				if(reached_value)
				{
					reached_date = moment(reached_value.reached).toDate();
					if(reached_date.getYear())
					{
						age = getAge(dob, reached_date) 
					}
					else
					{
						age = reached_value.reached
					}
					break;
				}
			}
			else
			{
				if($scope.gender == "male")
				{
					age = "65 years"
				}
				else
				{
					age = "60 years"
				}
			}
		}
		$scope.pension_detail.state_pension = age;
	}
	
	function getReachedAgePension(dob, reached_list)
	{
		var check = dob
		for(list in reached_list)
		{
			var start_date = reached_list[list].start_date
			var end_date = reached_list[list].end_date
		    if((check >= start_date && check <= end_date)) 
		    {
		    	if(reached_list[list].reached)
		    	{
		    		
		    		if(reached_list[list].reached instanceof Date) 
		    		{
		    			reachedpension = moment(reached_list[list].reached).toDate()
		    		}
		    		else
		    		{
		    			reachedpension = reached_list[list].reached
		    		}
		    	}

		    	
		    	var reachedpension = {reached:reachedpension, found:true}
		    	
		        return reachedpension;
		    }
		}
	}
	
	function getAge(now, dateString) 
	{
		var yearNow = dateString.getYear();
		var monthNow = dateString.getMonth();
		var dateNow = dateString.getDate();

		  var yearDob = now.getYear();
		  var monthDob = now.getMonth();
		  var dateDob = now.getDate();
		  var age = {};
		  var ageString = "";
		  var yearString = "";
		  var monthString = "";
		  var dayString = "";

		  yearAge = yearNow - yearDob;

		  if (monthNow >= monthDob)
		    var monthAge = monthNow - monthDob;
		  else {
		    yearAge--;
		    var monthAge = 12 + monthNow -monthDob;
		  }

		  if (dateNow >= dateDob)
		    var dateAge = dateNow - dateDob;
		  else {
		    monthAge--;
		    var dateAge = 31 + dateNow - dateDob;

		    if (monthAge < 0) {
		      monthAge = 11;
		      yearAge--;
		    }
		  }

		  age = {
		      years: yearAge,
		      months: monthAge,
		      days: dateAge
		      };

		  if ( age.years > 1 ) yearString = " years";
		  else yearString = " year";
		  if ( age.months> 1 ) monthString = " months";
		  else monthString = " month";
		  if ( age.days > 1 ) dayString = " days";
		  else dayString = " day";


		  if ( (age.years > 0) && (age.months > 0) && (age.days > 0) )
		    ageString = age.years + yearString + ", " + age.months + monthString + ", and " + age.days + dayString;
		  else if ( (age.years == 0) && (age.months == 0) && (age.days > 0) )
		    ageString = "Only " + age.days + dayString
		  else if ( (age.years > 0) && (age.months == 0) && (age.days == 0) )
		    ageString = age.years + yearString
		  else if ( (age.years > 0) && (age.months > 0) && (age.days == 0) )
		    ageString = age.years + yearString + " and " + age.months + monthString
		  else if ( (age.years == 0) && (age.months > 0) && (age.days > 0) )
		    ageString = age.months + monthString + " and " + age.days + dayString
		  else if ( (age.years > 0) && (age.months == 0) && (age.days > 0) )
		    ageString = age.years + yearString + " and " + age.days + dayString
		  else if ( (age.years == 0) && (age.months > 0) && (age.days == 0) )
		    ageString = age.months + monthString + " old.";
		  else ageString = "Oops! Could not calculate age!";

		  return ageString;
		}
    
        $scope.income_life = function(retirement_age, state_pension)
        {
            var statepensionarr = state_pension.split(' ');
            var state_pension = parseInt(statepensionarr[0])
            var retirement_age = parseInt(retirement_age);
            
            if(retirement_age >= state_pension)
            {
                return true
            }
            else if(retirement_age < state_pension)
            {
                return false
            }
        };
    
	
		$scope.submit_pension = function(details)
		{ 
			var employee_contribution_amount = $scope.pension_detail.employee_contribution.amount
			var employee_contribution_percent = $scope.pension_detail.employee_contribution.percent
			var employer_contribution_amount = $scope.pension_detail.employee_contribution.amount
			var employer_contribution_percent = $scope.pension_detail.employee_contribution.percent
			var saving_type = $scope.pension_detail.contribution.saving_type
			var retirement_age = $scope.pension_detail.retirement_age
			var list_fund =  $scope.pension_detail.fund.list_fund
			var fund_selection = $scope.pension_detail.fund_selection.list_fund_selection

			var list_fundArr = []
			if(list_fund)
			{
				for(fund in list_fund)
				{
					list_fundArr.push(list_fund[fund].name+"|"+list_fund[fund].value)
				}
			}

			var fund_selectionArr = []
			if(fund_selection)
			{
				for(selection in fund_selection)
				{
					fund_selectionArr.push(fund_selection[selection].name+"|"+fund_selection[selection].percent)
				}
			}

			pension.pensionSignup(employee_contribution_amount, employee_contribution_percent, employer_contribution_amount, employer_contribution_percent, saving_type, retirement_age, list_fundArr.join(), fund_selectionArr.join()).then(function(data)
			{
				$rootScope.show_overlay = true;
				$rootScope.popup_confirm = true;
				$rootScope.confirm_show = false;
				$rootScope.cancel_show = true;
				$rootScope.cancel_value = "CLOSE";
				if(data.status == 200)
				{
					$rootScope.confirmTitle = $sce.trustAsHtml("Successfully Signedup");;
					$rootScope.confirmInfo = $sce.trustAsHtml("<p>You have successfully signed up your contribution</p>");
					$scope.form_nav_i = 9;
				}
				else if(data.status == 400)
				{
					$rootScope.confirmTitle = $sce.trustAsHtml("Pension signup currently pending...");;
					$rootScope.confirmInfo = $sce.trustAsHtml("You have already signed up and it's currently pending.");

				}
				else
				{
					$rootScope.confirmTitle = $sce.trustAsHtml(errorTitleMessage);;
					$rootScope.confirmInfo = $sce.trustAsHtml(errorMessage);
				}
			})

		};

		$rootScope.cancel  = function()
    	{
			$rootScope.show_overlay = false;
    		$rootScope.popup_confirm = false;
    	};

		$rootScope.close  = function()
		{
			$rootScope.show_overlay = false;
    		$rootScope.popup_confirm = false;
		};	

});
*/
myApp.controller('pensionsignupctrl', function($scope,$cookies,$location,$log,$http,$timeout,$rootScope,$sce,$window, $route, $filter, user, employee, pension, datelibs)
{
	$scope.date = datelibs.getCurrentDatetime();
    
	$scope.emailFormat = /^[a-z]+[a-z0-9._]+@[a-z]+\.[a-z.]{2,5}$/;
	
	var level_option = [{level:'Defensive', level_rate:0.5},
						{level:'Cautious', level_rate:1.5},
						{level:'Balanced', level_rate:2.5},
						{level:'Moderately Adventurous', level_rate:3.75},
						{level:'Adventurous', level_rate:5}]

	
	user.getUserDetail().then(function(data)
	{

		$scope.dob = data.dob
		$scope.age = datelibs.getAge(data.dob)

		employee.getEmployeeDetail().then(function(data)
		{
			$scope.gender = data.gender
			$scope.salary = data.annual_salary
			
			pension.getPensionDetail().then(function(data)
			{
				var data = data.data.pension_list[0]

				var tax_saving = data.tax_saving;

				var saving_value = 0;
				
				if(tax_saving == 'SALARY_SACRIFICE')
				{
					saving_value = data.employee_contribution * 0.138
				}
				else
				{
					saving_value = data.employee_contribution * 0.20
				}

				$scope.expectedContribution = data.employee_contribution

				$scope.pension_detail = 
				{	
					age:datelibs.getAge($scope.dob),
					salary:$scope.salary,
					employee_contribution:
					{
						min_percent:data.min_employee_contribution_percent,
						min_amount:$scope.salary * (data.min_employee_contribution_percent/100) / 12,
						max_percent:data.max_employee_contribution_percent,
						max_amount:$scope.salary * (data.max_employee_contribution_percent/100) / 12,
						percent:data.employee_contribution_percent,
						amount:data.employee_contribution
					},
					employer_contribution:
					{
						min_percent:data.min_employer_contribution_percent,
						min_amount:$scope.salary * (data.min_employer_contribution_percent/100) / 12,
						max_percent:data.max_employer_contribution_percent,
						max_amount:$scope.salary * (data.max_employer_contribution_percent/100) / 12,
						percent:data.employer_contribution_percent,
						amount:data.employer_contribution
					},
					contribution:
                    {
						saving_type: data.tax_saving,
						saving_value: saving_value
                    },
					fund:
					{
						list_fund:data.list_fund,
						fund_value:data.fund_value
					},
					fund_selection:
					{
						list_fund_selection:data.fund_selection
					},
					retirement_age:65,
                    risk_profiling_level:{level:'balanced', rate:2.5}
				};

				if($scope.age <= 55)
				{
					$scope.pension_detail.retirement_age = 60;
					$scope.retirement_age = 
					{
						value:60,
						options: 
						{
							floor: 55,
							ceil: 75,
							onChange: function() 
							{
								$scope.pension_detail.retirement_age = $scope.retirement_age.value;
							}
						},
					};
				}
				else if($scope.age>= 55)
				{
					$scope.pension_detail.retirement_age = $scope.age;
					$scope.retirement_age = 
					{
						value:$scope.age,
						options: 
						{
							floor: $scope.age,
							ceil: $scope.age + 20,
							onChange: function() 
							{
								$scope.pension_detail.retirement_age = $scope.retirement_age.value;
							}
						},
					};
				}

				pension.calculateStatePension($scope.dob, $scope.gender).then(function(data)
				{
					$log.info(data)
					$scope.pension_detail.state_pension = data
				})
				
				if(!data.list_fund)
				{
					$scope.pension_detail.fund.list_fund = [{name:'Name...', value:0}]
					$scope.add_funds_pot()
				}
				else
				{
					$scope.add_funds_pot()
				}

				if(data.fund_selection)
				{
					$scope.fund_selection = data.fund_selection
				}
				else
				{
					$scope.fund_selection = {'name':'Core Lifestyle Portofolio', 'percent':100}
				}

				$scope.expected_contribution_slider()

				//calculateStatePension()
				
			})
		})
	})
	
	$scope.form_nav_i = 1;

	$scope.form_nav_list = [{short:"Personal Details",
							 long:"Your Personal Details"}, 
							{short:"Pension Info",
							 long:"Pension Info"}, 
							{short:"Current Funds",
						     long:"Current Funds"},
							{short:"Profiling Level Rate",
							 long:"Profiling Level Rate"},
							{short:"Summary",
							 long:"Summary"},  
							{short:"Terms & Conditions",
							 long:"Terms & Conditions"},
                            {short:"Authorisation form",
							 long:"Authorisation form"},
                            {short:"Terms & Conditions",
							 long:"Terms & Conditions"},
                            {short:"Assumptions",
							 long:"Assumptions"},
							{short:"Complete",
							 long:"Complete"}];
    
	$scope.form_nav_btn = function(value)
	{
		$scope.form_nav_i += value;
	};
    
    $scope.expected_contribution_amount = function(value)
    {   
		if(value > 0)
		{
			value = value
		}
		else
		{
			value = 0
		}

		var percent = ((parseFloat(value) * 12) / $scope.pension_detail.salary) * 100 ;

		if(percent >= $scope.pension_detail.employee_contribution.min_percent && percent <= $scope.pension_detail.employee_contribution.max_percent)
		{
			$scope.pension_detail.employee_contribution.percent = percent
			$scope.pension_detail.employee_contribution.amount = value
			$scope.expected_employee_contribution.value = percent
		}

		if(percent >= $scope.pension_detail.employer_contribution.min_percent && percent <= $scope.pension_detail.employer_contribution.max_percent)
		{
			$scope.pension_detail.employer_contribution.percent = percent
			$scope.pension_detail.employer_contribution.amount = value
			$scope.expected_employee_contribution.value = percent
		}

		if(percent > $scope.pension_detail.employee_contribution.max_percent)
		{
			$scope.pension_detail.employee_contribution.percent = $scope.pension_detail.employee_contribution.max_percent
			$scope.pension_detail.employee_contribution.amount = $scope.pension_detail.employee_contribution.max_amount
			$scope.expected_employee_contribution.value = $scope.pension_detail.employee_contribution.max_percent
		}
		else if(percent < $scope.pension_detail.employee_contribution.min_percent)
		{
			$scope.pension_detail.employee_contribution.percent = $scope.pension_detail.employee_contribution.min_percent
			$scope.pension_detail.employee_contribution.amount = $scope.pension_detail.employee_contribution.min_amount
			$scope.expected_employee_contribution.value = $scope.pension_detail.employee_contribution.min_percent
		}

		if(percent > $scope.pension_detail.employer_contribution.max_percent)
		{
			$scope.pension_detail.employer_contribution.percent = $scope.pension_detail.employer_contribution.max_percent
			$scope.pension_detail.employer_contribution.amount = $scope.pension_detail.employer_contribution.max_amount
		}
		else if(percent < $scope.pension_detail.employer_contribution.min_percent)
		{
			$scope.pension_detail.employer_contribution.percent = $scope.pension_detail.employer_contribution.min_percent
			$scope.pension_detail.employer_contribution.amount = $scope.pension_detail.employer_contribution.min_amount
		}

		$scope.calculate_saving()


    };

	$scope.expected_contribution_slider = function()
	{   
		$scope.expected_employee_contribution = 
		{
			value: $scope.pension_detail.employee_contribution.percent,
			options: 
			{
			    floor: $scope.pension_detail.employee_contribution.min_percent,
			    ceil: $scope.pension_detail.employee_contribution.max_percent,
			    onChange: function() 
			    {
					$scope.pension_detail.employee_contribution.percent = $scope.expected_employee_contribution.value
					$scope.pension_detail.employee_contribution.amount = ($scope.expected_employee_contribution.value / 100) * $scope.pension_detail.salary / 12
					$scope.expectedContribution = ($scope.expected_employee_contribution.value / 100) * $scope.pension_detail.salary / 12

					if($scope.expected_employee_contribution.value >= $scope.pension_detail.employer_contribution.min_percent && $scope.expected_employee_contribution.value <= $scope.pension_detail.employer_contribution.max_percent)
					{
						$scope.pension_detail.employer_contribution.percent = $scope.expected_employee_contribution.value
						$scope.pension_detail.employer_contribution.amount = ($scope.expected_employee_contribution.value / 100) * $scope.pension_detail.salary / 12
					}

					$scope.calculate_saving()
		        }
			},
		};

		$scope.calculate_saving()
	}

    $scope.calculate_saving = function()
    {
		var saving_value = 0

		if($scope.pension_detail.contribution.saving_type == 'NET_SAVING')
		{
			$scope.pension_detail.contribution.saving_value = $scope.pension_detail.employee_contribution.amount * 0.2
			saving_value = 0
		}
		else if($scope.pension_detail.contribution.saving_type == 'SALARY_SACRIFICE')
		{
			$scope.pension_detail.contribution.saving_value = $scope.pension_detail.employee_contribution.amount * 0.138
			saving_value = $scope.pension_detail.employee_contribution.amount * 0.138
		}

		$scope.pension_detail.contribution.total = parseFloat($scope.pension_detail.employee_contribution.amount) + 
												   parseFloat($scope.pension_detail.employer_contribution.amount) + 
												   parseFloat(saving_value)
    };
    
    $scope.checkinbetween = function(value)
    {
		$log.info()
        var ee_min_amount = $scope.pension_detail.employee_contribution.min_amount;
        var ee_max_amount = $scope.pension_detail.employee_contribution.max_amount;
        if(value < ee_min_amount || value > ee_max_amount)
        {
            return true;
        }
		else
		{
			return false;
		}
    };

	$scope.add_funds = function()
	{
		var keys = Object.keys($scope.pension_detail.fund.list_fund);
		$scope.pension_detail.fund.list_fund[keys.length] = {name:'', value:0}
	};

	$scope.add_empty_list_fund = function()
	{
		$log.info("yes")
		if(!$scope.pension_detail.fund.list_fund)
		{
			$scope.pension_detail.fund.list_fund = [{name:'Name...', value:0}]
		}
	}

	$scope.remove_empty_list_fund = function()
	{
		var value = 0
		for(fund in $scope.pension_detail.fund.list_fund)
		{
			value += $scope.pension_detail.fund.list_fund[fund].value
		}
		if(value == 0)
		{
			delete $scope.pension_detail.fund.list_fund;
		}
	}

	$scope.remove_listfund = function(index)
	{
		delete $scope.pension_detail.fund.list_fund.splice(index, 1); 
		$scope.add_funds_pot()
	};
	
	$scope.add_funds_pot = function()
	{
		var total_fund_pot = 0;
		for(list in $scope.pension_detail.fund.list_fund)
		{
			if($scope.pension_detail.fund.list_fund[list].value > 0)
			{
				total_fund_pot += parseFloat($scope.pension_detail.fund.list_fund[list].value);
			}
		}
		$scope.pension_detail.fund.fund_pot = total_fund_pot;
	};


	$scope.add_funds_selection = function()
	{
		var keys = Object.keys($scope.fund_selection);
		var length = keys.length
		var total_fund_selection = 100 - $scope.total_fund_selection()
		
		$scope.fund_selection[length] = {name:'', percent:total_fund_selection}
	};
	
	$scope.total_fund_selection = function()
	{
		var total_fund_selection = 0;
		for(list in $scope.fund_selection)
		{
			if($scope.fund_selection[list].percent > 0)
			{
				total_fund_selection += parseFloat($scope.fund_selection[list].percent);
			}
		}
        if(total_fund_selection >= 0 && total_fund_selection <= 100)
        {
            $scope.pension_detail.fund_selection.total_fund_selection = total_fund_selection;
        }
        return total_fund_selection;
	};
    

	$scope.remove_fundselection = function(index)
	{
		delete $scope.fund_selection.splice(index, 1); 
		$scope.total_fund_selection()
	};


	$scope.scores = {}
	$scope.questioner = function(question, value)
	{
		$scope.scores[question] = value;
		var score = 0;
		var count = 0;
		for(value in $scope.scores)
		{
			count += 1;
			score += parseInt($scope.scores[value])
		}
		if(count == 5)
		{
			riskQuestioner(parseInt(score));
		}
	};
	
	function riskQuestioner(score)
	{
		if(score >= 7 && score <=14)
		{
			level_value = level_option[0]
		}
		else if(score >= 15 && score <=21)
		{
			level_value = level_option[1]
		}
		else if(score >= 22 && score <=28)
		{
			level_value = level_option[2]
		}
		else if(score >= 29 && score <=34)
		{
			level_value = level_option[3]
		}
		else if(score >= 35 && score <=40)
		{
			level_value = level_option[4]
		}

		$scope.riskquestionermessage = $sce.trustAsHtml("That means your are " + level_value.level);
		$scope.pension_detail['risk_profiling_level'] = {level:level_value.level, rate:level_value.level_rate};
	}	
	
	$scope.invested = function(pension_details)
	{
		var total_contribution = pension_details.contribution.total * 12;
	    var fund_amount = pension_details.fund.total_fund_amount;
	    var risk_profiling_rate = pension_details.risk_profiling_level.rate;
	    var age_retirement = pension_details.retirement_age;

		var invested = 0
		var cumulative_payments = 0
		var interest = 0
		var cumulative_interest = 0
		var balance = 0
		for (i = 0; i <= age_retirement; i++)
		{
			if(i == 0)
			{
				invested = parseFloat(fund_amount);
				cumulative_payments += invested
				interest = 0
				balance = fund_amount;
			}
			else
			{
				invested = total_contribution
				cumulative_payments += invested
				interest = balance * (risk_profiling_rate/100)
				cumulative_interest += interest;
				balance = (balance + interest + invested)
			}
		}
		var invested  = {cumulative_payments:cumulative_payments, cumulative_interest:cumulative_interest, balance:balance}
		$scope.pension_detail.invested = invested;
		return invested;
	};

        
    $scope.annuityRates = function(retirement_age)
    {
        var annuityRates = [{start_age:55, end_age: 59, rate:4.3},
                            {start_age:60, end_age: 64, rate:4.7},
                            {start_age:65, end_age: 69, rate:5.3},
                            {start_age:70, end_age: 74, rate:6.1},
                            {start_age:75, end_age: 150, rate:7.3}]
        
        var retirement_age = parseInt(retirement_age)
        
        for(i=0; i < annuityRates.length; i++)
        {
            if(retirement_age >= annuityRates[i].start_age && retirement_age <= annuityRates[i].end_age)
            {
                return annuityRates[i].rate
                break;
            }
        }
    };
	
    
	$scope.income_life = function(retirement_age)
	{
		var statepensionarr = $scope.pension_detail.state_pension.split(' ');
		var state_pension = parseInt(statepensionarr[0])
		var retirement_age = parseInt(retirement_age);
		if(retirement_age >= state_pension)
		{
			return true
		}
		else if(retirement_age < state_pension)
		{
			return false
		}
	};
    
	
	$scope.submit_pension = function(details)
	{ 
		var employee_contribution_amount = $scope.pension_detail.employee_contribution.amount
		var employee_contribution_percent = $scope.pension_detail.employee_contribution.percent
		var employer_contribution_amount = $scope.pension_detail.employee_contribution.amount
		var employer_contribution_percent = $scope.pension_detail.employee_contribution.percent
		var saving_type = $scope.pension_detail.contribution.saving_type
		var retirement_age = $scope.pension_detail.retirement_age
		var list_fund =  $scope.pension_detail.fund.list_fund
		var fund_selection = $scope.pension_detail.fund_selection.list_fund_selection

		var list_fundArr = []
		if(list_fund)
		{
			for(fund in list_fund)
			{
				list_fundArr.push(list_fund[fund].name+"|"+list_fund[fund].value)
			}
		}

		var fund_selectionArr = []
		if(fund_selection)
		{
			for(selection in fund_selection)
			{
				fund_selectionArr.push(fund_selection[selection].name+"|"+fund_selection[selection].percent)
			}
		}

		pension.pensionSignup(employee_contribution_amount, employee_contribution_percent, employer_contribution_amount, employer_contribution_percent, saving_type, retirement_age, list_fundArr.join(), fund_selectionArr.join()).then(function(data)
		{
			$rootScope.show_overlay = true;
			$rootScope.popup_confirm = true;
			$rootScope.confirm_show = false;
			$rootScope.cancel_show = true;
			$rootScope.cancel_value = "CLOSE";
			if(data.status == 200)
			{
				$rootScope.confirmTitle = $sce.trustAsHtml("Successfully Signedup");;
				$rootScope.confirmInfo = $sce.trustAsHtml("<p>You have successfully signed up your contribution</p>");
				$scope.form_nav_i = 9;
			}
			else if(data.status == 400)
			{
				$rootScope.confirmTitle = $sce.trustAsHtml("Pension signup currently pending...");;
				$rootScope.confirmInfo = $sce.trustAsHtml("You have already signed up and it's currently pending.");

			}
			else
			{
				$rootScope.confirmTitle = $sce.trustAsHtml(errorTitleMessage);;
				$rootScope.confirmInfo = $sce.trustAsHtml(errorMessage);
			}
		})

	};

	$rootScope.cancel  = function()
    {
		$rootScope.show_overlay = false;
    	$rootScope.popup_confirm = false;
    };

	$rootScope.close  = function()
	{
		$rootScope.show_overlay = false;
    	$rootScope.popup_confirm = false;
	};

	

});

myApp.controller('pensionsignupamendctrl', function($scope,$cookies,$location,$log,$http,$timeout,$rootScope,$sce,$window, $route, $filter,datelibs, user, employee, pension)
{
	$scope.current_date = datelibs.getCurrentDatetime()
	
	user.getUserDetail().then(function(data)
	{
		employee.getEmployeeDetail().then(function(data)
		{

			$scope.salary = data.annual_salary
			
			pension.getPensionDetail().then(function(data)
			{
				var data = data.data.pension_list[0]
				var tax_saving = data.tax_saving;
				var saving_value = 0;
				
				if(tax_saving == 'SALARY_SACRIFICE')
				{
					saving_value = data.employee_contribution * 0.138
				}
				else
				{
					saving_value = data.employee_contribution * 0.20
				}

				$scope.expectedContribution = data.employee_contribution

				$scope.pension_detail = 
				{	
					salary:$scope.salary,
					employee_contribution:
					{
						min_percent:data.min_employee_contribution_percent,
						min_amount:$scope.salary * (data.min_employee_contribution_percent/100) / 12,
						max_percent:data.max_employee_contribution_percent,
						max_amount:$scope.salary * (data.max_employee_contribution_percent/100) / 12,
						percent:data.employee_contribution_percent,
						amount:data.employee_contribution
					},
					employer_contribution:
					{
						min_percent:data.min_employer_contribution_percent,
						min_amount:$scope.salary * (data.min_employer_contribution_percent/100) / 12,
						max_percent:data.max_employer_contribution_percent,
						max_amount:$scope.salary * (data.max_employer_contribution_percent/100) / 12,
						percent:data.employer_contribution_percent,
						amount:data.employer_contribution
					},
					contribution:
                    {
						saving_type: data.tax_saving,
						saving_value: saving_value
                    },
					fund_selection:
					{
						list_fund_selection:data.fund_selection
					}
				};

				if(data.fund_selection)
				{
					$scope.fund_selection = data.fund_selection
				}
				else
				{
					$scope.fund_selection = {'name':'Core Lifestyle Portofolio', 'percent':100}
				}

				$scope.expected_contribution_slider()
				
			})
		})
	})
	
	$scope.form_nav_i = 1;
    
	$scope.form_nav_btn = function(value)
	{
		$scope.form_nav_i += value;
	};
    
    $scope.expected_contribution_amount = function(value)
    {   
		if(value > 0)
		{
			value = value
		}
		else
		{
			value = 0
		}

		var percent = ((parseFloat(value) * 12) / $scope.pension_detail.salary) * 100 ;

		if(percent >= $scope.pension_detail.employee_contribution.min_percent && percent <= $scope.pension_detail.employee_contribution.max_percent)
		{
			$scope.pension_detail.employee_contribution.percent = percent
			$scope.pension_detail.employee_contribution.amount = value
			$scope.expected_employee_contribution.value = percent
		}

		if(percent >= $scope.pension_detail.employer_contribution.min_percent && percent <= $scope.pension_detail.employer_contribution.max_percent)
		{
			$scope.pension_detail.employer_contribution.percent = percent
			$scope.pension_detail.employer_contribution.amount = value
			$scope.expected_employee_contribution.value = percent
		}

		if(percent > $scope.pension_detail.employee_contribution.max_percent)
		{
			$scope.pension_detail.employee_contribution.percent = $scope.pension_detail.employee_contribution.max_percent
			$scope.pension_detail.employee_contribution.amount = $scope.pension_detail.employee_contribution.max_amount
			$scope.expected_employee_contribution.value = $scope.pension_detail.employee_contribution.max_percent
		}
		else if(percent < $scope.pension_detail.employee_contribution.min_percent)
		{
			$scope.pension_detail.employee_contribution.percent = $scope.pension_detail.employee_contribution.min_percent
			$scope.pension_detail.employee_contribution.amount = $scope.pension_detail.employee_contribution.min_amount
			$scope.expected_employee_contribution.value = $scope.pension_detail.employee_contribution.min_percent
		}

		if(percent > $scope.pension_detail.employer_contribution.max_percent)
		{
			$scope.pension_detail.employer_contribution.percent = $scope.pension_detail.employer_contribution.max_percent
			$scope.pension_detail.employer_contribution.amount = $scope.pension_detail.employer_contribution.max_amount
		}
		else if(percent < $scope.pension_detail.employer_contribution.min_percent)
		{
			$scope.pension_detail.employer_contribution.percent = $scope.pension_detail.employer_contribution.min_percent
			$scope.pension_detail.employer_contribution.amount = $scope.pension_detail.employer_contribution.min_amount
		}

		$scope.calculate_saving()


    };

	$scope.expected_contribution_slider = function()
	{   
		$scope.expected_employee_contribution = 
		{
			value: $scope.pension_detail.employee_contribution.percent,
			options: 
			{
			    floor: $scope.pension_detail.employee_contribution.min_percent,
			    ceil: $scope.pension_detail.employee_contribution.max_percent,
			    onChange: function() 
			    {
					$scope.pension_detail.employee_contribution.percent = $scope.expected_employee_contribution.value
					$scope.pension_detail.employee_contribution.amount = ($scope.expected_employee_contribution.value / 100) * $scope.pension_detail.salary / 12
					$scope.expectedContribution = ($scope.expected_employee_contribution.value / 100) * $scope.pension_detail.salary / 12

					if($scope.expected_employee_contribution.value >= $scope.pension_detail.employer_contribution.min_percent && $scope.expected_employee_contribution.value <= $scope.pension_detail.employer_contribution.max_percent)
					{
						$scope.pension_detail.employer_contribution.percent = $scope.expected_employee_contribution.value
						$scope.pension_detail.employer_contribution.amount = ($scope.expected_employee_contribution.value / 100) * $scope.pension_detail.salary / 12
					}

					$scope.calculate_saving()
		        }
			},
		};

		$scope.calculate_saving()
	}

    $scope.calculate_saving = function()
    {
		var saving_value = 0

		if($scope.pension_detail.contribution.saving_type == 'NET_SAVING')
		{
			$scope.pension_detail.contribution.saving_value = $scope.pension_detail.employee_contribution.amount * 0.2
			saving_value = 0
		}
		else if($scope.pension_detail.contribution.saving_type == 'SALARY_SACRIFICE')
		{
			$scope.pension_detail.contribution.saving_value = $scope.pension_detail.employee_contribution.amount * 0.138
			saving_value = $scope.pension_detail.employee_contribution.amount * 0.138
		}

		$scope.pension_detail.contribution.total = parseFloat($scope.pension_detail.employee_contribution.amount) + 
												   parseFloat($scope.pension_detail.employer_contribution.amount) + 
												   parseFloat(saving_value)
    };
    
    $scope.checkinbetween = function(value)
    {
        var ee_min_amount = $scope.pension_detail.employee_contribution.min_amount;
        var ee_max_amount = $scope.pension_detail.employee_contribution.max_amount;
        if(value < ee_min_amount || value > ee_max_amount)
        {
            return true;
        }
		else
		{
			return false;
		}
    };

	$scope.add_funds_selection = function()
	{
		var keys = Object.keys($scope.fund_selection);
		var length = keys.length
		var total_fund_selection = 100 - $scope.total_fund_selection()
		
		$scope.fund_selection[length] = {name:'', percent:total_fund_selection}
	};
	
	$scope.total_fund_selection = function()
	{
		var total_fund_selection = 0;
		for(list in $scope.fund_selection)
		{
			if($scope.fund_selection[list].percent > 0)
			{
				total_fund_selection += parseFloat($scope.fund_selection[list].percent);
			}
		}
        if(total_fund_selection >= 0 && total_fund_selection <= 100)
        {
            $scope.pension_detail.fund_selection.total_fund_selection = total_fund_selection;
        }
        return total_fund_selection;
	};
    

	$scope.remove_fundselection = function(index)
	{
		delete $scope.fund_selection.splice(index, 1); 
		$scope.total_fund_selection()
	};
    
	
	$scope.submit_pension = function(details)
	{ 
		var employee_contribution_amount = $scope.pension_detail.employee_contribution.amount
		var employee_contribution_percent = $scope.pension_detail.employee_contribution.percent
		var employer_contribution_amount = $scope.pension_detail.employee_contribution.amount
		var employer_contribution_percent = $scope.pension_detail.employee_contribution.percent
		var saving_type = $scope.pension_detail.contribution.saving_type
		var fund_selection = $scope.pension_detail.fund_selection.list_fund_selection

		var fund_selectionArr = []
		if(fund_selection)
		{
			for(selection in fund_selection)
			{
				fund_selectionArr.push(fund_selection[selection].name+"|"+fund_selection[selection].percent)
			}
		}

		pension.pensionSignupAmend(employee_contribution_amount, employee_contribution_percent, employer_contribution_amount, employer_contribution_percent, saving_type, fund_selectionArr.join()).then(function(data)
		{
			$rootScope.show_overlay = true;
			$rootScope.popup_confirm = true;
			$rootScope.confirm_show = false;
			$rootScope.cancel_show = true;
			$rootScope.cancel_value = "CLOSE";
			if(data.status == 200)
			{
				$rootScope.confirmTitle = $sce.trustAsHtml("Successfully Signedup");;
				$rootScope.confirmInfo = $sce.trustAsHtml("<p>You have successfully signed up your contribution</p>");
				$scope.form_nav_i = 4;
			}
			else if(data.status == 400)
			{
				$rootScope.confirmTitle = $sce.trustAsHtml("Pension signup currently pending...");;
				$rootScope.confirmInfo = $sce.trustAsHtml("You have already signed up and it's currently pending.");

			}
			else
			{
				$rootScope.confirmTitle = $sce.trustAsHtml(errorTitleMessage);;
				$rootScope.confirmInfo = $sce.trustAsHtml(errorMessage);
			}
		})

	};

	$rootScope.cancel  = function()
	{
		$rootScope.show_overlay = false;
		$rootScope.popup_confirm = false;
	};

	$rootScope.close  = function()
	{
		$rootScope.show_overlay = false;
		$rootScope.popup_confirm = false;
	};	
});

myApp.controller('pensionsignupinfoctrl', function($scope,$cookies,$location,$log,$http,$timeout,$rootScope,$sce,$window, $route, $filter, pension)
{

	var pension_signup_status = ['pending', 'accept', 'cancel', 'withdraw']
	pension.getPensionSignupInfo(pension_signup_status).then(function(data)
	{
		if(data.status == 200)
		{

			var dataObj = {pending:{},
						   accept:{},
						   cancel:{},
						   withdraw:{}}

			for(pension_signup_list in data.data.pensions_signup_list)
			{
				var status = data.data.pensions_signup_list[pension_signup_list].status

				if(dataObj[status])
				{
					dataObj[status][pension_signup_list] = data.data.pensions_signup_list[pension_signup_list]
				}
				else
				{
					dataObj[status] = {[pension_signup_list]:data.data.pensions_signup_list[pension_signup_list]}
				}

			}

			if(Object.keys(dataObj.pending).length)
			{
				$scope.pending = true;
			}
			else
			{
				$scope.pending = false;
			}

			data.data = dataObj

			$scope.pension_signup = data
		}
		else
		{
			$scope.pension_signup = data
		}
		
	})

	$scope.pension_signup_withdraw = function(pension_signup)
	{
		var pension_signup_key = pension_signup.pension_signup_key;
		var hashed = pension_signup.token;

		$rootScope.show_overlay = true;
		$rootScope.popup_confirm = true;
		$rootScope.confirmTitle = $sce.trustAsHtml("Confirm?");;
		$rootScope.confirmInfo = $sce.trustAsHtml("<p>Do you want to withdraw your pension signup?");
		$rootScope.confirm_show = true;
		$rootScope.confirm_value = "OK";
		$rootScope.cancel_show = true;
		$rootScope.cancel_value = "CANCEL";
		
		$rootScope.confirm = function()
		{
			pension.pensionSignupWithdraw(pension_signup_key, hashed).then(function(data)
			{
				if(data.status == 200)
				{
					$rootScope.confirmTitle = $sce.trustAsHtml("Successfully withdrawn");;
					$rootScope.confirmInfo = $sce.trustAsHtml("<p>You have successfully withdrawn pension signup process.</p>");
					$rootScope.confirm_show = false;
					$rootScope.cancel_show = true;
					$rootScope.cancel_value = "CLOSE";
				}
				else
				{
					$rootScope.confirmTitle = $sce.trustAsHtml(errorTitleMessage);;
					$rootScope.confirmInfo = $sce.trustAsHtml(errorMessage);
					$rootScope.confirm_show = false;
					$rootScope.cancel_show = true;
					$rootScope.cancel_value = "CLOSE";
				}

			})
		}
		$rootScope.cancel = function()
		{
			$rootScope.show_overlay = false;
			$rootScope.popup_confirm = false;
		};
		
	}

	$scope.pension_signup_cancel = function(pension_signup)
	{
		var pension_signup_key = pension_signup.pension_signup_key;
		var hashed = pension_signup.token;

		$rootScope.show_overlay = true;
		$rootScope.popup_confirm = true;
		$rootScope.confirmTitle = $sce.trustAsHtml("Confirm?");;
		$rootScope.confirmInfo = $sce.trustAsHtml("<p>Do you want to cancel your pension signup?");
		$rootScope.confirm_show = true;
		$rootScope.confirm_value = "OK";
		$rootScope.cancel_show = true;
		$rootScope.cancel_value = "CANCEL";
		
		$rootScope.confirm = function()
		{
			pension.pensionSignupCancel(pension_signup_key, hashed).then(function(data)
			{
				if(data.status == 200)
				{
					$rootScope.confirmTitle = $sce.trustAsHtml("Successfully canceled");;
					$rootScope.confirmInfo = $sce.trustAsHtml("<p>You have successfully canceled pension signup process.</p>");
					$rootScope.confirm_show = false;
					$rootScope.cancel_show = true;
					$rootScope.cancel_value = "CLOSE";
				}
				else
				{
					$rootScope.confirmTitle = $sce.trustAsHtml(errorTitleMessage);;
					$rootScope.confirmInfo = $sce.trustAsHtml(errorMessage);
					$rootScope.confirm_show = false;
					$rootScope.cancel_show = true;
					$rootScope.cancel_value = "CLOSE";
				}

			})
		}
		$rootScope.cancel = function()
		{
			$rootScope.show_overlay = false;
			$rootScope.popup_confirm = false;
		};
		
	}

});

myApp.controller('pensionsignuprequestctrl',  function($scope,$cookies,$location,$log,$http,$timeout,$rootScope,$sce,$window,$route,pension)
{
	var pension_signup_status = ['pending']
	pension.getPensionSignupInfoAdmin(pension_signup_status).then(function(data)
	{
		$scope.pension_signup_list = data
	})	

	$scope.pension_signup_confirm = function(list, status)
	{	
		var statusMessage = ""
		if(status == 'accept')
		{
			statusMessage = "Approve";
		}
		else if(status == 'cancel')
		{
			statusMessage = "Reject";
		}
		var user_id = list.user_id;
		var employee = list.employee;
		var pension_signup_key = list.pension_signup_key;
		var hashed = list.token;
		
		$rootScope.show_overlay = true;
		$rootScope.popup_confirm = true;
		$rootScope.confirmTitle = $sce.trustAsHtml("Confirm?");;
		$rootScope.confirmInfo = $sce.trustAsHtml("<p>Do you want to <b>"+statusMessage+"</b> for <b>"+user_id+" - "+capitalizeFirstLetter(employee.firstname)+" "+capitalizeFirstLetter(employee.lastname)+"</b> pension signup process?");
		$rootScope.confirm_show = true;
		$rootScope.confirm_value = "OK";
		$rootScope.cancel_show = true;
		$rootScope.cancel_value = "CANCEL";

		$rootScope.confirm = function()
		{
			pension.pensionSignupApproval(pension_signup_key, hashed, status).then(function(data)
			{
				if(data.status == 200)
				{
					var statusMessage = ""
					if(status == 1)
					{
						statusMessage = "approved";
					}
					else if(status == 2)
					{
						statusMessage = "canceled";
					}
					$rootScope.confirmTitle = $sce.trustAsHtml("Successfully " + statusMessage);;
					$rootScope.confirmInfo = $sce.trustAsHtml("<p>You have successfully "+statusMessage+" for <b>"+user_id+" - "+capitalizeFirstLetter(employee.firstname)+" "+capitalizeFirstLetter(employee.lastname)+"</b> pension signup process");
					$rootScope.confirm_show = false;
					$rootScope.cancel_show = false;
					$rootScope.cancel_value = "CLOSE";
				}
				else
				{
					$rootScope.confirmTitle = $sce.trustAsHtml(errorTitleMessage);;
					$rootScope.confirmInfo = $sce.trustAsHtml(errorMessage);
					$rootScope.confirm_show = false;
					$rootScope.cancel_show = true;
					$rootScope.cancel_value = "CLOSE";
				}
			});
		};

		$rootScope.cancel = function()
		{
			$rootScope.show_overlay = false;
			$rootScope.popup_confirm = false;
			$scope.booking_controller_info_controller = true;
		};
	}

	$rootScope.close = function()
	{
		$rootScope.show_overlay = false;
		$rootScope.popup_confirm = false;
		$scope.booking_controller_info_controller = true;
	};

});

myApp.controller('pmictrl', function($scope,$cookies,$location,$log,$http,$timeout,$rootScope,$sce,$window,$route,pmi)
{
	pmi.getPmiDetail().then(function(data)
	{
		$scope.pmi = data
	})

});

myApp.controller('pmisignupctrl', function($scope,$cookies,$location,$log,$http,$timeout,$rootScope,$sce,$window,$route,pmi,user,employee,datelibs)
{
	$scope.age_list = datelibs.generateAge(4, 13)

	$scope.excess_list = [0, 100, 250, 500, 1000]

	$scope.cover_who = {	
						SELF:{	name:'single',
								img:'http://image005.flaticon.com/1/png/128/10/10522.png',
								enum:'SELF',
								annual_cost:0.00,
								monthly_cost:0.00},
						SELF_AND_PARTNER:{name:'couple',
								img:'https://cdn1.iconfinder.com/data/icons/people-13/100/People1-30-128.png',
								enum:'SELF_AND_PARTNER',
								annual_cost:0.00,
								monthly_cost:0.00},
						SELF_AND_CHILDREN:{name:'parent',
								img:'https://cdn1.iconfinder.com/data/icons/people-13/100/People1-25-128.png',
								enum:'SELF_AND_CHILDREN',
								annual_cost:0.00,
								monthly_cost:0.00},
						FAMILY:{name:'family',
								img:'http://image005.flaticon.com/1/png/128/57/57992.png',
								enum:'FAMILY',
								annual_cost:0.00,
								monthly_cost:0.00}
						}

	user.getUserDetail().then(function(data)
	{
		$scope.age = datelibs.getAge(data.dob)
		$scope.dob = data.dob;

		employee.getEmployeeDetail().then(function(data)
		{
			$scope.salary = data.annual_salary

			if($scope.salary <= 31785)
			{
				$scope.tax = 0.88
			}
			if($scope.salary > 31785 )
			{
				$scope.tax = 0.98
			}

			pmi.getPmiDetail().then(function(data)
			{
				$scope.pmi = data.data.pmi_list[0]
				$log.info($scope.pmi)
				pmi.getPmiRates().then(function(data)
				{
					if(data.status == 200)
					{
						$scope.pmi_progress = true
						$scope.premium_who = $scope.pmi.premium_who
						$scope.current_excess = $scope.pmi.excess
						$scope.gross_cost = $scope.pmi.gross_cost
						$scope.premium_core = $scope.pmi.premium_core
						$scope.excess = $scope.pmi.excess
						$scope.current_who = $scope.pmi.who
						$scope.who = $scope.pmi.who
						$scope.excess_rates = data.data.excessfactor
						$scope.rates = data.data.rates
						$scope.calculate();
					}
				})

				pmi.getPmiSignupInfo(['pending', 'accept', 'cancel']).then(function(data)
				{
					if(data.status  == 200)
					{
						$scope.pmi_signup = data.data.pmi_signup_list[0]
					}
				})



			})
		})
	});


	$scope.status_type = function(status)
	{
		return pmi.getPmiStatusType(status)
	}

	$scope.who_type = function(who)
	{
		return pmi.getPmiEnumType(who)
	}

	$scope.selected_who = function(who, value, index)
	{
		$scope.highlight_cover_level_selected = index
		$scope.cover_selected = value
		$scope.who = who;
	}

	$scope.selected_excess = function(excess, index)
	{
		$scope.highlight_excess_selected = index
		$scope.excess_selected = true
		$scope.excess = excess;
		$scope.calculate()
	}

	$scope.calculate = function()
	{
		for(var age in $scope.age_list)
		{
			var age = parseInt(age)
			var age_pre = age - 1
			if(age == 0)
			{
				if($scope.age < $scope.age_list[age])
				{
					$scope.rate = $scope.rates[age]
					break;
				}

			}
			else if(age < $scope.age_list.length)
			{
				if($scope.age > $scope.age_list[age_pre] && $scope.age <= $scope.age_list[age])
				{
					$scope.rate = $scope.rates[age]
					break;
				}
			}
			else if(age == $scope.age_list.length - 1)
			{
				if($scope.age >= $scope.age_list[age])
				{
					$scope.rate = $scope.rates[age]
					break;
				}
			}
		}


		for(var excess in $scope.excess_list)
		{
			if($scope.excess == $scope.excess_list[excess])
			{
				$scope.rates_excessfactor = $scope.excess_rates[excess]
			}
		}


		var single = ($scope.rate) * $scope.rates_excessfactor
        var couple = ($scope.rate * 2) * $scope.rates_excessfactor
        var parent = ($scope.rate * 1.5) * $scope.rates_excessfactor 
        var family = ($scope.rate * 2.5) * $scope.rates_excessfactor


		if($scope.premium_who == 'NONE')
		{
			$scope.cover_who.SELF.annual_cost = single
			$scope.cover_who.SELF_AND_PARTNER.annual_cost = couple
			$scope.cover_who.SELF_AND_CHILDREN.annual_cost = parent
			$scope.cover_who.FAMILY.annual_cost = family

		}
		else if($scope.premium_who == 'SELF')
		{
			if((couple - single) > 0)
			{
				$scope.cover_who.SELF_AND_PARTNER.annual_cost = couple - single
			}
			else
			{
				$scope.cover_who.SELF_AND_PARTNER.annual_cost = 0
			}

			if((parent - single) > 0)
			{
				$scope.cover_who.SELF_AND_PARTNER.annual_cost = parent - single
			}
			else
			{
				$scope.cover_who.SELF_AND_PARTNER.annual_cost = 0	
			}
			if((family - single) > 0)
			{
				$scope.cover_who.FAMILY.annual_cost = family - single
			}
			else
			{
				$scope.cover_who.FAMILY.annual_cost = 0
			}
		}
		/* Couple */
		else if($scope.premium_who == 'SELF_AND_PARTNER')
		{
			if((parent - couple) > 0)
			{
				$scope.cover_who.SELF_AND_PARTNER.annual_cost = parent - couple
			}
			else
			{
				$scope.cover_who.SELF_AND_PARTNER.annual_cost = 0
			}

			if((family - couple) > 0)
			{
				$scope.cover_who.FAMILY.annual_cost = family - couple
			}
			else
			{
				$scope.cover_who.FAMILY.annual_cost = 0
			}
		}
		/* Parent */
		else if($scope.premium_who == 'SELF_AND_CHILDREN')
		{
			if((family - parent) > 0)
			{
				$scope.cover_who.FAMILY.annual_cost = family - parent
			}
			else
			{
				$scope.cover_who.FAMILY.annual_cost = 0
			}
			
		}

		$scope.cover_who.SELF.monthly_cost  = ($scope.cover_who.SELF.annual_cost * $scope.tax) / 12;
		$scope.cover_who.SELF_AND_PARTNER.monthly_cost  = ($scope.cover_who.SELF_AND_PARTNER.annual_cost * $scope.tax) / 12;
		$scope.cover_who.SELF_AND_CHILDREN.monthly_cost  = ($scope.cover_who.SELF_AND_CHILDREN.annual_cost * $scope.tax) / 12;
		$scope.cover_who.FAMILY.monthly_cost  = ($scope.cover_who.FAMILY.annual_cost * $scope.tax) / 12;
		
	}

	$scope.submit = function()
	{
		var cover = $scope.cover_selected;
		var name = cover.name;
		var who = cover.enum;
		var gross_cost = cover.annual_cost
		var excess = $scope.excess

		$rootScope.show_overlay = true;
		$rootScope.popup_confirm = true;
		$rootScope.confirmTitle = $sce.trustAsHtml("Confirm?");;
		$rootScope.confirmInfo = $sce.trustAsHtml("<p>You have selected <b>"+name+"</b> that will cost you <b>"+gross_cost+"</b>?</p>");
		$rootScope.confirm_show = true;
		$rootScope.confirm_value = "OK";
		$rootScope.cancel_show = true;
		$rootScope.cancel_value = "CANCEL";

		$rootScope.confirm = function()
		{
			pmi.pmiSignup(who, gross_cost, excess).then(function(data)
			{
				$rootScope.cancel_value = "CLOSE";
				$rootScope.confirm_show = false;
				$rootScope.cancel_show = true;

				if(data.status == 200)
				{
					$rootScope.confirmTitle = $sce.trustAsHtml("PMI successfully signed up");;
					$rootScope.confirmInfo = $sce.trustAsHtml("<p></p>");
				}
				else if(data.status == 400)
				{
					$rootScope.confirmTitle = $sce.trustAsHtml("PMI signup currently pending...");;
					$rootScope.confirmInfo = $sce.trustAsHtml("You have already signed up and it's currently pending.");
				}
				else
				{
					$rootScope.confirmTitle = $sce.trustAsHtml(errorTitleMessage);;
					$rootScope.confirmInfo = $sce.trustAsHtml(errorMessage);
				}

			})
		};

		$rootScope.cancel = function()
		{
			$rootScope.show_overlay = false;
			$rootScope.popup_confirm = false;
		};

	}

	$rootScope.close = function()
	{
		$rootScope.show_overlay = false;
		$rootScope.popup_confirm = false;
	};

});

myApp.controller('pmisignupinfoctrl', function($scope,$cookies,$location,$log,$http,$timeout,$rootScope,$sce,$window,$route,pmi)
{
	var pmi_signup_status = ['pending', 'accept', 'cancel', 'withdraw']
	pmi.getPmiSignupInfo(pmi_signup_status).then(function(data)
	{
		if(data.status == 200)
		{
			var dataObj = {pending:{},
						   accept:{},
						   cancel:{},
						   withdraw:{}}

			for(pmi_signup_list in data.data.pmi_signup_list)
			{
				var status = data.data.pmi_signup_list[pmi_signup_list].status

				if(dataObj[status])
				{
					dataObj[status][pmi_signup_list] = data.data.pmi_signup_list[pmi_signup_list]
				}
				else
				{
					dataObj[status] = {[pmi_signup_list]:data.data.pmi_signup_list[pmi_signup_list]}
				}

			}

			if(Object.keys(dataObj.pending).length)
			{
				$scope.pending = true;
			}
			else
			{
				$scope.pending = false;
			}

			dataObj.data = dataObj
			$scope.pmi_signup = data
		}
		else
		{
			$scope.pmi_signup = data
		}
		
	});

	$scope.who_type = function(who)
	{
		return pmi.getPmiEnumType(who)
	}

	$scope.status_type = function(status)
	{
		return pmi.getPmiStatusType(status)
	}

	$scope.pmi_signup_withdraw = function(pmi_signup)
	{
		var hashed = pmi_signup.token
		var pmi_signup_key = pmi_signup.pmi_signup_key

		$rootScope.show_overlay = true;
		$rootScope.popup_confirm = true;
		$rootScope.confirmTitle = $sce.trustAsHtml("Confirm?");;
		$rootScope.confirmInfo = $sce.trustAsHtml("<p>Do you want to withdraw?</p>");
		$rootScope.confirm_show = true;
		$rootScope.confirm_value = "OK";
		$rootScope.cancel_show = true;
		$rootScope.cancel_value = "CANCEL";

		$rootScope.confirm = function()
		{
			pmi.pmiSignupWithdraw(pmi_signup_key, hashed).then(function(data)
			{
				$rootScope.cancel_value = "CLOSE";
				$rootScope.confirm_show = false;
				$rootScope.cancel_show = true;

				if(data.status == 200)
				{
					$rootScope.confirmTitle = $sce.trustAsHtml("Successfully withdrawn");;
					$rootScope.confirmInfo = $sce.trustAsHtml("<p>You have successfully withdrawn pmi signup process</p>");
				}
				else
				{
					$rootScope.confirmTitle = $sce.trustAsHtml(errorTitleMessage);;
					$rootScope.confirmInfo = $sce.trustAsHtml(errorMessage);
				}

			})
		};

		$rootScope.cancel = function()
		{
			$rootScope.show_overlay = false;
			$rootScope.popup_confirm = false;
		};
	}
});


myApp.controller('pmisignuprequestctrl', function($scope,$cookies,$location,$log,$http,$timeout,$rootScope,$sce,$window,$route,pmi)
{
	pmi_signup_status = ['pending']

	pmi.getPmiSignupInfoAdmin(pmi_signup_status).then(function(data)
	{
		$scope.pmi_signup_list = data
	})

	$scope.who_cover = function(who)
	{
		return pmi.getPmiEnumType(who)
	}

	$scope.pmi_signup_confirm = function(list, status)
	{
		var statusMessage = ""
		if(status == 'accept')
		{
			statusMessage = "Approve";
		}
		else if(status == 'cancel')
		{
			statusMessage = "Reject";
		}
		var user_id = list.user_id;
		var employee = list.employee;
		var pmi_signup_key = list.pmi_signup_key;
		var hashed = list.token;
		
		$rootScope.show_overlay = true;
		$rootScope.popup_confirm = true;
		$rootScope.confirmTitle = $sce.trustAsHtml("Confirm?");;
		$rootScope.confirmInfo = $sce.trustAsHtml("<p>Do you want to <b>"+statusMessage+"</b> for <b>"+user_id+" - "+capitalizeFirstLetter(employee.firstname)+" "+capitalizeFirstLetter(employee.lastname)+"</b> pmi signup?");
		$rootScope.confirm_show = true;
		$rootScope.confirm_value = "OK";
		$rootScope.cancel_show = true;
		$rootScope.cancel_value = "CANCEL";

		$rootScope.confirm = function()
		{
			pmi.pmiSignupApproval(pmi_signup_key, hashed, status).then(function(data)
			{
				if(data.status == 200)
				{
					var statusMessage = ""
					if(status == 'accept')
					{
						statusMessage = "approved";
					}
					else if(status == 'cancel')
					{
						statusMessage = "canceled";
					}
					$rootScope.confirmTitle = $sce.trustAsHtml("Successfully " + statusMessage);;
					$rootScope.confirmInfo = $sce.trustAsHtml("<p>You have successfully "+statusMessage+" for <b>"+user_id+" - "+capitalizeFirstLetter(employee.firstname)+" "+capitalizeFirstLetter(employee.lastname)+"</b> pmi signup");
					$rootScope.confirm_show = false;
					$rootScope.cancel_show = false;
					$rootScope.cancel_value = "CLOSE";
				}
				else
				{
					$rootScope.confirmTitle = $sce.trustAsHtml(errorTitleMessage);;
					$rootScope.confirmInfo = $sce.trustAsHtml(errorMessage);
					$rootScope.confirm_show = false;
					$rootScope.cancel_show = true;
					$rootScope.cancel_value = "CLOSE";
				}
			});
		};

		$rootScope.cancel = function()
		{
			$rootScope.show_overlay = false;
			$rootScope.popup_confirm = false;
			$scope.booking_controller_info_controller = true;
		};
	}

});


myApp.controller('dentalctrl', function($scope,$cookies,$location,$log,$http,$timeout,$rootScope,$sce,$window,$route,dental)
{
	dental.getDentalDetail().then(function(data)
	{
		$scope.dental = data
	})

	$scope.who_type = function(who)
	{
		return dental.getDentalWhoType(who)
	}
});

myApp.controller('dentalsignupctrl', function($scope,$cookies,$location,$log,$http,$timeout,$rootScope,$sce,$window,$route,dental)
{
	dental.getDentalDetail().then(function(data)
	{

		dental.getDentalSignupInfo(['pending', 'accept', 'cancel']).then(function(data)
		{
			if(data.status  == 200)
			{
				$scope.dental_signup = data.data.dental_signup_list[0]
			}
		})

		$scope.dental = data

		if(data.status == 200)
		{
			$scope.premium_who = data.data.dental_list[0].premium_who
			$scope.premium_cover_level = data.data.dental_list[0].premium_cover_level
		}

		dental.getDentalRates().then(function(data)
		{
			$scope.rates = data
			$scope.generate_cover_level()
		})
	})

	$scope.who_type = function(who)
	{
		return dental.getDentalWhoType(who)
	}

	$scope.status_type = function(status)
	{
		return dental.getDentalStatusType(status)
	}

	$scope.generate_cover_level = function()
	{
		if($scope.premium_who == 'NONE')
		{
			$scope.cover_level = $scope.rates.cover_level
		}
		else
		{
			var cover_level_found = false
			var cover_level = {}
			for(var cover in $scope.rates.cover_level)
			{
				if($scope.premium_cover_level == cover)
				{
					cover_level_found = true
				}

				if(cover_level_found)
				{
					cover_level[cover] = $scope.rates.cover_level[cover]
				}
			}
			
			$scope.cover_level = cover_level
		}
	}
	

	$scope.select_who = function(who, cover_level, index)
	{
		$scope.highlight_who_selected = index
		$scope.selected_who = who
		$scope.calculate()
	}

	$scope.select_cover_level = function(cover_level, rate, index)
	{
		$scope.highlight_cover_level_selected = index
		$scope.selected_cover_level = cover_level
		$scope.calculate()
	}

	$scope.calculate = function()
	{
		var premium_who = $scope.premium_who
		var premium_cover_level = $scope.premium_cover_level
		var selected_who = $scope.selected_who
		var selected_cover_level = $scope.selected_cover_level
		var total = 0

		if(selected_who && selected_cover_level)
		{
			if(premium_who == 'SELF')
			{
				var premium_core = $scope.rates.who[premium_who] * $scope.rates.cover_level[premium_cover_level]
				total = $scope.rates.who[selected_who] * $scope.rates.cover_level[selected_cover_level] - premium_core
			}
			else if(premium_who == 'NONE')
			{
				total = $scope.rates.who[selected_who] * $scope.rates.cover_level[selected_cover_level]
			}
			else
			{
				var premium_core = $scope.rates.who[selected_who] * $scope.rates.cover_level[premium_cover_level]
				total = $scope.rates.who[selected_who] * $scope.rates.cover_level[selected_cover_level] - premium_core
			}

			$scope.gross_cost = total
		}
		
	}

	$scope.submit = function()
	{
		var who = $scope.selected_who
		var cover_level = $scope.selected_cover_level
		var gross_cost = $scope.gross_cost

		$rootScope.show_overlay = true;
		$rootScope.popup_confirm = true;
		$rootScope.confirmTitle = $sce.trustAsHtml("Confirm?");;
		$rootScope.confirmInfo = $sce.trustAsHtml("<p>You have selected <b>"+who+"</b> for <b>"+cover_level+"<b/> level that will cost you <b>"+gross_cost+"</b>?</p>");
		$rootScope.confirm_show = true;
		$rootScope.confirm_value = "OK";
		$rootScope.cancel_show = true;
		$rootScope.cancel_value = "CANCEL";

		$rootScope.confirm = function()
		{
			dental.dentalSignup(who, cover_level, gross_cost).then(function(data)
			{
				$rootScope.cancel_value = "CLOSE";
				$rootScope.confirm_show = false;
				$rootScope.cancel_show = true;

				if(data.status == 200)
				{
					$rootScope.confirmTitle = $sce.trustAsHtml("Cashplan successfully signed up");;
					$rootScope.confirmInfo = $sce.trustAsHtml("<p></p>");
				}
				else if(data.status == 400)
				{
					$rootScope.confirmTitle = $sce.trustAsHtml("Cashplan signup currently pending...");;
					$rootScope.confirmInfo = $sce.trustAsHtml("You have already signed up and it's currently pending.");
				}
				else
				{
					$rootScope.confirmTitle = $sce.trustAsHtml(errorTitleMessage);;
					$rootScope.confirmInfo = $sce.trustAsHtml(errorMessage);
				}

			})
		};

		$rootScope.cancel = function()
		{
			$rootScope.show_overlay = false;
			$rootScope.popup_confirm = false;
		};

	}

});

myApp.controller('dentalsignupinfoctrl', function($scope,$cookies,$location,$log,$http,$timeout,$rootScope,$sce,$window,$route,dental)
{
	var dental_signup_status = ['pending', 'accept', 'cancel', 'withdraw']
	dental.getDentalSignupInfo(dental_signup_status).then(function(data)
	{
		if(data.status == 200)
		{
			var dataObj = {pending:{},
						   accept:{},
						   cancel:{},
						   withdraw:{}}

			for(dental_signup_list in data.data.dental_signup_list)
			{
				var status = data.data.dental_signup_list[dental_signup_list].status

				if(dataObj[status])
				{
					dataObj[status][dental_signup_list] = data.data.dental_signup_list[dental_signup_list]
				}
				else
				{
					dataObj[status] = {[dental_signup_list]:data.data.cic_signup_list[dental_signup_list]}
				}

			}

			if(Object.keys(dataObj.pending).length)
			{
				$scope.pending = true;
			}
			else
			{
				$scope.pending = false;
			}

			data.data = dataObj
			$scope.dental_signup = data
		}
		else
		{
			$scope.dental_signup = data
		}
	})

	$scope.who_type = function(who_type)
	{
		return dental.getDentalWhoType(who_type)
	};

	$scope.status_type = function(status)
	{
		return dental.getDentalStatusType(status)
	};

	$scope.dental_signup_withdraw = function(dental_signup)
	{
		var hashed = dental_signup.token
		var dental_signup_key = dental_signup.dental_signup_key

		$rootScope.show_overlay = true;
		$rootScope.popup_confirm = true;
		$rootScope.confirmTitle = $sce.trustAsHtml("Confirm?");;
		$rootScope.confirmInfo = $sce.trustAsHtml("<p>Do you want to withdraw?</p>");
		$rootScope.confirm_show = true;
		$rootScope.confirm_value = "OK";
		$rootScope.cancel_show = true;
		$rootScope.cancel_value = "CANCEL";

		$rootScope.confirm = function()
		{
			dental.dentalSignupWithdraw(dental_signup_key, hashed).then(function(data)
			{
				$rootScope.cancel_value = "CLOSE";
				$rootScope.confirm_show = false;
				$rootScope.cancel_show = true;

				if(data.status == 200)
				{
					$rootScope.confirmTitle = $sce.trustAsHtml("Successfully withdrawn");;
					$rootScope.confirmInfo = $sce.trustAsHtml("<p>You have successfully withdrawn dental signup process</p>");
				}
				else
				{
					$rootScope.confirmTitle = $sce.trustAsHtml(errorTitleMessage);;
					$rootScope.confirmInfo = $sce.trustAsHtml(errorMessage);
				}

			})
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
	};
});

myApp.controller('dentalsignuprequestctrl', function($scope,$cookies,$location,$log,$http,$timeout,$rootScope,$sce,$window,$route,dental)
{
	var dental_signup_status = ['pending']
	dental.getDentalSignupInfoAdmin(dental_signup_status).then(function(data)
	{
		$scope.dental_signup_list = data
	})

	$scope.who_type = function(who_type)
	{
		return dental.getDentalWhoType(who_type)
	};

	$scope.dental_signup_confirm = function(list, status)
	{
		var statusMessage = ""
		if(status == 'accept')
		{
			statusMessage = "Approve";
		}
		else if(status == 'cancel')
		{
			statusMessage = "Reject";
		}

		var user_id = list.user_id;
		var employee = list.employee;
		var dental_signup_key = list.dental_signup_key;
		var hashed = list.token;
		
		$rootScope.show_overlay = true;
		$rootScope.popup_confirm = true;
		$rootScope.confirmTitle = $sce.trustAsHtml("Confirm?");;
		$rootScope.confirmInfo = $sce.trustAsHtml("<p>Do you want to <b>"+statusMessage+"</b> for <b>"+user_id+" - "+capitalizeFirstLetter(employee.firstname)+" "+capitalizeFirstLetter(employee.lastname)+"</b> cashplan signup?");
		$rootScope.confirm_show = true;
		$rootScope.confirm_value = "OK";
		$rootScope.cancel_show = true;
		$rootScope.cancel_value = "CANCEL";

		$rootScope.confirm = function()
		{
			dental.dentalSignupApproval(dental_signup_key, hashed, status).then(function(data)
			{
				if(data.status == 200)
				{
					var statusMessage = ""
					if(status == 'accept')
					{
						statusMessage = "approved";
					}
					else if(status == 'cancel')
					{
						statusMessage = "canceled";
					}
					$rootScope.confirmTitle = $sce.trustAsHtml("Successfully " + statusMessage);;
					$rootScope.confirmInfo = $sce.trustAsHtml("<p>You have successfully "+statusMessage+" for <b>"+user_id+" - "+capitalizeFirstLetter(employee.firstname)+" "+capitalizeFirstLetter(employee.lastname)+"</b> cashplan signup");
					$rootScope.confirm_show = false;
					$rootScope.cancel_show = false;
					$rootScope.cancel_value = "CLOSE";
				}
				else
				{
					$rootScope.confirmTitle = $sce.trustAsHtml(errorTitleMessage);;
					$rootScope.confirmInfo = $sce.trustAsHtml(errorMessage);
					$rootScope.confirm_show = false;
					$rootScope.cancel_show = true;
					$rootScope.cancel_value = "CLOSE";
				}
			});
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
	};
})

myApp.controller('cashplanctrl', function($scope,$cookies,$location,$log,$http,$timeout,$rootScope,$sce,$window,$route,cashplan)
{
	cashplan.getCashplanDetail().then(function(data)
	{
		$scope.cashplan = data
	})

	$scope.who_type = function(who)
	{
		return cashplan.getCashplanWhoType(who)
	}
});

myApp.controller('cashplansignupctrl', function($scope,$cookies,$location,$log,$http,$timeout,$rootScope,$sce,$window,$route,cashplan)
{
	cashplan.getCashplanDetail().then(function(data)
	{
		cashplan.getCashplanSignupInfo(['pending', 'accept', 'cancel']).then(function(data)
		{
			if(data.status  == 200)
			{
				$scope.cashplan_signup = data.data.cashplan_signup_list[0]
			}
		})

		$scope.cashplan = data

		if(data.status == 200)
		{
			$scope.premium_who = data.data.cashplan_list[0].premium_who
			$scope.premium_cover_level = data.data.cashplan_list[0].premium_cover_level
		}
		cashplan.getCashplanRates().then(function(data)
		{
			$scope.rates = data
			$scope.generate_cover_level()
		})
	})

	$scope.generate_cover_level = function()
	{
		if($scope.premium_who == 'NONE')
		{
			$scope.cover_level = $scope.rates['SELF_AND_CHILDREN']
		}
		else
		{
			var cover_level_found = false
			var cover_level = {}
			for(var cover in $scope.rates[$scope.premium_who])
			{
				if($scope.premium_cover_level == cover)
				{
					cover_level_found = true
				}

				if(cover_level_found)
				{
					cover_level[cover] = $scope.rates[$scope.premium_who][cover]
				}
			}
			$scope.cover_level = cover_level
		}
	}


	$scope.who_type = function(who)
	{
		return cashplan.getCashplanWhoType(who)
	}

	$scope.status_type = function(status)
	{
		return cashplan.getCashplanStatusType(status)
	}

	$scope.select_who = function(who, cover_level, index)
	{
		$scope.highlight_who_selected = index
		$scope.selected_who = who
		$scope.calculate()
	}

	$scope.select_cover_level = function(cover_level, rate, index)
	{
		$scope.highlight_cover_level_selected = index
		$scope.selected_cover_level = cover_level
		$scope.calculate()
	}

	$scope.calculate = function()
	{
		var premium_who = $scope.premium_who
		var premium_cover_level = $scope.premium_cover_level
		var selected_who = $scope.selected_who
		var selected_cover_level = $scope.selected_cover_level
		var total = 0

		if(selected_who && selected_cover_level)
		{
			if(premium_who == 'SELF_AND_CHILDREN')
			{
				var premium_core = $scope.rates[premium_who][premium_cover_level]
				total = $scope.rates[selected_who][selected_cover_level] - premium_core
			}
			else if(premium_who == 'SELF_AND_PARTNER')
			{
				if(selected_who == 'SELF_AND_CHILDREN')
				{
					var single_cost = $scope.rates['SELF_AND_CHILDREN'][premium_cover_level]
					total = $scope.rates[selected_who][selected_cover_level] - single_cost
				}
				else if(selected_who == 'SELF_AND_PARTNER')
				{
					var premium_core = $scope.rates[premium_who][premium_cover_level]
					total = $scope.rates[selected_who][selected_cover_level] - premium_core
				}
			}
			else if(premium_who == 'NONE')
			{
				total = $scope.rates[selected_who][selected_cover_level]
			}

			$scope.gross_cost = total
		}
		
	}

	$scope.submit = function()
	{
		var who = $scope.selected_who
		var cover_level = $scope.selected_cover_level
		var gross_cost = $scope.gross_cost

		$rootScope.show_overlay = true;
		$rootScope.popup_confirm = true;
		$rootScope.confirmTitle = $sce.trustAsHtml("Confirm?");;
		$rootScope.confirmInfo = $sce.trustAsHtml("<p>You have selected <b>"+who+"</b> for <b>"+cover_level+"<b/> level that will cost you <b>"+gross_cost+"</b>?</p>");
		$rootScope.confirm_show = true;
		$rootScope.confirm_value = "OK";
		$rootScope.cancel_show = true;
		$rootScope.cancel_value = "CANCEL";

		$rootScope.confirm = function()
		{
			cashplan.cashplanSignup(who, cover_level, gross_cost).then(function(data)
			{
				$rootScope.cancel_value = "CLOSE";
				$rootScope.confirm_show = false;
				$rootScope.cancel_show = true;

				if(data.status == 200)
				{
					$rootScope.confirmTitle = $sce.trustAsHtml("Cashplan successfully signed up");;
					$rootScope.confirmInfo = $sce.trustAsHtml("<p></p>");
				}
				else if(data.status == 400)
				{
					$rootScope.confirmTitle = $sce.trustAsHtml("Cashplan signup currently pending...");;
					$rootScope.confirmInfo = $sce.trustAsHtml("You have already signed up and it's currently pending.");
				}
				else
				{
					$rootScope.confirmTitle = $sce.trustAsHtml(errorTitleMessage);;
					$rootScope.confirmInfo = $sce.trustAsHtml(errorMessage);
				}

			})
		};

		$rootScope.cancel = function()
		{
			$rootScope.show_overlay = false;
			$rootScope.popup_confirm = false;
		};

	}
});

myApp.controller('cashplansignupinfoctrl', function($scope,$cookies,$location,$log,$http,$timeout,$rootScope,$sce,$window,$route,cashplan)
{
	var cashplan_signup_status = ['pending', 'accept', 'cancel', 'withdraw']
	cashplan.getCashplanSignupInfo(cashplan_signup_status).then(function(data)
	{
		if(data.status == 200)
		{
			var dataObj = {pending:{},
						   accept:{},
						   cancel:{},
						   withdraw:{}}

			for(cashplan_signup_list in data.data.cashplan_signup_list)
			{
				var status = data.data.cashplan_signup_list[cashplan_signup_list].status

				if(dataObj[status])
				{
					dataObj[status][cashplan_signup_list] = data.data.cashplan_signup_list[cashplan_signup_list]
				}
				else
				{
					dataObj[status] = {[cashplan_signup_list]:data.data.cic_signup_list[cashplan_signup_list]}
				}

			}

			if(Object.keys(dataObj.pending).length)
			{
				$scope.pending = true;
			}
			else
			{
				$scope.pending = false;
			}

			data.data = dataObj
			$scope.cashplan_signup = data
		}
		else
		{
			$scope.cashplan_signup = data
		}
	})

	$scope.who_type = function(who_type)
	{
		return cashplan.getCashplanWhoType(who_type)
	};

	$scope.status_type = function(status)
	{
		return cashplan.getCashplanStatusType(status)
	};

	$scope.cashplan_signup_withdraw = function(cashplan_signup)
	{
		$log.info(cashplan_signup)
		var hashed = cashplan_signup.token
		var cashplan_signup_key = cashplan_signup.cashplan_signup_key

		$rootScope.show_overlay = true;
		$rootScope.popup_confirm = true;
		$rootScope.confirmTitle = $sce.trustAsHtml("Confirm?");;
		$rootScope.confirmInfo = $sce.trustAsHtml("<p>Do you want to withdraw?</p>");
		$rootScope.confirm_show = true;
		$rootScope.confirm_value = "OK";
		$rootScope.cancel_show = true;
		$rootScope.cancel_value = "CANCEL";

		$rootScope.confirm = function()
		{
			cashplan.cashplanSignupWithdraw(cashplan_signup_key, hashed).then(function(data)
			{
				$rootScope.cancel_value = "CLOSE";
				$rootScope.confirm_show = false;
				$rootScope.cancel_show = true;

				if(data.status == 200)
				{
					$rootScope.confirmTitle = $sce.trustAsHtml("Successfully withdrawn");;
					$rootScope.confirmInfo = $sce.trustAsHtml("<p>You have successfully withdrawn cashplan signup process</p>");
				}
				else
				{
					$rootScope.confirmTitle = $sce.trustAsHtml(errorTitleMessage);;
					$rootScope.confirmInfo = $sce.trustAsHtml(errorMessage);
				}

			})
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
	};
});


myApp.controller('cashplansignuprequestctrl', function($scope,$cookies,$location,$log,$http,$timeout,$rootScope,$sce,$window,$route,cashplan)
{
	var cashplan_signup_status = ['pending']
	cashplan.getCashplanSignupInfoAdmin(cashplan_signup_status).then(function(data)
	{
		$scope.cashplan_signup_list = data
	})

	$scope.who_type = function(who_type)
	{
		return cashplan.getCashplanWhoType(who_type)
	};

	$scope.cashplan_signup_confirm = function(list, status)
	{
		var statusMessage = ""
		if(status == 'accept')
		{
			statusMessage = "Approve";
		}
		else if(status == 'cancel')
		{
			statusMessage = "Reject";
		}

		var user_id = list.user_id;
		var employee = list.employee;
		var cashplan_signup_key = list.cashplan_signup_key;
		var hashed = list.token;
		
		$rootScope.show_overlay = true;
		$rootScope.popup_confirm = true;
		$rootScope.confirmTitle = $sce.trustAsHtml("Confirm?");;
		$rootScope.confirmInfo = $sce.trustAsHtml("<p>Do you want to <b>"+statusMessage+"</b> for <b>"+user_id+" - "+capitalizeFirstLetter(employee.firstname)+" "+capitalizeFirstLetter(employee.lastname)+"</b> cashplan signup?");
		$rootScope.confirm_show = true;
		$rootScope.confirm_value = "OK";
		$rootScope.cancel_show = true;
		$rootScope.cancel_value = "CANCEL";

		$rootScope.confirm = function()
		{
			cashplan.cashplanSignupApproval(cashplan_signup_key, hashed, status).then(function(data)
			{
				if(data.status == 200)
				{
					var statusMessage = ""
					if(status == 'accept')
					{
						statusMessage = "approved";
					}
					else if(status == 'cancel')
					{
						statusMessage = "canceled";
					}
					$rootScope.confirmTitle = $sce.trustAsHtml("Successfully " + statusMessage);;
					$rootScope.confirmInfo = $sce.trustAsHtml("<p>You have successfully "+statusMessage+" for <b>"+user_id+" - "+capitalizeFirstLetter(employee.firstname)+" "+capitalizeFirstLetter(employee.lastname)+"</b> cashplan signup");
					$rootScope.confirm_show = false;
					$rootScope.cancel_show = false;
					$rootScope.cancel_value = "CLOSE";
				}
				else
				{
					$rootScope.confirmTitle = $sce.trustAsHtml(errorTitleMessage);;
					$rootScope.confirmInfo = $sce.trustAsHtml(errorMessage);
					$rootScope.confirm_show = false;
					$rootScope.cancel_show = true;
					$rootScope.cancel_value = "CLOSE";
				}
			});
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
	};
})


myApp.controller('cicctrl', function($scope,$cookies,$location,$log,$http,$timeout,$rootScope,$sce,$window,$route,cic)
{
	cic.getCicDetail().then(function(data)
	{
		$scope.cic = data
	})
});

myApp.controller('cicsignupctrl', function($scope,$cookies,$location,$log,$http,$timeout,$rootScope,$sce,$window,$route,user,employee,cic,datelibs)
{
	user.getUserDetail().then(function(data)
	{
		$scope.dob = data.dob
		$scope.age = datelibs.getAge(data.dob)

		employee.getEmployeeDetail().then(function(data)
		{
			$scope.salary = data.annual_salary

			var cic_signup_status = ['pending', 'accept', 'cancel']
			cic.getCicSignupInfo(cic_signup_status).then(function(data)
			{
				if(data.status == 200)
				{
					$scope.cic_signup = data.data.cic_signup_list[0]
				}
			});

			cic.getCicDetail().then(function(cic_data)
			{
				cic.getCicRates().then(function(data)
				{
					var cic = cic_data.data.cic_list[0]
					$scope.rates = data[$scope.age]
					$scope.window_salary = cic.window_salary
					$scope.min_multiple = cic.core_multiple
					$scope.max_multiple = cic.flex_max_multiple
					$scope.current_multiple = cic.flex_multiple
					$scope.cap = cic.cap
					flex_multiple()
				})
			})
		})
	})

	$scope.status_type = function(status)
	{
		return cic.getCicStatusType(status)
	};
	
	$scope.cic_multiple = []

	function flex_multiple()
	{
		for(var i = $scope.min_multiple; i <= $scope.max_multiple; i++)
		{
			$scope.cic_multiple.push(i)
		}
	}

	$scope.select_multiple = function(multiple, index)
	{
		$scope.highlight_multiple_selected = index

		$scope.selected_multiple = multiple

		$scope.total_cover = $scope.salary * multiple

		if($scope.total_cover > $scope.cap)
		{
			$scope.total = $scope.cap
		}
		else
		{
			$scope.total = $scope.total_cover
		}
		var gross_cost = ((($scope.salary * multiple) - ($scope.window_salary * $scope.min_multiple)) / 1000) * $scope.rates
		if(gross_cost < 0)
		{
			gross_cost = 0
		}
		$scope.gross_cost = gross_cost;
	}

	$scope.submit = function()
	{
		var salary = $scope.salary
		var multiple = $scope.selected_multiple
		var gross_cost = $scope.gross_cost
		
		$rootScope.show_overlay = true;
		$rootScope.popup_confirm = true;
		$rootScope.confirmTitle = $sce.trustAsHtml("Confirm?");;
		$rootScope.confirmInfo = $sce.trustAsHtml("<p>You have selected: "+multiple+"x multiple which will cost you: "+gross_cost+"</p>");
		$rootScope.confirm_show = true;
		$rootScope.confirm_value = "OK";
		$rootScope.cancel_show = true;
		$rootScope.cancel_value = "CANCEL";

		$rootScope.confirm = function()
		{
			cic.cicSignup(salary, multiple, gross_cost).then(function(data)
			{
				$rootScope.confirm_show = false;
				$rootScope.cancel_show = true;
				$rootScope.cancel_value = "CLOSE";

				if(data.status == 200)
				{
					$rootScope.confirmTitle = $sce.trustAsHtml("Cic successfully signed up");;
					$rootScope.confirmInfo = $sce.trustAsHtml("");
				}
				else if(data.status == 400)
				{
					$rootScope.confirmTitle = $sce.trustAsHtml("Cic signup currently pending...");;
					$rootScope.confirmInfo = $sce.trustAsHtml("You have already signed up and it's currently pending.");
				}
				else
				{
					$rootScope.confirmTitle = $sce.trustAsHtml(errorTitleMessage);;
					$rootScope.confirmInfo = $sce.trustAsHtml(errorMessage);
				}
			});
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
	}

});

myApp.controller('cicsignupinfoctrl', function($scope,$cookies,$location,$log,$http,$timeout,$rootScope,$sce,$window,$route,cic)
{
	var cic_signup_status = ['pending', 'accept', 'cancel', 'withdraw']
	cic.getCicSignupInfo(cic_signup_status).then(function(data)
	{
		if(data.status == 200)
		{
			var dataObj = {pending:{},
						   accept:{},
						   cancel:{},
						   withdraw:{}}

			for(cic_signup_list in data.data.cic_signup_list)
			{
				var status = data.data.cic_signup_list[cic_signup_list].status

				if(dataObj[status])
				{
					dataObj[status][cic_signup_list] = data.data.cic_signup_list[cic_signup_list]
				}
				else
				{
					dataObj[status] = {[cic_signup_list]:data.data.cic_signup_list[cic_signup_list]}
				}

			}

			if(Object.keys(dataObj.pending).length)
			{
				$scope.pending = true;
			}
			else
			{
				$scope.pending = false;
			}

			data.data = dataObj
			$scope.cic_signup = data
		}
		else
		{
			$scope.cic_signup = data
		}
	})

	$scope.status_type = function(status)
	{
		return cic.getCicStatusType(status)
	};

	$scope.cic_signup_withdraw = function(cic_signup)
	{
		var hashed = cic_signup.token
		var cic_signup_key = cic_signup.cic_signup_key

		$rootScope.show_overlay = true;
		$rootScope.popup_confirm = true;
		$rootScope.confirmTitle = $sce.trustAsHtml("Confirm?");;
		$rootScope.confirmInfo = $sce.trustAsHtml("<p>Do you want to withdraw?</p>");
		$rootScope.confirm_show = true;
		$rootScope.confirm_value = "OK";
		$rootScope.cancel_show = true;
		$rootScope.cancel_value = "CANCEL";

		$rootScope.confirm = function()
		{
			cic.cicSignupWithdraw(cic_signup_key, hashed).then(function(data)
			{
				$rootScope.cancel_value = "CLOSE";
				$rootScope.confirm_show = false;
				$rootScope.cancel_show = true;

				if(data.status == 200)
				{
					$rootScope.confirmTitle = $sce.trustAsHtml("Successfully withdrawn");;
					$rootScope.confirmInfo = $sce.trustAsHtml("<p>You have successfully withdrawn cic signup process</p>");
				}
				else
				{
					$rootScope.confirmTitle = $sce.trustAsHtml(errorTitleMessage);;
					$rootScope.confirmInfo = $sce.trustAsHtml(errorMessage);
				}

			})
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
	};
});

myApp.controller('cicsignuprequestctrl', function($scope,$cookies,$location,$log,$http,$timeout,$rootScope,$sce,$window,$route,cic)
{
	var cic_signup_status = ['pending']
	cic.getCicSignupInfoAdmin(cic_signup_status).then(function(data)
	{
		$scope.cic_signup_list = data
	})

	$scope.cic_signup_confirm = function(list, status)
	{
		var statusMessage = ""
		if(status == 'accept')
		{
			statusMessage = "Approve";
		}
		else if(status == 'cancel')
		{
			statusMessage = "Reject";
		}

		var user_id = list.user_id;
		var employee = list.employee;
		var cic_signup_key = list.cic_signup_key;
		var hashed = list.token;
		
		$rootScope.show_overlay = true;
		$rootScope.popup_confirm = true;
		$rootScope.confirmTitle = $sce.trustAsHtml("Confirm?");;
		$rootScope.confirmInfo = $sce.trustAsHtml("<p>Do you want to <b>"+statusMessage+"</b> for <b>"+user_id+" - "+capitalizeFirstLetter(employee.firstname)+" "+capitalizeFirstLetter(employee.lastname)+"</b> cic signup?");
		$rootScope.confirm_show = true;
		$rootScope.confirm_value = "OK";
		$rootScope.cancel_show = true;
		$rootScope.cancel_value = "CANCEL";

		$rootScope.confirm = function()
		{
			cic.cicSignupApproval(cic_signup_key, hashed, status).then(function(data)
			{
				if(data.status == 200)
				{
					var statusMessage = ""
					if(status == 'accept')
					{
						statusMessage = "approved";
					}
					else if(status == 'cancel')
					{
						statusMessage = "canceled";
					}
					$rootScope.confirmTitle = $sce.trustAsHtml("Successfully " + statusMessage);;
					$rootScope.confirmInfo = $sce.trustAsHtml("<p>You have successfully "+statusMessage+" for <b>"+user_id+" - "+capitalizeFirstLetter(employee.firstname)+" "+capitalizeFirstLetter(employee.lastname)+"</b> life signup");
					$rootScope.confirm_show = false;
					$rootScope.cancel_show = false;
					$rootScope.cancel_value = "CLOSE";
				}
				else
				{
					$rootScope.confirmTitle = $sce.trustAsHtml(errorTitleMessage);;
					$rootScope.confirmInfo = $sce.trustAsHtml(errorMessage);
					$rootScope.confirm_show = false;
					$rootScope.cancel_show = true;
					$rootScope.cancel_value = "CLOSE";
				}
			});
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
	};
})

myApp.controller('lifectrl', function($scope,$cookies,$location,$log,$http,$timeout,$rootScope,$sce,$window,$route,life)
{
	life.getLifeDetail().then(function(data)
	{
		$scope.life = data
	})
});

myApp.controller('lifesignupctrl', function($scope,$cookies,$location,$log,$http,$timeout,$rootScope,$sce,$window,$route,user,employee,life,datelibs)
{
	user.getUserDetail().then(function(data)
	{
		$scope.dob = data.dob
		$scope.age = datelibs.getAge(data.dob)
		employee.getEmployeeDetail().then(function(data)
		{
			$scope.salary = data.annual_salary
			var life_signup_status = ['pending', 'accept']
			life.getLifeSignupInfo(life_signup_status).then(function(data)
			{
				if(data.status == 200)
				{
					$scope.life_signup = data.data.life_signup_list[0]
				}
			});
			life.getLifeDetail().then(function(life_data)
			{
				life.getLifeRates().then(function(data)
				{
					var life = life_data.data.life_list[0]
					$scope.rates = data[$scope.age]
					var age = $scope.age
					if(age < 16)
					{
						$scope.rates = data[16]
					}
					else if(age > 69)
					{
						$scope.rates = data[69]
					}
					$scope.window_salary = life.window_salary
					$scope.min_multiple = life.core_multiple
					$scope.max_multiple = life.flex_max_multiple
					$scope.current_multiple = life.flex_multiple
					$scope.cap = life.cap
					flex_multiple()
				})
			})
		})
	})

	$scope.status_type = function(status)
	{
		return life.getlifeStatusType(status)
	};
	
	$scope.life_multiple = []

	function flex_multiple()
	{
		for(var i = $scope.min_multiple; i <= $scope.max_multiple; i++)
		{
			$scope.life_multiple.push(i)
		}
	}

	$scope.selected_multiple = function(multiple, index)
	{
		$scope.highlight_multiple_selected = index

		$scope.multiple = multiple

		$scope.total_life_cover = $scope.salary * multiple

		if($scope.total_life_cover > $scope.cap)
		{
			$scope.total = $scope.cap
		}
		else
		{
			$scope.total = $scope.total_life_cover
		}

		$log.info($scope.salary, $scope.multiple, $scope.window_salary, $scope.min_multiple, $scope.rates)
		var gross_cost = ((($scope.salary * multiple) - ($scope.window_salary * $scope.min_multiple)) / 1000) * $scope.rates
		if(gross_cost < 0)
		{
			gross_cost = 0
		}
		$scope.gross_cost = gross_cost;
	}

	$scope.submit = function()
	{
		var multiple = $scope.multiple
		var gross_cost = $scope.gross_cost
		
		$rootScope.show_overlay = true;
		$rootScope.popup_confirm = true;
		$rootScope.confirmTitle = $sce.trustAsHtml("Confirm?");;
		$rootScope.confirmInfo = $sce.trustAsHtml("<p>You have selected: "+multiple+"x multiple which will cost you: "+gross_cost+"</p>");
		$rootScope.confirm_show = true;
		$rootScope.confirm_value = "OK";
		$rootScope.cancel_show = true;
		$rootScope.cancel_value = "CANCEL";

		$rootScope.confirm = function()
		{
			life.lifeSignup(multiple, gross_cost).then(function(data)
			{
				$rootScope.confirm_show = false;
				$rootScope.cancel_show = false;
				$rootScope.cancel_value = "CLOSE";

				if(data.status == 200)
				{
					$rootScope.confirmTitle = $sce.trustAsHtml("Life successfully signed up");;
					$rootScope.confirmInfo = $sce.trustAsHtml("");
				}
				else if(data.status == 400)
				{
					$rootScope.confirmTitle = $sce.trustAsHtml("Life signup currently pending...");;
					$rootScope.confirmInfo = $sce.trustAsHtml("You have already signed up and it's currently pending.");
				}
				else
				{
					$rootScope.confirmTitle = $sce.trustAsHtml(errorTitleMessage);;
					$rootScope.confirmInfo = $sce.trustAsHtml(errorMessage);
				}
			});
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
	}

});

myApp.controller('lifesignupinfoctrl', function($scope,$cookies,$location,$log,$http,$timeout,$rootScope,$sce,$window,$route,life)
{
	var life_signup_status = ['pending', 'accept', 'cancel', 'withdraw']
	life.getLifeSignupInfo(life_signup_status).then(function(data)
	{
		if(data.status == 200)
		{
			var dataObj = {pending:{},
						   accept:{},
						   cancel:{},
						   withdraw:{}}

			for(life_signup_list in data.data.life_signup_list)
			{
				var status = data.data.life_signup_list[life_signup_list].status

				if(dataObj[status])
				{
					dataObj[status][life_signup_list] = data.data.life_signup_list[life_signup_list]
				}
				else
				{
					dataObj[status] = {[life_signup_list]:data.data.life_signup_list[life_signup_list]}
				}

			}

			if(Object.keys(dataObj.pending).length)
			{
				$scope.pending = true;
			}
			else
			{
				$scope.pending = false;
			}

			data.data = dataObj
			$scope.life_signup = data
		}
		else
		{
			$scope.life_signup = data
		}
	})

	$scope.status_type = function(status)
	{
		return life.getlifeStatusType(status)
	};

	$scope.life_signup_withdraw = function(life_signup)
	{
		var hashed = life_signup.token
		var life_signup_key = life_signup.life_signup_key

		$rootScope.show_overlay = true;
		$rootScope.popup_confirm = true;
		$rootScope.confirmTitle = $sce.trustAsHtml("Confirm?");;
		$rootScope.confirmInfo = $sce.trustAsHtml("<p>Do you want to withdraw?</p>");
		$rootScope.confirm_show = true;
		$rootScope.confirm_value = "OK";
		$rootScope.cancel_show = true;
		$rootScope.cancel_value = "CANCEL";

		$rootScope.confirm = function()
		{
			life.lifeSignupWithdraw(life_signup_key, hashed).then(function(data)
			{
				$rootScope.cancel_value = "CLOSE";
				$rootScope.confirm_show = false;
				$rootScope.cancel_show = true;

				if(data.status == 200)
				{
					$rootScope.confirmTitle = $sce.trustAsHtml("Successfully withdrawn");;
					$rootScope.confirmInfo = $sce.trustAsHtml("<p>You have successfully withdrawn life signup process</p>");
				}
				else
				{
					$rootScope.confirmTitle = $sce.trustAsHtml(errorTitleMessage);;
					$rootScope.confirmInfo = $sce.trustAsHtml(errorMessage);
				}

			})
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
	};
});

myApp.controller('lifesignuprequestctrl', function($scope,$cookies,$location,$log,$http,$timeout,$rootScope,$sce,$window,$route,life)
{
	var life_signup_status = ['pending']
	life.getLifeSignupInfoAdmin(life_signup_status).then(function(data)
	{
		$scope.life_signup_list = data
	})

	$scope.life_signup_confirm = function(list, status)
	{
		var statusMessage = ""
		if(status == 'accept')
		{
			statusMessage = "Approve";
		}
		else if(status == 'cancel')
		{
			statusMessage = "Reject";
		}

		var user_id = list.user_id;
		var employee = list.employee;
		var life_signup_key = list.life_signup_key;
		var hashed = list.token;
		
		$rootScope.show_overlay = true;
		$rootScope.popup_confirm = true;
		$rootScope.confirmTitle = $sce.trustAsHtml("Confirm?");;
		$rootScope.confirmInfo = $sce.trustAsHtml("<p>Do you want to <b>"+statusMessage+"</b> for <b>"+user_id+" - "+capitalizeFirstLetter(employee.firstname)+" "+capitalizeFirstLetter(employee.lastname)+"</b> pmi signup?");
		$rootScope.confirm_show = true;
		$rootScope.confirm_value = "OK";
		$rootScope.cancel_show = true;
		$rootScope.cancel_value = "CANCEL";

		$rootScope.confirm = function()
		{
			life.lifeSignupApproval(life_signup_key, hashed, status).then(function(data)
			{
				if(data.status == 200)
				{
					var statusMessage = ""
					if(status == 'accept')
					{
						statusMessage = "approved";
					}
					else if(status == 'cancel')
					{
						statusMessage = "canceled";
					}
					$rootScope.confirmTitle = $sce.trustAsHtml("Successfully " + statusMessage);;
					$rootScope.confirmInfo = $sce.trustAsHtml("<p>You have successfully "+statusMessage+" for <b>"+user_id+" - "+capitalizeFirstLetter(employee.firstname)+" "+capitalizeFirstLetter(employee.lastname)+"</b> life signup");
					$rootScope.confirm_show = false;
					$rootScope.cancel_show = false;
					$rootScope.cancel_value = "CLOSE";
				}
				else
				{
					$rootScope.confirmTitle = $sce.trustAsHtml(errorTitleMessage);;
					$rootScope.confirmInfo = $sce.trustAsHtml(errorMessage);
					$rootScope.confirm_show = false;
					$rootScope.cancel_show = true;
					$rootScope.cancel_value = "CLOSE";
				}
			});
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
	};
})


myApp.controller('gipctrl', function($scope,$cookies,$location,$log,$http,$timeout,$rootScope,$sce,$window,$route,gip)
{
	gip.getGipDetail().then(function(data)
	{
		$scope.gip = data
	})

	gip.getGipRate().then(function(data)
	{
		$scope.payment_term_type = function(payment_term)
		{	
			if(payment_term)
			{
				return data.term[payment_term].name
			}
		}
	});
});

myApp.controller('gipsignupctrl', function($scope,$cookies,$location,$log,$http,$timeout,$rootScope,$sce,$window,$route,datelibs,user,employee,gip)
{
	user.getUserDetail().then(function(data)
	{
		$scope.age = datelibs.getAge(data.dob)
		$scope.dob = data.dob;

		employee.getEmployeeDetail().then(function(data)
		{
			$scope.salary = data.annual_salary

			gip.getGipDetail().then(function(data)
			{
				$scope.window_salary = data.data.gip_list[0].window_salary
				$scope.current_percentage = data.data.gip_list[0].percentage
				$scope.premium_percentage = data.data.gip_list[0].premium_percentage
				$scope.current_gross = data.data.gip_list[0].gross

				gip.getGipRate().then(function(data)
				{
					var percentages = data.percentage
					var percentagesArr = []
					if($scope.premium_percentage)
					{
						for(var i=percentages.indexOf($scope.premium_percentage); i < percentages.length; i++)
						{
							percentagesArr.push(percentages[i])
						}
					}
					else
					{
						percentagesArr = data.percentage
					}
					$scope.percentage = percentagesArr
					$scope.terms = data.term
				})
			})

		})
	})

	$scope.select_percentage = function(percent, index)
	{
		$scope.highlight_percentage_selected = index
		$scope.selected_percentage = percent
		$scope.calculate()
	}

	$scope.select_term= function(enumval, term, index)
	{
		$scope.highlight_term_selected = index
		$scope.payment_term = enumval
		$scope.rates_multiple = term.multiple
		$scope.rates = term.rate
		$scope.calculate()
	}

	$scope.calculate = function()
	{
		$scope.current_core = $scope.window_salary * ($scope.premium_percentage/100)
		$scope.total = $scope.salary * ($scope.selected_percentage/100)
		var total = ($scope.total - $scope.current_core) * (($scope.rates[$scope.age] * $scope.rates_multiple) / 1000)
		if(total > 0)
		{
			total = total
		}
		else
		{
			total = 0
		}
		$scope.gross_cost = total
	}

	$scope.submit = function()
	{
		var percentage = $scope.selected_percentage
		var gross_cost = $scope.gross_cost
		var payment_term = $scope.payment_term 
		var window_salary = $scope.salary

		$rootScope.show_overlay = true;
		$rootScope.popup_confirm = true;
		$rootScope.confirmTitle = $sce.trustAsHtml("Confirm?");;
		$rootScope.confirmInfo = $sce.trustAsHtml("<p>You have selected: "+percentage+"% of "+window_salary+" = "+$scope.total+" which will cost you: "+gross_cost+"</p>");
		$rootScope.confirm_show = true;
		$rootScope.confirm_value = "OK";
		$rootScope.cancel_show = true;
		$rootScope.cancel_value = "CANCEL";

		$rootScope.confirm = function()
		{
			gip.gipSignup(percentage, gross_cost, payment_term).then(function(data)
			{
				$rootScope.confirm_show = false;
				$rootScope.cancel_show = true;
				$rootScope.cancel_value = "CLOSE";

				if(data.status == 200)
				{
					$rootScope.confirmTitle = $sce.trustAsHtml("Gip successfully signed up");;
					$rootScope.confirmInfo = $sce.trustAsHtml("");
				}
				else if(data.status == 400)
				{
					$rootScope.confirmTitle = $sce.trustAsHtml("Gip signup currently pending...");;
					$rootScope.confirmInfo = $sce.trustAsHtml("You have already signed up and it's currently pending.");
				}
				else
				{
					$rootScope.confirmTitle = $sce.trustAsHtml(errorTitleMessage);;
					$rootScope.confirmInfo = $sce.trustAsHtml(errorMessage);
				}
			});
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
	}

});

myApp.controller('gipsignupinfoctrl', function($scope,$cookies,$location,$log,$http,$timeout,$rootScope,$sce,$window,$route,gip)
{
	var gip_signup_status = ['pending', 'accept', 'cancel', 'withdraw']
	gip.getGipSignupInfo(gip_signup_status).then(function(data)
	{
		if(data.status == 200)
		{
			var dataObj = {pending:{},
						   accept:{},
						   cancel:{},
						   withdraw:{}}

			for(gip_signup_list in data.data.gip_signup_list)
			{
				var status = data.data.gip_signup_list[gip_signup_list].status

				if(dataObj[status])
				{
					dataObj[status][gip_signup_list] = data.data.gip_signup_list[gip_signup_list]
				}
				else
				{
					dataObj[status] = {[gip_signup_list]:data.data.gip_signup_list[gip_signup_list]}
				}

			}

			if(Object.keys(dataObj.pending).length)
			{
				$scope.pending = true;
			}
			else
			{
				$scope.pending = false;
			}

			data.data = dataObj
			$scope.gip_signup = data
		}
		else
		{
			$scope.gip_signup = data
		}
	})

	$scope.status_type = function(status)
	{
		return gip.getGipStatusType(status)
	};

	
	gip.getGipRate().then(function(data)
	{
		$scope.payment_term_type = function(payment_term)
		{	
			return data.term[payment_term].name
		}
	});

	$scope.gip_signup_withdraw = function(gip_signup)
	{
		var hashed = gip_signup.token
		var gip_signup_key = gip_signup.gip_signup_key

		$rootScope.show_overlay = true;
		$rootScope.popup_confirm = true;
		$rootScope.confirmTitle = $sce.trustAsHtml("Confirm?");;
		$rootScope.confirmInfo = $sce.trustAsHtml("<p>Do you want to withdraw?</p>");
		$rootScope.confirm_show = true;
		$rootScope.confirm_value = "OK";
		$rootScope.cancel_show = true;
		$rootScope.cancel_value = "CANCEL";

		$rootScope.confirm = function()
		{
			gip.gipSignupWithdraw(gip_signup_key, hashed).then(function(data)
			{
				$rootScope.cancel_value = "CLOSE";
				$rootScope.confirm_show = false;
				$rootScope.cancel_show = true;

				if(data.status == 200)
				{
					$rootScope.confirmTitle = $sce.trustAsHtml("Successfully withdrawn");;
					$rootScope.confirmInfo = $sce.trustAsHtml("<p>You have successfully withdrawn Gip signup process</p>");
				}
				else
				{
					$rootScope.confirmTitle = $sce.trustAsHtml(errorTitleMessage);;
					$rootScope.confirmInfo = $sce.trustAsHtml(errorMessage);
				}

			})
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
	};
});

myApp.controller('gipsignuprequestctrl', function($scope,$cookies,$location,$log,$http,$timeout,$rootScope,$sce,$window,$route,gip)
{
	var gip_signup_status = ['pending']
	gip.getGipSignupInfoAdmin(gip_signup_status).then(function(data)
	{
		$scope.gip_signup_list = data
	})

	gip.getGipRate().then(function(data)
	{
		$scope.payment_term_type = function(payment_term)
		{	
			return data.term[payment_term].name
		}
	});

	$scope.gip_signup_confirm = function(list, status)
	{
		var statusMessage = ""
		if(status == 'accept')
		{
			statusMessage = "Approve";
		}
		else if(status == 'cancel')
		{
			statusMessage = "Reject";
		}

		var user_id = list.user_id;
		var employee = list.employee;
		var gip_signup_key = list.gip_signup_key;
		var hashed = list.token;
		
		$rootScope.show_overlay = true;
		$rootScope.popup_confirm = true;
		$rootScope.confirmTitle = $sce.trustAsHtml("Confirm?");;
		$rootScope.confirmInfo = $sce.trustAsHtml("<p>Do you want to <b>"+statusMessage+"</b> for <b>"+user_id+" - "+capitalizeFirstLetter(employee.firstname)+" "+capitalizeFirstLetter(employee.lastname)+"</b> gip signup?");
		$rootScope.confirm_show = true;
		$rootScope.confirm_value = "OK";
		$rootScope.cancel_show = true;
		$rootScope.cancel_value = "CANCEL";

		$rootScope.confirm = function()
		{
			gip.gipSignupApproval(gip_signup_key, hashed, status).then(function(data)
			{
				if(data.status == 200)
				{
					var statusMessage = ""
					if(status == 'accept')
					{
						statusMessage = "approved";
					}
					else if(status == 'cancel')
					{
						statusMessage = "canceled";
					}
					$rootScope.confirmTitle = $sce.trustAsHtml("Successfully " + statusMessage);;
					$rootScope.confirmInfo = $sce.trustAsHtml("<p>You have successfully "+statusMessage+" for <b>"+user_id+" - "+capitalizeFirstLetter(employee.firstname)+" "+capitalizeFirstLetter(employee.lastname)+"</b> gip signup");
					$rootScope.confirm_show = false;
					$rootScope.cancel_show = false;
					$rootScope.cancel_value = "CLOSE";
				}
				else
				{
					$rootScope.confirmTitle = $sce.trustAsHtml(errorTitleMessage);;
					$rootScope.confirmInfo = $sce.trustAsHtml(errorMessage);
					$rootScope.confirm_show = false;
					$rootScope.cancel_show = true;
					$rootScope.cancel_value = "CLOSE";
				}
			});
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
	};
})

myApp.controller('trsctrl', function($scope,$cookies,$location,$log,$http,$timeout,$rootScope,$sce,$window,$route,trs)
{
	trs.getTrs().then(function(data)
	{
		if(data.status == 200)
		{
			$scope.firstname = ""
			$scope.lastname = ""

			var trs = data.data

			var salary = trs.salary.salary
			var car_allowance = 0
			var company_car = 0
			var company_car_mini = 0
			var pmi = trs.pmi.premium_core
			var life_assurance = trs.life.premium_core
			var life_multiple = trs.life.core_multiple;
			var gip = trs.gip.premium_core
			var cic = trs.cic.premium_core
			var cic_multiple = trs.cic.core_multiple
			var pension_contribution = trs.pension.employer_contribution
			var pension_contribution_percentage = trs.pension.employer_contribution_percentage
			var ccv = 0
			var ctw = 0

			$scope.total_remuneration = 0;
			$scope.total_protection = 0;
			$scope.total_retirement = 0;
			$scope.total_salary_sacrifice = 0;
			$scope.total_rewards = 0;


			$scope.trs = {remuneration:{}, protection:{}, retirement:{}, salary_sacrifice:{}, other:{}};

			if(salary && salary > 0)
			{
				$scope.trs.remuneration.salary = 
				{
					title:'Salary', 
					value:salary
				};
			}
			if(car_allowance && car_allowance > 0)
			{
				$scope.trs.remuneration.car_allowance = 
				{
					title:'Car Allowance', 
					value:car_allowance
				};
			}

			if(company_car && company_car > 0)
			{
				$scope.trs.remuneration.company_car = 
				{
					title:'Company Car', 
					value:company_car * 12
				};
			}

			if(company_car_mini && company_car_mini > 0)
			{
				$scope.trs.remuneration.company_car_mini = 
				{
					title:'Company Car (Mini Lease)', 
					value:company_car_mini * 12
				};
			}

			//Insurance
			if(pmi && pmi > 0)
			{
				$scope.trs.protection.pmi = 
				{
					title:'Private Healthcare', 
					value:pmi,
					provider:'BUPA',
					link:'#/pmi'
				}; 
			}

			if(life_assurance && life_assurance > 0)
			{
				$scope.trs.protection.gla = 
				{
					title:'Life Assurance', 
					value:life_assurance,
					provider:'Zurich',
					link:'#/life',
					multiple: parseInt(life_multiple)
				}; 
			}

			if(gip && gip > 0)
			{
				$scope.trs.protection.gip = 
				{
					title:'Income Protection', 
					value:gip,
					provider:'Canada Life'
				}; 
			}

			if(cic && cic > 0)
			{
				$scope.trs.protection.ci = 
				{
					title:'Critical Illness Extra', 
					value:cic,
					provider:'Unum'
				}; 
			}

			/*
			var gci = $location.search().gci
				gci = 4.70 * 12;
			if(gci && gci > 0)
			{
				$scope.trs.protection.gci = 
				{
					title:'Critical Illness', 
					value:gci,
					provider:'Unum',
					link: 'https://mybenefits.zone/shaylor/core-benefits/critical-illness',
					cover: 10000
				}; 
			}
			*/

			//Retirement
			if(pension_contribution && pension_contribution > 0)
			{
				$scope.trs.retirement.pension_contribution = 
				{
					title:'Pension Contribution', 
					value:pension_contribution * 12,
					provider:'Standard Life',
					link:'#/pension',
					percent: pension_contribution_percentage
				}; 
				
			}

			//Other
			$scope.salary_sacrifice = {}
			if(salary <= 43500)
			{
				$scope.salary_sacrifice = {title:'Basic Rate', rate:'32%', value: 0.32}
			}
			else if(salary > 43500)
			{
				$scope.salary_sacrifice = {title:'Basic Rate', rate:'32%', value: 0.42}
			}

			if(ccv && ccv > 0)
			{
				$scope.trs.salary_sacrifice.ccv = 
				{
					title:'Child Care Voucher', 
					value:(ccv * 12)*$scope.salary_sacrifice.value,
					link:'#/ccv',
					tax_saved: true
				};   
			}

			if(ctw && ctw > 0)
			{
				$scope.trs.salary_sacrifice.ctw = 
				{
					title:'Cycle to work', 
					value:(ctw * 12)*$scope.salary_sacrifice.value,
					provider:'Evans Cycles',
					link:'#/ctw',
					tax_saved: true
				}; 
			}

			for(var value in $scope.trs.remuneration)
			{
				$scope.total_remuneration += parseFloat($scope.trs.remuneration[value].value);
				$scope.total_rewards += parseFloat($scope.trs.remuneration[value].value);
			}

			for(var value in $scope.trs.protection)
			{
				$scope.total_protection += parseFloat($scope.trs.protection[value].value);
				$scope.total_rewards += parseFloat($scope.trs.protection[value].value);
			}

			for(var value in $scope.trs.retirement)
			{
				$scope.total_retirement += parseFloat($scope.trs.retirement[value].value);
				$scope.total_rewards += parseFloat($scope.trs.retirement[value].value);
			}

			for(var value in $scope.trs.salary_sacrifice)
			{
				$scope.total_salary_sacrifice += parseFloat($scope.trs.salary_sacrifice[value].value);
				$scope.total_rewards += parseFloat($scope.trs.salary_sacrifice[value].value);
			}

			for(var value in $scope.trs.other)
			{
				$scope.total_other += parseFloat($scope.trs.other[value].value);
				$scope.total_rewards += parseFloat($scope.trs.other[value].value);
			}


			var chart_label = [];
			var chart_value = [];
			var chart_color = [];

			if($scope.total_remuneration)
			{
				chart_label.push("Remuneration")
				chart_value.push($scope.total_remuneration);
				chart_color.push("#36A2EB");
			}

			if($scope.total_protection)
			{
				chart_label.push("Protection");
				chart_value.push($scope.total_protection);
				chart_color.push("#38CE65");
			}

			if($scope.total_retirement)
			{
				chart_label.push("Retirement");
				chart_value.push($scope.total_retirement);
				chart_color.push("#CC4949");
			}

			if($scope.total_salary_sacrifice)
			{
				chart_label.push("Salary sacrifice");
				chart_value.push($scope.total_salary_sacrifice);
				chart_color.push("#FFCE56");
			}

			if($scope.total_other)
			{
				chart_label.push("Other");
				chart_value.push($scope.total_other);
				chart_color.push("#63FF8F");
			}

			$scope.labels = chart_label;
			$scope.data = chart_value;
			$scope.colors = chart_color;

			$log.info($scope.trs)
		}

	})
});


myApp.controller('notificationctrl', function($scope,$cookies,$location,$log,$http,$timeout,$rootScope,$sce,$window, $route)
{
    var api_key = "B34rX81Ya63nk38F5M7hVj5cA4u4uBCi";
	var api_link = "https://3-dot-august-craft-119616.appspot.com/_ah/api/notificationChrome/v1/";
    
    $scope.notification = {};
    
    function updateMessage()
    {
        $http({method: 'GET',
               url: api_link + 'listMessage',
               params:{api_key: api_key},
               headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        }).then(
        function successCallback(response) 
        {
			$log.info(response)
            $scope.notification.title = response.data.message.title;
            $scope.notification.icon = response.data.message.icon_url;
            $scope.notification.link = response.data.message.web_url;
            $scope.notification.message = response.data.message.message;
        }, 
        function errorCallback(response) 
        {
			$log.info(response)
        });
    }
    updateMessage();

    $scope.notification_submit = function(data)
    {
		$log.info(data)
        $http({method: 'POST',
               url: api_link + 'insertMessage',
               params:{title: data.title,
                     icon_url: data.icon,
                     web_url: data.link,
                     message: data.message}
        }).then(
        function successCallback(response) 
        {
            $http({method: 'GET',
               url: './notification/curl.php'
            }).then(
            function successCallback(response) 
            {
                updateMessage();
            }, 
            function errorCallback(response) 
            {
            });
        }, 
        function errorCallback(response) 
        {
			$log.info(response)
        });
    };
});

myApp.controller('emictrl', function($scope,$cookies,$location,$log,$http,$timeout,$rootScope,$sce,$window,$route)
{
    $scope.emi = {};
    
    $scope.emi.preferenceshares = 17500000;
    $scope.emi.optionprice = 1;
    $scope.emi.numbershares = 150;
    
    $scope.emi.levelpreference = 631000;
    $scope.emi.assumedvaluation = 40000000;

    $scope.emicaluculate = function()
    {
        emi_structure();
    }
    

    function emi_structure()
    {
        var preferenceshares = parseFloat($scope.emi.preferenceshares);
        
        var levelpreference = 0;
        if(parseFloat($scope.emi.levelpreference) > 0)
        {
            levelpreference = parseFloat($scope.emi.levelpreference);
        }

        var emi_structure_value =  preferenceshares + levelpreference;
        
        $scope.levels = 
        {
            1:{
                increaments: emi_structure_value,
                hurdle: emi_structure_value,
                emi: 0,
                historic: 100 - 0
              },
            2:{
                increaments: 15000000,
                hurdle: 15000000 + emi_structure_value,
                emi: 15,
                historic: 100 - 15
              },
            3:{
                increaments: 0,
                hurdle: 0,
                emi: 20,
                historic: 80
              },
        };
        
        apportionment()

    }
    
    emi_structure();
    
    
    function apportionment()
    {
        var apportionment_value = 0;
        if(parseFloat($scope.emi.assumedvaluation) > 0)
        {
            apportionment_value = parseFloat($scope.emi.assumedvaluation);
        }
        var bucket_value = 0;
        var bucket_value2 = 0;
        var bucket_value3 = 0;
        
        if(apportionment_value > $scope.levels['1'].hurdle)
        {
            bucket_value = $scope.levels['1'].hurdle;
        }
        else
        {
            bucket_value = apportionment_value;
        }
        
        if(apportionment_value > $scope.levels['2'].hurdle)
        {
            bucket_value2 = $scope.levels['2'].increaments;
        }
        else
        {
            bucket_value2 = apportionment_value - bucket_value;
        }
        
        if(bucket_value2 == $scope.levels['2'].increaments)
        {
            bucket_value3 = apportionment_value - bucket_value - bucket_value2;
        }
        else
        {
            bucket_value3 = 0;
        }
        
        $scope.buckets = 
        {
            1:{
                bucket: bucket_value,
                historic: bucket_value * ($scope.levels['1'].historic/100),
                emi: bucket_value * ($scope.levels['1'].emi/100),
            },
            2:{
                bucket: bucket_value2,
                historic: bucket_value2 * ($scope.levels['2'].historic/100),
                emi: bucket_value2 * ($scope.levels['2'].emi/100),
            },
            3:
            {
                bucket:bucket_value3,
                historic: bucket_value3 * ($scope.levels['3'].historic/100),
                emi: bucket_value3 * ($scope.levels['3'].emi/100)
            }
        };
        
        var historic_total = 0;
        var emi_total = 0;
        for(var bucket in $scope.buckets)
        {
            historic_total += $scope.buckets[bucket].historic;
            emi_total += $scope.buckets[bucket].emi;
        }
        
        $scope.buckets.correct = 
        {
            historic_total:historic_total,
            emi_total:emi_total
        };
        
        emi_calculator()
    }
    
    function emi_calculator()
    {
        var number_of_option_shares = 12500;
        var numberpersonshares = $scope.emi.numbershares;
        var gross_value = (numberpersonshares/number_of_option_shares) * $scope.buckets.correct.emi_total;
        var cost_of_options = $scope.emi.optionprice * numberpersonshares;
        var net_value = gross_value - cost_of_options;
        
        $scope.emiCalculator = 
        {
            number_of_option_shares: number_of_option_shares,
            numberpersonshares:numberpersonshares,
            gross_value:gross_value,
            cost_of_options:cost_of_options,
            net_value: net_value
        };
        
    }
});

myApp.controller('ccvctrl', function($scope,$cookies,$location,$log,$http,$timeout,$rootScope,$sce,$window,$route,ccv)
{
	ccv.getCcvDetail().then(function(data)
	{
		$log.info(data)
		$scope.ccv = data
	});
});

myApp.controller('info_controller', function($scope, $location, $log)
{


});

myApp.controller('ccvsignupctrl', function($scope,$cookies,$location,$log,$http,$timeout,$rootScope,$sce,$window,$route,employee,ccv,ess)
{

	$scope.ccv_signup = {}
	$scope.max_contribution = 0

	employee.getEmployeeDetail().then(function(data)
	{
		$scope.salary = data.annual_salary

		ess.showCcvEssSide().then(function(data)
		{
			ccv.getCcvDetail().then(function(data)
			{
				if(data.status == 200)
				{
					$scope.protected_rights = data.data.ccv_list[0].protected_rights
					if($scope.salary <= 43000)
					{
						$scope.max_contribution = 243;
					}
					else if($scope.salary > 43000 && $scope.salary <= 150000)
					{
						$scope.max_contribution = 124;
					}
					else if($scope.salary > 150000)
					{
						$scope.max_contribution = 110;
					}

					if($scope.protected_rights)
					{
						$scope.max_contribution = 243;	
					}
				}
			})
		});
	})

	$scope.contribution = function(value)
	{
		/*
		var contribution = parseFloat(value)
		if(contribution >= 0 && contribution <= $scope.max_contribution)
		{
			$scope.ccv_signup.contribution = parseFloat(value)
		}
		else
		{
			$scope.ccv_signup.contribution = $scope.max_contribution
		}
		*/
	}

	$scope.ccv_signup_submit = function(ccv_signup)
	{
		var contribution = ccv_signup.contribution
		var comment = ccv_signup.comment

		$rootScope.show_overlay = true;
		$rootScope.popup_confirm = true;
		$rootScope.confirmTitle = $sce.trustAsHtml("Confirm?");;
		$rootScope.confirmInfo = $sce.trustAsHtml("<p>You have stated contribution:"+ccv_signup.contribution+"?</p>");
		$rootScope.confirm_show = true;
		$rootScope.confirm_value = "OK";
		$rootScope.cancel_show = true;
		$rootScope.cancel_value = "CANCEL";

		$rootScope.confirm = function()
		{
			ccv.ccvSignup(contribution, comment).then(function(data)
			{
				$rootScope.cancel_value = "CLOSE";
				$rootScope.confirm_show = false;
				$rootScope.cancel_show = true;

				if(data.status == 200)
				{
					$rootScope.confirmTitle = $sce.trustAsHtml("Ccv successfully signed up");;
					$rootScope.confirmInfo = $sce.trustAsHtml("");
				}
				else if(data.status == 400)
				{
					$rootScope.confirmTitle = $sce.trustAsHtml("Ccv signup currently pending...");;
					$rootScope.confirmInfo = $sce.trustAsHtml("You have already signed up and it's currently pending.");
				}
				else
				{
					$rootScope.confirmTitle = $sce.trustAsHtml(errorTitleMessage);;
					$rootScope.confirmInfo = $sce.trustAsHtml(errorMessage);
				}

			})
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
	};


});

myApp.controller('ccvsignupinfoctrl', function($scope,$cookies,$location,$log,$http,$timeout,$rootScope,$sce,$window,$route,ccv)
{
	var ccv_signup_status = ['pending', 'accept', 'cancel', 'withdraw']
	ccv.getCcvSignupInfo(ccv_signup_status).then(function(data)
	{
		if(data.status == 200)
		{
			var dataObj = {pending:{},
						   accept:{},
						   cancel:{},
						   withdraw:{}}

			for(ccv_signup_list in data.data.ccv_signup_list)
			{
				var status = data.data.ccv_signup_list[ccv_signup_list].status

				if(dataObj[status])
				{
					dataObj[status][ccv_signup_list] = data.data.ccv_signup_list[ccv_signup_list]
				}
				else
				{
					dataObj[status] = {[ccv_signup_list]:data.data.ccv_signup_list[ccv_signup_list]}
				}

			}

			if(Object.keys(dataObj.pending).length)
			{
				$scope.pending = true;
			}
			else
			{
				$scope.pending = false;
			}

			data.data = dataObj
			$scope.ccv_signup = data
		}
		else
		{
			$scope.ccv_signup = data
		}
	})

	$scope.status_type = function(status)
	{
		return ccv.getCcvStatusType(status)
	};

	$scope.ccv_signup_withdraw = function(ccv_signup)
	{
		var hashed = ccv_signup.token
		var ccv_signup_key = ccv_signup.ccv_signup_key

		$rootScope.show_overlay = true;
		$rootScope.popup_confirm = true;
		$rootScope.confirmTitle = $sce.trustAsHtml("Confirm?");;
		$rootScope.confirmInfo = $sce.trustAsHtml("<p>Do you want to withdraw?</p>");
		$rootScope.confirm_show = true;
		$rootScope.confirm_value = "OK";
		$rootScope.cancel_show = true;
		$rootScope.cancel_value = "CANCEL";

		$rootScope.confirm = function()
		{
			ccv.ccvSignupWithdraw(ccv_signup_key, hashed).then(function(data)
			{
				$rootScope.cancel_value = "CLOSE";
				$rootScope.confirm_show = false;
				$rootScope.cancel_show = true;

				if(data.status == 200)
				{
					$rootScope.confirmTitle = $sce.trustAsHtml("Successfully withdrawn");;
					$rootScope.confirmInfo = $sce.trustAsHtml("<p>You have successfully withdrawn ccv signup process</p>");
				}
				else
				{
					$rootScope.confirmTitle = $sce.trustAsHtml(errorTitleMessage);;
					$rootScope.confirmInfo = $sce.trustAsHtml(errorMessage);
				}

			})
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
	};

});

myApp.controller('ccvsignuprequestctrl', function($scope,$cookies,$location,$log,$http,$timeout,$rootScope,$sce,$window,$route,ccv)
{
	var ccv_signup_status = ['pending']

	ccv.getCcvSignupInfoAdmin(ccv_signup_status).then(function(data)
	{
		$scope.ccv_signup_list = data
	})

	$scope.ccv_signup_confirm = function(list, status)
	{
		var statusMessage = ""
		if(status == 'accept')
		{
			statusMessage = "Approve";
		}
		else if(status == 'cancel')
		{
			statusMessage = "Reject";
		}

		var user_id = list.user_id;
		var employee = list.employee;
		var ccv_signup_key = list.ccv_signup_key;
		var hashed = list.token;
		
		$rootScope.show_overlay = true;
		$rootScope.popup_confirm = true;
		$rootScope.confirmTitle = $sce.trustAsHtml("Confirm?");;
		$rootScope.confirmInfo = $sce.trustAsHtml("<p>Do you want to <b>"+statusMessage+"</b> for <b>"+user_id+" - "+capitalizeFirstLetter(employee.firstname)+" "+capitalizeFirstLetter(employee.lastname)+"</b> cic signup?");
		$rootScope.confirm_show = true;
		$rootScope.confirm_value = "OK";
		$rootScope.cancel_show = true;
		$rootScope.cancel_value = "CANCEL";

		$rootScope.confirm = function()
		{
			ccv.ccvSignupApproval(ccv_signup_key, hashed, status).then(function(data)
			{
				if(data.status == 200)
				{
					var statusMessage = ""
					if(status == 'accept')
					{
						statusMessage = "approved";
					}
					else if(status == 'cancel')
					{
						statusMessage = "canceled";
					}
					$rootScope.confirmTitle = $sce.trustAsHtml("Successfully " + statusMessage);;
					$rootScope.confirmInfo = $sce.trustAsHtml("<p>You have successfully "+statusMessage+" for <b>"+user_id+" - "+capitalizeFirstLetter(employee.firstname)+" "+capitalizeFirstLetter(employee.lastname)+"</b> ccv signup");
					$rootScope.confirm_show = false;
					$rootScope.cancel_show = false;
					$rootScope.cancel_value = "CLOSE";
				}
				else
				{
					$rootScope.confirmTitle = $sce.trustAsHtml(errorTitleMessage);;
					$rootScope.confirmInfo = $sce.trustAsHtml(errorMessage);
					$rootScope.confirm_show = false;
					$rootScope.cancel_show = true;
					$rootScope.cancel_value = "CLOSE";
				}
			});
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
	};
})

myApp.controller('essctrl', function($scope,$cookies,$location,$log,$http,$timeout,$rootScope,$sce,$window,$route,ess,user)
{
	$scope.titles = ess.getTitle()

	$scope.ess_signup = {}

	user.getUserDetail().then(function(data)
	{
		$scope.ess_signup.email = data.email
	})

	ess.getEssDetail().then(function(data)
	{
		if(data.status == 200)
		{
			$scope.ess_signup.ni_no = data.data.ess_list[0].ni_no
			$scope.ess_signup.title = data.data.ess_list[0].title
			$scope.ess_signup.firstname = data.data.ess_list[0].firstname
			$scope.ess_signup.lastname = data.data.ess_list[0].lastname
			$scope.ess_signup.contact_no = data.data.ess_list[0].contact_no
			$scope.ess_signup.address = data.data.ess_list[0].address
			$scope.ess_signup.city = data.data.ess_list[0].city
			$scope.ess_signup.county = data.data.ess_list[0].county
			$scope.ess_signup.postcode = data.data.ess_list[0].postcode
			$scope.ess_signup.bank_name = data.data.ess_list[0].bank_name
			$scope.ess_signup.bank_holder_name = data.data.ess_list[0].bank_holder_name
			$scope.ess_signup.account_no = data.data.ess_list[0].account_no
			$scope.ess_signup.sort_code = data.data.ess_list[0].sort_code
		}
		$scope.ess = data;
	})

	$scope.ess_amend = function(ess_signup)
	{
		$log.info(ess_signup)
		var ni_no = $scope.ess_signup.ni_no
		var title = $scope.ess_signup.title
		var firstname = $scope.ess_signup.firstname
		var lastname = $scope.ess_signup.lastname
		var email = $scope.ess_signup.email
		var contact_no = $scope.ess_signup.contact_no
		var address = $scope.ess_signup.address
		var city = $scope.ess_signup.city
		var county = $scope.ess_signup.county
		var postcode = $scope.ess_signup.postcode
		var bank_name = $scope.ess_signup.bank_name
		var bank_holder_name = $scope.ess_signup.bank_holder_name
		var account_no = $scope.ess_signup.account_no
		var sort_code = $scope.ess_signup.sort_code  

		$rootScope.show_overlay = true;
		$rootScope.popup_confirm = true;
		$rootScope.confirmTitle = $sce.trustAsHtml("Confirm?");;
		$rootScope.confirmInfo = $sce.trustAsHtml("<p>Are you sure you want to amend your employee self service detail?</p>");
		$rootScope.confirm_show = true;
		$rootScope.confirm_value = "OK";
		$rootScope.cancel_show = true;
		$rootScope.cancel_value = "CANCEL";

		$rootScope.confirm = function()
		{
			ess.essAmend(ni_no, title, firstname, lastname, email, contact_no, address, city, county, postcode, bank_name, bank_holder_name, account_no, sort_code).then(function(data)
			{
				$rootScope.cancel_value = "CLOSE";
				$rootScope.confirm_show = false;
				$rootScope.cancel_show = true;

				if(data.status == 200)
				{
					$rootScope.confirmTitle = $sce.trustAsHtml("Employee self service successfully amended");;
					$rootScope.confirmInfo = $sce.trustAsHtml("Your employee self service is upto date");
				}
				else if(data.status == 400)
				{
					$rootScope.confirmTitle = $sce.trustAsHtml("Ccv signup currently pending...");;
					$rootScope.confirmInfo = $sce.trustAsHtml("You have already signed up and it's currently pending.");
				}
				else
				{
					$rootScope.confirmTitle = $sce.trustAsHtml(errorTitleMessage);;
					$rootScope.confirmInfo = $sce.trustAsHtml(errorMessage);
				}

			})
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
	};	
});

myApp.controller('essupdatedctrl', function($scope,$cookies,$location,$log,$http,$timeout,$rootScope,$sce,$window,$route,ess)
{
	ess.getEssUpdatedDetail().then(function(data)
	{
		$scope.ess_updated = data
	})
});

myApp.controller('wagecheckctrl', function($scope,$cookies,$location,$log,$http,$timeout,$rootScope,$sce,$window,$route,wageCheck)
{
	wageCheck.getWageCheckList(1).then(function(data)
	{
		$scope.wage_check_list = data
	})
});

myApp.controller('carctrl', function($scope,$cookies,$location,$log,$http,$timeout,$rootScope,$sce,$window,$route,car)
{
	car.getCarDetail().then(function(data)
	{
		$scope.car = data
	})
	$scope.status_type = function(status)
	{
		return car.getCarStatusType(status)
	}
})

myApp.controller('carsignupinfoctrl', function($scope,$cookies,$location,$log,$http,$timeout,$rootScope,$sce,$window,$route,car)
{
	var car_signup_status = ['pending', 'accept', 'cancel']
	car.getCarSignupInfo(car_signup_status).then(function(data)
	{
		if(data.status == 200)
		{
			var dataObj = {pending:{},
						   accept:{},
						   cancel:{},
						   withdraw:{}}

			for(car_signup_list in data.data.car_signup_list)
			{
				var status = data.data.car_signup_list[car_signup_list].status

				if(dataObj[status])
				{
					dataObj[status][car_signup_list] = data.data.car_signup_list[car_signup_list]
				}
				else
				{
					dataObj[status] = {[car_signup_list]:data.data.car_signup_list[car_signup_list]}
				}

			}

			if(Object.keys(dataObj.pending).length)
			{
				$scope.pending = true;
			}
			else
			{
				$scope.pending = false;
			}

			data.data = dataObj
			$scope.car_signup = data
		}
		else
		{
			$scope.car_signup = data
		}
	})

	$scope.status_type = function(status)
	{
		return car.getCarStatusType(status)
	}
	


})

myApp.controller('carsignuprequestctrl', function($scope,$cookies,$location,$log,$http,$timeout,$rootScope,$sce,$window,$route,car)
{

	car_signup_status = ['pending']

	car.getCarSignupInfoAdmin(car_signup_status).then(function(data)
	{
		$scope.car_signup_list = data
	})

	$scope.car_signup_confirm = function(list, status)
	{
		var statusMessage = ""
		if(status == 'accept')
		{
			statusMessage = "Approve";
		}
		else if(status == 'cancel')
		{
			statusMessage = "Reject";
		}
		var user_id = list.user_id;
		var employee = list.employee;
		var car_signup_key = list.car_signup_key;
		var hashed = list.token;
		
		$rootScope.show_overlay = true;
		$rootScope.popup_confirm = true;
		$rootScope.confirmTitle = $sce.trustAsHtml("Confirm?");;
		$rootScope.confirmInfo = $sce.trustAsHtml("<p>Do you want to <b>"+statusMessage+"</b> for <b>"+user_id+" - "+capitalizeFirstLetter(employee.firstname)+" "+capitalizeFirstLetter(employee.lastname)+"</b> pmi signup?");
		$rootScope.confirm_show = true;
		$rootScope.confirm_value = "OK";
		$rootScope.cancel_show = true;
		$rootScope.cancel_value = "CANCEL";

		$rootScope.confirm = function()
		{
			car.carSignupApproval(car_signup_key, hashed, status).then(function(data)
			{
				if(data.status == 200)
				{
					var statusMessage = ""
					if(status == 'accept')
					{
						statusMessage = "approved";
					}
					else if(status == 'cancel')
					{
						statusMessage = "canceled";
					}
					$rootScope.confirmTitle = $sce.trustAsHtml("Successfully " + statusMessage);;
					$rootScope.confirmInfo = $sce.trustAsHtml("<p>You have successfully "+statusMessage+" for <b>"+user_id+" - "+capitalizeFirstLetter(employee.firstname)+" "+capitalizeFirstLetter(employee.lastname)+"</b> car scheme signup");
					$rootScope.confirm_show = false;
					$rootScope.cancel_show = false;
					$rootScope.cancel_value = "CLOSE";
				}
				else
				{
					$rootScope.confirmTitle = $sce.trustAsHtml(errorTitleMessage);;
					$rootScope.confirmInfo = $sce.trustAsHtml(errorMessage);
					$rootScope.confirm_show = false;
					$rootScope.cancel_show = true;
					$rootScope.cancel_value = "CLOSE";
				}
			});
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


	}	

})

myApp.controller('ctwctrl', function($scope,$cookies,$location,$log,$http,$timeout,$rootScope,$sce,$window,$route,ctw)
{
	ctw.getCtwDetail().then(function(data){
		$scope.ctw = data
	})
	$scope.status_type = function(status)
	{
		return ctw.getCtwStatusType(status)
	}
})

myApp.controller('ctwsignupinfoctrl', function($scope,$cookies,$location,$log,$http,$timeout,$rootScope,$sce,$window,$route,ctw)
{
	var ctw_signup_status = ['pending', 'accept', 'cancel']
	ctw.getCtwSignupInfo(ctw_signup_status).then(function(data)
	{
		if(data.status == 200)
		{
			var dataObj = {pending:{},
						   accept:{},
						   cancel:{},
						   withdraw:{}}

			for(ctw_signup_list in data.data.ctw_signup_list)
			{
				var status = data.data.ctw_signup_list[ctw_signup_list].status

				if(dataObj[status])
				{
					dataObj[status][ctw_signup_list] = data.data.ctw_signup_list[ctw_signup_list]
				}
				else
				{
					dataObj[status] = {[ctw_signup_list]:data.data.ctw_signup_list[ctw_signup_list]}
				}

			}

			if(Object.keys(dataObj.pending).length)
			{
				$scope.pending = true;
			}
			else
			{
				$scope.pending = false;
			}

			data.data = dataObj
			$scope.ctw_signup = data
		}
		else
		{
			$scope.ctw_signup = data
		}
	})

	$scope.status_type = function(status)
	{
		return ctw.getCtwStatusType(status)
	}
})

myApp.controller('ctwsignuprequestctrl', function($scope,$cookies,$location,$log,$http,$timeout,$rootScope,$sce,$window,$route,ctw)
{

	ctw_signup_status = ['pending']

	ctw.getCtwSignupInfoAdmin(ctw_signup_status).then(function(data)
	{
		$scope.ctw_signup_list = data
	})

	$scope.ctw_signup_confirm = function(list, status)
	{
		var statusMessage = ""
		if(status == 'accept')
		{
			statusMessage = "Approve";
		}
		else if(status == 'cancel')
		{
			statusMessage = "Reject";
		}
		var user_id = list.user_id;
		var employee = list.employee;
		var ctw_signup_key = list.ctw_signup_key;
		var hashed = list.token;
		
		$rootScope.show_overlay = true;
		$rootScope.popup_confirm = true;
		$rootScope.confirmTitle = $sce.trustAsHtml("Confirm?");;
		$rootScope.confirmInfo = $sce.trustAsHtml("<p>Do you want to <b>"+statusMessage+"</b> for <b>"+user_id+" - "+capitalizeFirstLetter(employee.firstname)+" "+capitalizeFirstLetter(employee.lastname)+"</b> pmi signup?");
		$rootScope.confirm_show = true;
		$rootScope.confirm_value = "OK";
		$rootScope.cancel_show = true;
		$rootScope.cancel_value = "CANCEL";

		$rootScope.confirm = function()
		{
			ctw.ctwSignupApproval(ctw_signup_key, hashed, status).then(function(data)
			{
				if(data.status == 200)
				{
					var statusMessage = ""
					if(status == 'accept')
					{
						statusMessage = "approved";
					}
					else if(status == 'cancel')
					{
						statusMessage = "canceled";
					}
					$rootScope.confirmTitle = $sce.trustAsHtml("Successfully " + statusMessage);;
					$rootScope.confirmInfo = $sce.trustAsHtml("<p>You have successfully "+statusMessage+" for <b>"+user_id+" - "+capitalizeFirstLetter(employee.firstname)+" "+capitalizeFirstLetter(employee.lastname)+"</b> ctw scheme signup");
					$rootScope.confirm_show = false;
					$rootScope.cancel_show = false;
					$rootScope.cancel_value = "CLOSE";
				}
				else
				{
					$rootScope.confirmTitle = $sce.trustAsHtml(errorTitleMessage);;
					$rootScope.confirmInfo = $sce.trustAsHtml(errorMessage);
					$rootScope.confirm_show = false;
					$rootScope.cancel_show = true;
					$rootScope.cancel_value = "CLOSE";
				}
			});
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


	}	

})

myApp.controller('whitegoodctrl', function($scope,$cookies,$location,$log,$http,$timeout,$rootScope,$sce,$window,$route,whitegood)
{
	whitegood.getWhitegoodDetail().then(function(data)
	{
		$log.info(data)
		$scope.whitegood = data
	})
	$scope.status_type = function(status)
	{
		return whitegood.getWhitegoodStatusType(status)
	}
})

myApp.controller('whitegoodsignupinfoctrl', function($scope,$cookies,$location,$log,$http,$timeout,$rootScope,$sce,$window,$route,whitegood)
{
	var whitegood_signup_status = ['pending', 'accept', 'cancel']
	whitegood.getWhitegoodSignupInfo(whitegood_signup_status).then(function(data)
	{
		if(data.status == 200)
		{
			var dataObj = {pending:{},
						   accept:{},
						   cancel:{},
						   withdraw:{}}

			for(whitegood_signup_list in data.data.whitegood_signup_list)
			{
				var status = data.data.whitegood_signup_list[whitegood_signup_list].status

				if(dataObj[status])
				{
					dataObj[status][whitegood_signup_list] = data.data.whitegood_signup_list[whitegood_signup_list]
				}
				else
				{
					dataObj[status] = {[whitegood_signup_list]:data.data.whitegood_signup_list[whitegood_signup_list]}
				}

			}

			if(Object.keys(dataObj.pending).length)
			{
				$scope.pending = true;
			}
			else
			{
				$scope.pending = false;
			}

			data.data = dataObj
			$scope.whitegood_signup = data
		}
		else
		{
			$scope.whitegood_signup = data
		}
	})

	$scope.status_type = function(status)
	{
		return whitegood.getWhitegoodStatusType(status)
	}
})

myApp.controller('whitegoodsignuprequestctrl', function($scope,$cookies,$location,$log,$http,$timeout,$rootScope,$sce,$window,$route,whitegood)
{

	whitegood_signup_status = ['pending']

	whitegood.getWhitegoodSignupInfoAdmin(whitegood_signup_status).then(function(data)
	{
		$log.info(data)
		$scope.whitegood_signup_list = data
	})

	$scope.whitegood_signup_confirm = function(list, status)
	{
		var statusMessage = ""
		if(status == 'accept')
		{
			statusMessage = "Approve";
		}
		else if(status == 'cancel')
		{
			statusMessage = "Reject";
		}
		var user_id = list.user_id;
		var employee = list.employee;
		var whitegood_signup_key = list.whitegood_signup_key;
		var hashed = list.token;
		
		$rootScope.show_overlay = true;
		$rootScope.popup_confirm = true;
		$rootScope.confirmTitle = $sce.trustAsHtml("Confirm?");;
		$rootScope.confirmInfo = $sce.trustAsHtml("<p>Do you want to <b>"+statusMessage+"</b> for <b>"+user_id+" - "+capitalizeFirstLetter(employee.firstname)+" "+capitalizeFirstLetter(employee.lastname)+"</b> white good signup?");
		$rootScope.confirm_show = true;
		$rootScope.confirm_value = "OK";
		$rootScope.cancel_show = true;
		$rootScope.cancel_value = "CANCEL";

		$rootScope.confirm = function()
		{
			whitegood.whitegoodSignupApproval(whitegood_signup_key, hashed, status).then(function(data)
			{
				if(data.status == 200)
				{
					var statusMessage = ""
					if(status == 'accept')
					{
						statusMessage = "approved";
					}
					else if(status == 'cancel')
					{
						statusMessage = "canceled";
					}
					$rootScope.confirmTitle = $sce.trustAsHtml("Successfully " + statusMessage);;
					$rootScope.confirmInfo = $sce.trustAsHtml("<p>You have successfully "+statusMessage+" for <b>"+user_id+" - "+capitalizeFirstLetter(employee.firstname)+" "+capitalizeFirstLetter(employee.lastname)+"</b> white good signup scheme signup");
					$rootScope.confirm_show = false;
					$rootScope.cancel_show = false;
					$rootScope.cancel_value = "CLOSE";
				}
				else
				{
					$rootScope.confirmTitle = $sce.trustAsHtml(errorTitleMessage);;
					$rootScope.confirmInfo = $sce.trustAsHtml(errorMessage);
					$rootScope.confirm_show = false;
					$rootScope.cancel_show = true;
					$rootScope.cancel_value = "CLOSE";
				}
			});
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


	}	

})

myApp.controller('404ctrl', function($scope,$cookies,$location,$log,$http,$timeout,$rootScope,$sce,$window, $route)
{
	
    
});

myApp.controller('xmlctrl', function($scope,$cookies,$location,$log,$http,$timeout,$rootScope,$sce,$window, $route)
{
	$http.get("./xml/note.xml",{ transformResponse: function (cnv) 
	{
		var x2js = new X2JS();
		var aftCnv = x2js.xml_str2json(cnv);
		return aftCnv;
	}}).success(function (response) 
	{
		$scope.json = response
	});
	
});


