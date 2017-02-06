myApp.factory('ccv', function($log, $http, authorization)
{
    var obj = {};

    obj.getCcvDetail = function()
    {
        return $http({method: 'GET', 
			  url: api_link+'ccv/get',
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

	obj.ccvSignup = function(contribution, comment)
	{
		return $http({method: 'POST', 
			  url: api_link+'ccv/signup',
			  params:{token:authorization.getToken(),
				  	  contribution:contribution,
					  comment:comment}}).then(
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

	obj.getCcvSignupInfo = function(ccv_signup_status)
	{
		return $http({method: 'GET', 
			  url: api_link+'ccv/signup/list',
			  params: {token:authorization.getToken(),
				  	   ccv_signup_status:ccv_signup_status}}).then(
		function successCallback(response) 
		{	
			return response
		}, 
		function errorCallback(response) 
		{
			return response
		});
	}

	obj.getCcvSignupInfoAdmin = function(ccv_signup_status)
	{
		return $http({method: 'GET', 
			  url: api_link+'ccv/signup/list/auth',
			  params: {token:authorization.getToken(),
				  	   user_status:1,
					   ccv_signup_status:ccv_signup_status}}).then(
		function successCallback(response) 
		{	
			return response
		}, 
		function errorCallback(response) 
		{
			return response
		});
	}

	obj.ccvSignupWithdraw = function(ccv_signup_key, hashed)
	{
		return $http({method: 'POST', 
			 		  url: api_link+'ccv/signup/withdraw',
					  params:{token:authorization.getToken(),
						      ccv_signup_key:ccv_signup_key,
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

    obj.getCcvStatusType = function(status_type)
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
			return 'Withdrawn'
		}
		else
		{
			return 'Pending'
		}
	}

	obj.ccvSignupApproval = function(ccv_signup_key, hashed, status)
    {
		return $http({method: 'POST', 
			  url: api_link+'ccv/signup/approval',
			  params: {token:authorization.getToken(),
				       ccv_signup_key:ccv_signup_key,
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

    return obj
});