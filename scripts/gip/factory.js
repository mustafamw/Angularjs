myApp.factory('gip', function($log, $http, authorization)
{
    var obj = {};

    obj.getGipDetail = function()
    {
        return $http({method: 'GET', 
			  url: api_link+'gip/get',
			  params: {token:authorization.getToken()}}).then(
		function successCallback(response) 
		{	
			return response
		}, 
		function errorCallback(response) 
		{
			return response
		});

    }

	obj.gipSignup = function(percentage, gross_cost, payment_term)
	{
		return $http({method: 'POST', 
			  url: api_link+'gip/signup',
			  params:{token:authorization.getToken(),
				  	  percentage:percentage,
					  gross_cost:gross_cost,
					  payment_term:payment_term}}).then(
		function successCallback(response) 
		{	
			return response
		}, 
		function errorCallback(response) 
		{
			$log.info(response)
			return response
		});
	}

	obj.getGipRate= function()
    {
        return $http({method: 'GET', 
			  url:'./json/gip/rates.json',
			  params: {}}).then(
		function successCallback(response) 
		{	
			return response.data
		}, 
		function errorCallback(response) 
		{
			return response
		});
    }

	obj.getGipSignupInfo = function(gip_signup_status)
	{
		return $http({method: 'GET', 
			  url: api_link+'gip/signup/list',
			  params: {token:authorization.getToken(),
				  	   gip_signup_status:gip_signup_status}}).then(
		function successCallback(response) 
		{	
			return response
		}, 
		function errorCallback(response) 
		{
			return response
		});
	}

	obj.getGipSignupInfoAdmin = function(gip_signup_status)
	{
		return $http({method: 'GET', 
			  url: api_link+'gip/signup/list/auth',
			  params: {token:authorization.getToken(),
				  	   user_status:1,
					   gip_signup_status:gip_signup_status}}).then(
		function successCallback(response) 
		{	
			return response
		}, 
		function errorCallback(response) 
		{
			return response
		});
	}

	obj.gipSignupApproval = function(gip_signup_key, hashed, status)
	{
		return $http({method: 'POST', 
			  url: api_link+'gip/signup/approval',
			  params: {token:authorization.getToken(),
				       gip_signup_key:gip_signup_key,
					   hashed:hashed,
					   status:status}}).then(
		function successCallback(response) 
		{	
			return response
		}, 
		function errorCallback(response) 
		{
			return response
		});
	}

	obj.getGipStatusType = function(status_type)
	{
		if(status_type == 'accept')
		{
			return 'Approved';
		}
		else if(status_type == 'cancel')
		{
			return 'Canceled';
		}
		else if(status_type == 'pending')
		{
			return 'Pending'
		}
		else if(status_type == 'withdraw')
		{
			return 'Withdraw'
		}
		else
		{
			return 'Pending'
		}
	}


	obj.gipSignupWithdraw = function(gip_signup_key, hashed)
	{
		return $http({method: 'POST', 
			 		  url: api_link+'gip/signup/withdraw',
					  params:{token:authorization.getToken(),
						      gip_signup_key:gip_signup_key,
							  hashed:hashed}}).then(
		function successCallback(response) 
		{	
			return response
		}, 
		function errorCallback(response) 
		{
			return response
		});
	}

    return obj
});