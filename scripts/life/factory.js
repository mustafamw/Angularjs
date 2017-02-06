myApp.factory('life', function($log, $http, authorization)
{
    var obj = {};

    obj.getLifeDetail = function()
    {
        return $http({method: 'GET', 
			  url: api_link+'life/get',
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

	obj.lifeSignup = function(multiple, gross_cost)
	{
		return $http({method: 'POST', 
			  url: api_link+'life/signup',
			  params:{token:authorization.getToken(),
				  	  multiple:multiple,
					  gross_cost:gross_cost}}).then(
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

	obj.getLifeRates= function()
    {
        return $http({method: 'GET', 
			  url:'./json/life/rates.json',
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

	obj.getLifeSignupInfo = function(life_signup_status)
	{
		return $http({method: 'GET', 
			  url: api_link+'life/signup/list',
			  params: {token:authorization.getToken(),
				  	   life_signup_status:life_signup_status}}).then(
		function successCallback(response) 
		{	
			return response
		}, 
		function errorCallback(response) 
		{
			return response
		});
	}

	obj.getLifeSignupInfoAdmin = function(life_signup_status)
	{
		return $http({method: 'GET', 
			  url: api_link+'life/signup/list/auth',
			  params: {token:authorization.getToken(),
				  	   user_status:1,
					   life_signup_status:life_signup_status}}).then(
		function successCallback(response) 
		{	
			return response
		}, 
		function errorCallback(response) 
		{
			return response
		});
	}

	obj.lifeSignupApproval = function(life_signup_key, hashed, status)
	{
		return $http({method: 'POST', 
			  url: api_link+'life/signup/approval',
			  params: {token:authorization.getToken(),
				       life_signup_key:life_signup_key,
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

	obj.getlifeStatusType = function(status_type)
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


	obj.lifeSignupWithdraw = function(life_signup_key, hashed)
	{
		return $http({method: 'POST', 
			 		  url: api_link+'life/signup/withdraw',
					  params:{token:authorization.getToken(),
						      life_signup_key:life_signup_key,
							  hashed:hashed}}).then(
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