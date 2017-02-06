myApp.factory('company', function($log, $http, authorization, $sessionStorage)
{
    var obj = {};

    obj.storeCompanyDetail = function(company)
    {
        $sessionStorage.company = company
    };

    obj.getCompanyDetail = function(company)
    {
        if($sessionStorage.company)
        {
            return $sessionStorage.company
        }
        else
        {
            return $http({method: 'GET', 
            url: api_link+'response/get',
            params: {token:authorization.getToken()}}).then(
            function successCallback(response) 
            {	
                var benefitsArr = []
                for(var benefits in response.data.benefits_details)
                {
                    if(response.data.benefits_details[benefits].provider_name != '')
                    {
                        var benefit = response.data.benefits_details[benefits];
                            benefit['name'] = benefits
                        benefitsArr.push(benefit)
                    }
                }
                obj.storeCompanyDetail(response.data.company_details.employer_details)
                return response.data.company_details.employer_details
            }, 
            function errorCallback(response) 
            {
                return response
            });
        }
    };

    return obj;
});