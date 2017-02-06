myApp.factory('ctw', function($log, $http, authorization)
{
    var obj = {};

    obj.getCtwDetail= function()
    {
        return $http({method: 'GET', 
			   url: api_link+'ctw/get',
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

    obj.getCtwSignupInfo = function()
    {
        return $http({method: 'GET', 
			   url: api_link+'ctw/signup/list',
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

    obj.getCtwSignupInfoAdmin = function(ctw_signup_status)
    {
        return $http({method: 'GET', 
			   url: api_link+'ctw/signup/list/auth',
			   params: {token:authorization.getToken(),
                        user_status:1,
						ctw_signup_status:ctw_signup_status}}).then(
		function successCallback(response) 
		{	
			return response
		}, 
		function errorCallback(response) 
		{
			return response
		});
    }

    obj.getCtwStatusType = function(status_type)
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

	obj.ctwSignupApproval = function(ctw_signup_key, hashed, status)
    {
		return $http({method: 'POST', 
			  url: api_link+'ctw/signup/approval',
			  params: {token:authorization.getToken(),
				       ctw_signup_key:ctw_signup_key,
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