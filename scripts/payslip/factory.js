myApp.factory('payslip', function($log, $http, authorization, datelibs, utils)
{
    var obj = {};

    obj.getPayslipDates = function()
    {
        return $http({method: 'GET', 
			  url: api_link+'payslip/dates',
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

	obj.getPayslip = function(date)
    {
        return $http({method: 'GET', 
			  url: api_link+'payslip/get',
			  params: {token:authorization.getToken(),
				  	   date:date}}).then(
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