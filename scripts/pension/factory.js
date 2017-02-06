myApp.factory('pension', function($log, $http, authorization, datelibs, utils)
{
    var obj = {};

	obj.getStatePension = function()
	{
		return $http({method: 'GET', 
			  		  url:'./json/pension/table.json'}).then(
		function successCallback(response) 
		{	
			return response.data
		}, 
		function errorCallback(response) 
		{
			return response
		});
	}

	obj.calculateStatePension = function(dob, gender)
	{
		return obj.getStatePension().then(function(data)
		{
			var state_pension_age = ""
			for(var table in data)
			{
				var start_date = data[table].start_date
				var end_date = data[table].end_date
				var genderArr = data[table].gender

				if(datelibs.checkDateInBetween(dob, start_date, end_date) && utils.inArray(gender, genderArr))
				{
					var reached = obj.generateTableStatePension(table, data[table])
					var reached_value = obj.getReachedAgePension(dob, reached)
					if(datelibs.dateIsValid(reached_value.reached))
					{
						state_pension_age = datelibs.ageDifference(dob, reached_value.reached)
					}
					else
					{
						state_pension_age = reached_value.reached
					}
					break;
				}
				else
				{
					if(gender == 'male')
					{
						state_pension_age = "65 years"
					}
					else
					{
						state_pension_age = "65 years"
					}
				}
			}

			return state_pension_age

		})
	}

	obj.generateTableStatePension = function(table_name, pension_table)
	{
		var start_date = pension_table.start_date;
		var end_date = pension_table.end_date;
		var reached_start = pension_table.reached_start
		var reached_end = pension_table.reached_end
		var month_add = pension_table.month_add
		var date_count = pension_table.totalrow

		var start_date_incremeant;
		var end_date_incremeant;
		var reached_incremeant;

		var statePensiondates = []

		for(i=0; i < date_count; i++)
		{
			start_date_incremeant = moment(start_date)

			end_date_incremeant = moment(start_date_incremeant);
			end_date_incremeant = end_date_incremeant.add(1, 'month');
			end_date_incremeant = end_date_incremeant.add(-1, 'day');

			if(i != (date_count-1))
			{
				reached_incremeant = moment(reached_start, "YYYY-MM-DD").format("YYYY-MM-DD");
			}
			else if(i == (date_count-1))
			{
				if(!datelibs.dateIsValid(reached_end))
				{
					reached_incremeant = reached_end
				}
				end_date_incremeant = moment(end_date, "YYYY-MM-DD");
			}

			statePensiondates.push({start_date:start_date_incremeant.format("YYYY-MM-DD"),
									end_date:end_date_incremeant.format("YYYY-MM-DD"),
									reached:reached_incremeant})
			
			reached_incremeant = moment(reached_incremeant, "YYYY-MM-DD")
			reached_incremeant = reached_incremeant.add(month_add, 'month')
			end_date_incremeant = end_date_incremeant.add(1, 'day');
			start_date_incremeant = end_date_incremeant

		}

		return statePensiondates;
	}

	obj.getReachedAgePension = function(dob, reached_date)
	{
		for(var reached in reached_date)
		{
			var reached_date_start = reached_date[reached].start_date
			var reached_date_end = reached_date[reached].end_date
			if(datelibs.checkDateInBetween(dob, reached_date_start, reached_date_end))
			{
				return reached_date[reached]
			}

		}
	}


    obj.getPensionDetail = function()
    {
        return $http({method: 'GET', 
			  url: api_link+'pension/get',
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

	obj.pensionSignup = function(employee_contribution_amount, 
								 employee_contribution_percent, 
								 employer_contribution_amount, 
								 employer_contribution_percent, 
								 saving_type, 
								 retirement_age,
								 list_fund,
								 fund_selection)
	{
		return $http({method: 'POST', 
			  url: api_link+'pension/signup',
			  params: {token:authorization.getToken(),
				  	   employee_contribution:employee_contribution_amount,
					   employee_contribution_percent:employee_contribution_percent,
					   employer_contribution:employer_contribution_amount,
					   employer_contribution_percent:employer_contribution_percent,
					   tax_saving:saving_type,
					   list_fund:list_fund,
					   fund_selection:fund_selection,
					   retirement_age:retirement_age}}).then(
		function successCallback(response) 
		{	
			return response
		}, 
		function errorCallback(response) 
		{
			$log.info(response)
			return response
		});
	}

	obj.pensionSignupAmend = function(employee_contribution_amount, 
									  employee_contribution_percent, 
									  employer_contribution_amount, 
									  employer_contribution_percent,
									  saving_type,
									  fund_selection)
	{
		return $http({method: 'POST', 
			  url: api_link+'pension/signup/amend',
			  params: {token:authorization.getToken(),
				  	   employee_contribution:employee_contribution_amount,
					   employee_contribution_percent:employee_contribution_percent,
					   employer_contribution:employer_contribution_amount,
					   employer_contribution_percent:employer_contribution_percent,
					   tax_saving:saving_type,
					   fund_selection:fund_selection}}).then(
		function successCallback(response) 
		{	
			$log.info(response)
			return response
		}, 
		function errorCallback(response) 
		{
			$log.info(response)
			return response
			
		});
	}

	obj.getPensionSignupInfo = function(pension_signup_status)
	{
		return $http({method: 'GET', 
			  url: api_link+'pension/signup/list',
			  params: {token:authorization.getToken(),
				       pension_signup_status:pension_signup_status}}).then(
		function successCallback(response) 
		{	
			return response
		}, 
		function errorCallback(response) 
		{
			$log.info(response)
			return response
		});
	}

	obj.getPensionSignupInfoAdmin = function(pension_signup_status)
	{
		return $http({method: 'GET', 
			  url: api_link+'pension/signup/list/auth',
			  params: {token:authorization.getToken(),
				  	   user_status:1,
					   pension_signup_status:pension_signup_status}}).then(
		function successCallback(response) 
		{	
			return response
		}, 
		function errorCallback(response) 
		{
			return response
		});
	}

	obj.pensionSignupWithdraw = function(pension_signup_key, hashed)
	{
		return $http({method: 'POST', 
			  url: api_link+'pension/signup/withdraw',
			  params: {token:authorization.getToken(),
				       pension_signup_key:pension_signup_key,
					   hashed:hashed}}).then(
		function successCallback(response) 
		{	
			return response
		}, 
		function errorCallback(response) 
		{
			return response
		});
	}

	obj.pensionSignupCancel = function(pension_signup_key, hashed)
	{
		return $http({method: 'POST', 
			  url: api_link+'pension/signup/cancel',
			  params: {token:authorization.getToken(),
				       pension_signup_key:pension_signup_key,
					   hashed:hashed}}).then(
		function successCallback(response) 
		{	
			return response
		}, 
		function errorCallback(response) 
		{
			return response
		});
	}

	obj.pensionSignupApproval = function(pension_signup_key, hashed, status)
	{
		return $http({method: 'POST', 
			  url: api_link+'pension/signup/approval',
			  params: {token:authorization.getToken(),
				       pension_signup_key:pension_signup_key,
					   hashed:hashed,
					   status:status}}).then(
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