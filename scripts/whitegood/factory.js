myApp.factory('whitegood', function($log, $http, authorization)
{
    var obj = {};

    obj.getWhitegoodDetail= function()
    {
        return $http({method: 'GET', 
			   url: api_link+'whitegood/get',
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

    obj.getWhitegoodSignupInfo = function()
    {
        return $http({method: 'GET', 
			   url: api_link+'whitegood/signup/list',
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

    obj.getWhitegoodSignupInfoAdmin = function(whitegood_signup_status)
    {
        return $http({method: 'GET', 
			   url: api_link+'whitegood/signup/list/auth',
			   params: {token:authorization.getToken(),
                        user_status:1,
						whitegood_signup_status:whitegood_signup_status}}).then(
		function successCallback(response) 
		{	
			return response
		}, 
		function errorCallback(response) 
		{
			return response
		});
    }

    obj.getWhitegoodStatusType = function(status_type)
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
		else if(status_type == 'expired')
		{
			return 'Expired'
		}
		else
		{
			return 'Pending'
		}
	}

	obj.whitegoodSignupApproval = function(whitegood_signup_key, hashed, status)
    {
		return $http({method: 'POST', 
			  url: api_link+'whitegood/signup/approval',
			  params: {token:authorization.getToken(),
				       whitegood_signup_key:whitegood_signup_key,
					   hashed:hashed,
					   status:status}}).then(
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

    return obj
});