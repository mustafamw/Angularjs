myApp.factory('ess', function($rootScope, $log, $http, authorization)
{
    var obj = {};

    obj.getEssDetail = function()
    {
        return $http({method: 'GET', 
			  url: api_link+'ess/get',
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

    obj.getEssUpdatedDetail = function()
    {
        return $http({method: 'GET', 
			  url: api_link+'ess/updated/auth',
			  params: {token:authorization.getToken(),
				  	   user_status:1}}).then(
		function successCallback(response) 
		{	
			return response
		}, 
		function errorCallback(response) 
		{
			return response
		});

    }

	obj.getTitle = function()
	{
		var title = ['dr','mr','mrs','ms','miss']
		return title
	}

	obj.showCcvEssSide = function()
	{
		return $http({method: 'GET', 
			  url: api_link+'ess/get',
			  params: {token:authorization.getToken()}}).then(
		function successCallback(response) 
		{
			var field_missing = false
			var ess = response.data.ess_list[0]

			if(ess.title == '' || ess.title == undefined || 
			   ess.firstname == '' || ess.firstname == undefined ||
			   ess.lastname == '' || ess.lastname == undefined ||
			   ess.address == '' || ess.address == undefined ||
			   ess.city == '' || ess.city == undefined ||
			   ess.county == '' || ess.county == undefined ||
			   ess.postcode == '' || ess.postcode == undefined ||
			   ess.contact_no == '' || ess.contact_no == undefined ||
			   ess.ni_no == '' || ess.ni_no == undefined)
			{
				field_missing = true;
			}

			$rootScope.right_side_details = 
			{
				'Title'    : ess.title,
				'Firstname': ess.firstname,
				'Lastname' : ess.lastname,
				'Address'  : ess.address,
				'City'     : ess.city,
				'County'   : ess.county,
				'Postcode' : ess.postcode,
				'Contact No' : ess.contact_no,
				'NI No'    : ess.ni_no,
				'link'     : '#/ess',
				'field_missing' : field_missing
			}	
			return $rootScope.right_side_details
		}, 
		function errorCallback(response) 
		{
			return response
		});
	}


    obj.essAmend = function(ni_no, title, firstname, lastname, email, contact_no, address, city, county, postcode, bank_name, bank_holder_name, account_no, sort_code)
    {
        return $http({method: 'POST', 
			  url: api_link+'ess/amend',
			  params: {token:authorization.getToken(),
				  	   ni_no:ni_no, 
					   title:title, 
					   firstname:firstname, 
					   lastname:lastname, 
					   email:email, 
					   contact_no:contact_no, 
					   address:address, 
					   city:city, 
					   county:county, 
					   postcode:postcode, 
					   bank_name:bank_name, 
					   bank_holder_name:bank_holder_name, 
					   account_no:account_no, 
					   sort_code:sort_code}}).then(
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