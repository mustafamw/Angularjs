var regionArr = ['england-and-wales', 'scotland', 'northern-ireland'];

myApp.factory('holiday', function($log, $http, authorization)
{
    var region = regionArr[0];

    var obj = {};

    obj.getHolidayDetail = function()
    {
        return $http({method: 'GET', 
			  url: api_link+'holiday/get',
			  params: {token:authorization.getToken(),
                       year:2016}}).then(
		function successCallback(response) 
		{	
			return response
		}, 
		function errorCallback(response) 
		{
			return response
		});
    };

    obj.getHolidayDetailAuth = function(status)
    {
        return $http({method: 'GET', 
			  url: api_link+'holiday/list',
			  params: {token:authorization.getToken(),
                       status:status,
                       year:2016}}).then(
		function successCallback(response) 
		{	
			return response.data.holiday_detail_list
		}, 
		function errorCallback(response) 
		{
			return response
		});
    };

    obj.holidayDetailUpdate = function(holiday_key, user_id, allowance, allowance_type, days_off)
    {
        return $http({method: 'POST', 
			  url: api_link+'holiday/update',
			  params: {token:authorization.getToken(),
                       holiday_key:holiday_key,
                       user_id:user_id,
                       allowance:allowance,
                       allowance_type:allowance_type,
                       days_off:days_off}}).then(
		function successCallback(response) 
		{	
			return true
		}, 
		function errorCallback(response) 
		{
            $log.info(response)
			return false
		});
    };


    obj.getHolidayList = function(holiday_book_status)
    {
        return $http({method: 'GET', 
			   url: api_link+'holiday/book/list',
			   params:{token:authorization.getToken(),
                       holiday_book_status:holiday_book_status}}).then(
        function successCallback(response) 
        {	
            var totalDayTaken = 0;
            var totalDaysTakenObj = {}
            var year = moment().format('YYYY');
            for(var listHoliday in response.data.holiday_book_list)
            {
                var status = response.data.holiday_book_list[listHoliday].status;
				if(status.indexOf('accept') > -1 || status.indexOf('pending') > -1)
				{
                    totalDayTaken += parseFloat(response.data.holiday_book_list[listHoliday].taken);
                }
                totalDaysTakenObj[year] = totalDayTaken;
            }
            var listHolidays = {listHoliday:response.data.holiday_book_list,
                                totalDayTaken:totalDaysTakenObj}
            return listHolidays;
        }, 
        function errorCallback(response) 
        {
            return response
        });
    };

    obj.getHolidayListAuth = function(user_status, holiday_book_status)
    {
        return $http({method: 'GET', 
			          url: api_link+'holiday/book/list/auth',
			          params:{token:authorization.getToken(),
                              user_status:user_status, holiday_book_status:holiday_book_status}}).then(
        function successCallback(response) 
        {	
            return response.data.holiday_book_list
        }, 
        function errorCallback(response) 
        {
            return false
        });

    };

    obj.getHolidayBookedList = function(holiday_book_status)
    {
        if(holiday_book_status == '' || holiday_book_status == undefined)
        {
            holiday_book_status = '2,3';
        }
        return $http({method: 'GET', 
		       url: api_link+'holiday/book/list',
		       params:{token:authorization.getToken(),
                       holiday_book_status:holiday_book_status}}).then(
        function successCallback(response) 
        {   
            return response.data.holiday_book_list
        }, 
        function errorCallback(response) 
        {
        });
    };


    obj.getPublicHolidays = function()
    {
        return $http({method: 'GET', url: './json/holiday//bank-holidays.json'}).then(
		function successCallback(response) 
		{
            var events = response.data[region].events;
            var publicholidayObj = {}
            for(publicholiday in events)
            {
                var event = events[publicholiday];
                publicholidayObj[events[publicholiday].date] = event;
            }
            return publicholidayObj
		}, 
		function errorCallback(response) 
		{
            return response	
		});
    };

    obj.holidayBook = function(start_date,end_date,start_halfday,end_halfday,taken)
    {
   		return $http({method: 'POST',
                      url: api_link+'holiday/book',
                      params:{token:authorization.getToken(),
                              start_date:start_date,
                              end_date:end_date,
                              start_halfday:start_halfday,
                              end_halfday:end_halfday,
                              taken:taken}}).then(
                function successCallback(response) 
                {
                    return true
                }, 
                function errorCallback(response) 
                {
                    return false
                });
    }

    obj.holidayBookAuth = function(holiday_key,user_id,start_date,end_date,start_halfday,end_halfday,taken)
    {
   		return $http({method: 'POST',
                      url: api_link+'holiday/book/auth',
                      params:{token:authorization.getToken(),
                              user_id:user_id,
                              holiday_key:holiday_key,
                              start_date:start_date,
                              end_date:end_date,
                              start_halfday:start_halfday,
                              end_halfday:end_halfday,
                              taken:taken}}).then(
                function successCallback(response) 
                {
                    return true
                }, 
                function errorCallback(response) 
                {
                    return false
                });
    }

    obj.holidayBookApproval = function(holiday_book_key, hashed, status)
    {
   		return $http({method: 'POST',
                      url: api_link+'book/approval',
                      params:{token:authorization.getToken(),
                              holiday_book_key:holiday_book_key,
                              hashed:hashed,
                              status:status}}).then(
                function successCallback(response) 
                {
                    return true
                }, 
                function errorCallback(response) 
                {
                    return false
                });
    }

    obj.holidayBookWithdraw = function(holiday_book_key,hashed)
    {
        return $http({method: 'POST', 
                url: api_link + 'holiday/book/withdraw',
                params:{token:authorization.getToken(), 
                        holiday_book_key:holiday_book_key, 
                        hashed:hashed}}).then(
        function successCallback(response) 
        {	
            return true
        }, 
        function errorCallback(response) 
        {
            $log.info(response)
            return false
        });
    }

    obj.holidayBookCancel = function(holiday_book_key,hashed)
    {
        return $http({method: 'POST', 
                url: api_link + 'holiday/book/cancel',
                params:{token:authorization.getToken(), 
                        holiday_book_key:holiday_book_key, 
                        hashed:hashed}}).then(
        function successCallback(response) 
        {	
            return true
        }, 
        function errorCallback(response) 
        {
            return false
        });
    }

    return obj;
});