myApp.factory('utils', function($log, $http, authorization)
{
    var obj = {};

    obj.inArray = function(value, arr)
    {
        if(value != undefined && arr != undefined) 
        {
            if(arr.indexOf(value) > -1)
            {
                return true
            }
        }
        return false
    }

    return obj
});