myApp.factory('main', function($log, $http, $sessionStorage, authorization, company)
{
    var obj = {};

    obj.getMain = function(status)
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
            if(!$sessionStorage.company)
            {
                company.storeCompanyDetail(response.data.company_details.employer_details)
            }
			return benefitsArr
		}, 
		function errorCallback(response) 
		{
			return response
		});
    };

    return obj

});