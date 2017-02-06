myApp.factory('car', function($log, $http, authorization)
{
    var obj = {};

    obj.getCarDetail= function()
    {
        return $http({method: 'GET', 
			   url: api_link+'car/get',
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

    obj.getCarSignupInfo = function()
    {
        return $http({method: 'GET', 
			   url: api_link+'car/signup/list',
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

    obj.getCarSignupInfoAdmin = function(car_signup_status)
    {
        return $http({method: 'GET', 
			   url: api_link+'car/signup/list/auth',
			   params: {token:authorization.getToken(),
                        user_status:1,
						car_signup_status:car_signup_status}}).then(
		function successCallback(response) 
		{	
			return response
		}, 
		function errorCallback(response) 
		{
			return response
		});
    }

    obj.getCarStatusType = function(status_type)
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

	obj.carSignupApproval = function(car_signup_key, hashed, status)
    {
		return $http({method: 'POST', 
			  url: api_link+'car/signup/approval',
			  params: {token:authorization.getToken(),
				       car_signup_key:car_signup_key,
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