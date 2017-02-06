myApp.factory('wageCheck', function($log, $http, authorization)
{
    var obj = {};

    obj.getWageCheckList = function(user_status)
    {
        return $http({method: 'GET', 
			  url: api_link+'wage/list',
			  params: {token:authorization.getToken(),
                       user_status:user_status}}).then(
		function successCallback(response) 
		{	
			return response
		}, 
		function errorCallback(response) 
		{
			return response
		});
    }

    return obj;
});