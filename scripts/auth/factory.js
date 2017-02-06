myApp.factory('authorization', function($http, $cookies, $log, $rootScope, $location, $timeout, $interval, $route, $localStorage, $sessionStorage, notification, $window, jwtHelper)
{
        var obj = {};
    
        obj.auth = function(username, password)
        {
            return $http({
              method: 'POST',
              url: api_link + 'login/desktop',
              params:{username:username, password:password}
            }).then(
            function successCallback(response) 
            {
				var token = response.data.token;
				$localStorage.token = token;
                $localStorage.payload = jwtHelper.decodeToken(token)
                return response
            },
            function errorCallback(response) 
            {
				return response
            });
        }

		obj.refresh = function()
        {
			var token = obj.getToken()

            $http({
              method: 'POST',
              url: api_link + 'login/refresh',
              params:{'token':token}
            }).then(
            function successCallback(response) 
            {
				var token = response.data.token;
                delete $localStorage.token
				$localStorage.token = token;
                $localStorage.payload = jwtHelper.decodeToken(token)
				$route.reload()
            },
            function errorCallback(response) 
            {
                obj.logout()
            });
            
        }

		obj.getToken = function()
		{
			var token = $localStorage.token
			if(token)
			{
				return token
			}
			else
			{
				return false
			}
		}
    
        obj.logout = function()
        {
			delete $localStorage.token
            $rootScope.loggedIn = false;
            $rootScope.loader_buffer = false;
			$location.path('/login')
        }
        
        return obj;
});
