myApp.factory('user', function($log, $http, authorization)
{
    var obj = {};

    obj.getUserDetail = function()
    {
        return $http({method: 'GET', 
			  url: api_link+'user/get',
			  params: {token:authorization.getToken()}}).then(
		function successCallback(response) 
		{	
			return response.data.user_list[0]
		}, 
		function errorCallback(response) 
		{
			return response
		});

    }

    return obj
});