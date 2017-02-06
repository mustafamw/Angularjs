myApp.factory('cashplan', function($log, $http, authorization)
{
    var obj = {};

    obj.getCashplanDetail = function()
    {
        return $http({method: 'GET', 
			  url: api_link+'cashplan/get',
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

	obj.cashplanSignup = function(who, cover_level, gross_cost)
	{
		return $http({method: 'POST', 
			  url: api_link+'cashplan/signup',
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
			return response
		});
	}

	obj.getCashplanRates= function()
    {
        return $http({method: 'GET', 
			  url:'./json/cashplan/rates.json',
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

	obj.getCashplanSignupInfo = function(cashplan_signup_status)
	{
		return $http({method: 'GET', 
			  url: api_link+'cashplan/signup/list',
			  params: {token:authorization.getToken(),
				  	   cashplan_signup_status:cashplan_signup_status}}).then(
		function successCallback(response) 
		{	
			return response
		}, 
		function errorCallback(response) 
		{
			return response
		});
	}

	obj.getCashplanSignupInfoAdmin = function(cashplan_signup_status)
	{
		return $http({method: 'GET', 
			  url: api_link+'cashplan/signup/list/auth',
			  params: {token:authorization.getToken(),
				  	   user_status:1,
					   cashplan_signup_status:cashplan_signup_status}}).then(
		function successCallback(response) 
		{	
			return response
		}, 
		function errorCallback(response) 
		{
			return response
		});
	}

	obj.cashplanSignupApproval = function(cashplan_signup_key, hashed, status)
	{
		return $http({method: 'POST', 
			  url: api_link+'cashplan/signup/approval',
			  params: {token:authorization.getToken(),
				       cashplan_signup_key:cashplan_signup_key,
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

	obj.getCashplanWhoType = function(who_type)
	{
		if(who_type == 'SELF_AND_CHILDREN')
		{
			return 'You & Children';
		}
		else if(who_type == 'SELF_AND_PARTNER')
		{
			return 'You and your partner';
		}
		else
		{
			return 'You & Children'
		}
	}

	obj.getCashplanStatusType = function(status_type)
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


	obj.cashplanSignupWithdraw = function(cashplan_signup_key, hashed)
	{
		return $http({method: 'POST', 
			 		  url: api_link+'cashplan/signup/withdraw',
					  params:{token:authorization.getToken(),
						      cashplan_signup_key:cashplan_signup_key,
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