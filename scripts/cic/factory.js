myApp.factory('cic', function($log, $http, authorization)
{
    var obj = {};

    obj.getCicDetail = function()
    {
        return $http({method: 'GET', 
			  url: api_link+'cic/get',
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

	obj.cicSignup = function(window_salary, multiple, gross_cost)
	{
		return $http({method: 'POST', 
			  url: api_link+'cic/signup',
			  params:{token:authorization.getToken(),
				  	  window_salary:window_salary,
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

	obj.getCicRates= function()
    {
        return $http({method: 'GET', 
			  url:'./json/cic/rates.json',
			  params: {}}).then(
		function successCallback(response) 
		{	
			return response.data
		}, 
		function errorCallback(response) 
		{
			$log.info(response)
			return response
		});
    }

	obj.getCicSignupInfo = function(cic_signup_status)
	{
		return $http({method: 'GET', 
			  url: api_link+'cic/signup/list',
			  params: {token:authorization.getToken(),
				  	   cic_signup_status:cic_signup_status}}).then(
		function successCallback(response) 
		{	
			$log.info(response)
			return response
		}, 
		function errorCallback(response) 
		{
			$log.info(response)
			return response
		});
	}

	obj.getCicSignupInfoAdmin = function(cic_signup_status)
	{
		return $http({method: 'GET', 
			  url: api_link+'cic/signup/list/auth',
			  params: {token:authorization.getToken(),
				  	   user_status:1,
					   cic_signup_status:cic_signup_status}}).then(
		function successCallback(response) 
		{	
			return response
		}, 
		function errorCallback(response) 
		{
			return response
		});
	}

	obj.cicSignupApproval = function(cic_signup_key, hashed, status)
	{
		return $http({method: 'POST', 
			  url: api_link+'cic/signup/approval',
			  params: {token:authorization.getToken(),
				       cic_signup_key:cic_signup_key,
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

	obj.getCicStatusType = function(status_type)
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


	obj.cicSignupWithdraw = function(cic_signup_key, hashed)
	{
		return $http({method: 'POST', 
			 		  url: api_link+'cic/signup/withdraw',
					  params:{token:authorization.getToken(),
						      cic_signup_key:cic_signup_key,
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