myApp.factory('dental', function($log, $http, authorization)
{
    var obj = {};

    obj.getDentalDetail = function()
    {
        return $http({method: 'GET', 
			  url: api_link+'dental/get',
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

	obj.dentalSignup = function(who, cover_level, gross_cost)
	{
		return $http({method: 'POST', 
			  url: api_link+'dental/signup',
			  params:{token:authorization.getToken(),
				  	  who:who,
				  	  cover_level:cover_level,
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

	obj.getDentalRates= function()
    {
        return $http({method: 'GET', 
			  url:'./json/dental/rates.json',
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

	obj.getDentalSignupInfo = function(dental_signup_status)
	{
		return $http({method: 'GET', 
			  url: api_link+'dental/signup/list',
			  params: {token:authorization.getToken(),
				  	   dental_signup_status:dental_signup_status}}).then(
		function successCallback(response) 
		{	
			return response
		}, 
		function errorCallback(response) 
		{
			return response
		});
	}

	obj.getDentalSignupInfoAdmin = function(dental_signup_status)
	{
		return $http({method: 'GET', 
			  url: api_link+'dental/signup/list/auth',
			  params: {token:authorization.getToken(),
				  	   user_status:1,
					   dental_signup_status:dental_signup_status}}).then(
		function successCallback(response) 
		{	
			return response
		}, 
		function errorCallback(response) 
		{
			return response
		});
	}

	obj.dentalSignupApproval = function(dental_signup_key, hashed, status)
	{
		return $http({method: 'POST', 
			  url: api_link+'dental/signup/approval',
			  params: {token:authorization.getToken(),
				       dental_signup_key:dental_signup_key,
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

	obj.getDentalWhoType = function(who_type)
	{
        if(who_type == 'SELF')
		{
			return 'You';
		}
		else if(who_type == 'SELF_AND_CHILDREN')
		{
			return 'You & Children';
		}
		else if(who_type == 'SELF_AND_PARTNER')
		{
			return 'You and your partner';
		}
		else if(who_type == 'FAMILY')
		{
			return 'You and you family';
		}
		else
		{
			return 'You'
		}
	}

	obj.getDentalStatusType = function(status_type)
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


	obj.dentalSignupWithdraw = function(dental_signup_key, hashed)
	{
		return $http({method: 'POST', 
			 		  url: api_link+'dental/signup/withdraw',
					  params:{token:authorization.getToken(),
						      dental_signup_key:dental_signup_key,
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