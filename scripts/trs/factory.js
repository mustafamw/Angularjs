myApp.factory('trs', function($log, $http, authorization)
{
    var obj = {};

    obj.getTrs = function()
    {
        return $http({method: 'GET', 
			  url: api_link+'trs/get',
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

    return obj;
});