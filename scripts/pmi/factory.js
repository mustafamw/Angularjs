myApp.factory('pmi', function($log, $http, authorization)
{
    var obj = {};

    obj.getPmiDetail = function()
    {
        return $http({method: 'GET', 
			  url: api_link+'pmi/get',
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


	obj.getPmiRates= function()
    {
        return $http({method: 'GET', 
			  url:'./json/pmi/rates.json',
			  params: {}}).then(
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

	obj.pmiSignup = function(who, gross_cost, excess)
	{
		return $http({method: 'POST', 
			  url: api_link+'pmi/signup',
			  params:{token:authorization.getToken(),
				  	  who:who,
					  gross_cost:gross_cost,
					  excess:excess}}).then(
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


	obj.getPmiSignupInfo = function(pmi_signup_status)
	{
		return $http({method: 'GET', 
			  url: api_link+'pmi/signup/list',
			  params:{token:authorization.getToken(),
				      pmi_signup_status:pmi_signup_status}}).then(
		function successCallback(response) 
		{	
			return response
		}, 
		function errorCallback(response) 
		{
			return response
		});
	}

	obj.pmiSignupWithdraw = function(pmi_signup_key, hashed)
	{
		return $http({method: 'POST', 
			 		  url: api_link+'pmi/signup/withdraw',
					  params:{token:authorization.getToken(),
						      pmi_signup_key:pmi_signup_key,
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

	obj.getPmiStatusType = function(status_type)
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

	obj.getPmiEnumType = function(enum_type)
	{
		if(enum_type == 'NONE')
		{
			return 'none';
		}
		else if(enum_type == 'SELF')
		{
			return 'single';
		}
		else if(enum_type == 'SELF_AND_PARTNER')
		{
			return 'couple'
		}
		else if(enum_type == 'SELF_AND_CHILDREN')
		{
			return 'parent'
		}
		else if(enum_type == 'FAMILY')
		{
			return 'family'
		}
		else
		{
			return 'family'
		}
	}


	obj.getPmiSignupInfoAdmin = function(pmi_signup_status)
	{
		return $http({method: 'GET', 
			  url: api_link+'pmi/signup/list/auth',
			  params: {token:authorization.getToken(),
				  	   user_status:1,
					   pmi_signup_status:pmi_signup_status}}).then(
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


	obj.pmiSignupApproval = function(pmi_signup_key, hashed, status)
	{
		return $http({method: 'POST', 
			  url: api_link+'pmi/signup/approval',
			  params: {token:authorization.getToken(),
				       pmi_signup_key:pmi_signup_key,
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