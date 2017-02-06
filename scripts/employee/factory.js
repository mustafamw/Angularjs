myApp.factory('employee', function($log, $http, authorization)
{
    var obj = {};

    obj.getEmployeeDetail = function()
    {
        return $http({method: 'GET', 
			  url: api_link+'employee/get',
			  params: {token:authorization.getToken()}}).then(
		function successCallback(response) 
		{	
			return response.data.employee_list[0]
		}, 
		function errorCallback(response) 
		{
			return response
		});

    }

    return obj
});