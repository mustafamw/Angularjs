var weekday = new Array(7);
    weekday[0]=  "sunday";
    weekday[1] = "monday";
    weekday[2] = "tuesday";
    weekday[3] = "wednesday";
    weekday[4] = "thursday";
    weekday[5] = "friday";
    weekday[6] = "saturday";


function checkRangeDateInBetween(start, end, checkStart, checkEnd)
{
    var checkStart = parseDate(checkStart).getTime()
    var checkEnd = parseDate(checkEnd).getTime() 
    var start = parseDate(start).getTime() 
    var end = parseDate(end).getTime()

    if(checkStart >= start && checkStart <= end)
    {
        return true
    }
    if(checkEnd >= start && checkEnd <= end)
    {
        return true
    }
}

function parseDate(dateString)
{
    if(dateString != undefined)
    {
        var date;
        if(dateString.indexOf("/") > -1)
        {
            date = moment(dateString, "DD/MM/YYYY").toDate("DD/MM/YYYY")
        }
        else
        {
            date = moment(dateString, "YYYY-MM-DD").toDate("DD/MM/YYYY")
        }
        return date;
    }
}

function parseDateFormat(dateString)
{
    var date;
    if(dateString.indexOf("/") > -1)
    {
        date = moment(dateString, "DD/MM/YYYY").format("DD/MM/YYYY");
    }
    else
    {
        date = moment(dateString, "YYYY-MM-DD").format("DD/MM/YYYY")
    }
    return date;
}


function parseDateFormatGAE(dateString)
{
    var date;
    if(dateString.indexOf("/") > -1)
    {
        date = moment(dateString, 'DD/MM/YYYY').format("YYYY-MM-DD")
    }
    else
    {
        date = moment(dateString, 'YYYY-MM-DD').format("YYYY-MM-DD")
    }
    return date;
}


myApp.factory('datelibs', function($log, $http, authorization, utils)
{
    var obj = {};

    obj.getCurrentDatetime = function()
    {
        var date = moment().toDate();
        return date
    }

    obj.getCurrentUnixTime = function()
    {
        var unixtime = moment().format('x');
        return unixtime
    }

    obj.getYearDate = function()
    {
        return parseInt(moment().format('YYYY'))
    }

    obj.getAge = function(date)
    {
        date = moment(date,'YYYY-MM-DD').toDate();
        var ageDifMs = Date.now() - date.getTime();
        var ageDate = new Date(ageDifMs); // miliseconds from epoch
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }

    obj.generateAge = function(min, max)
    {
        var age = []
        for(var i = min; i <= max; i++)
        {
            age.push(i*5)
        }
        return age
    }

    obj.getBusinessWorkingDays = function(first, last)
    {
        if (first > last) return -1;
        var start = new Date(first.getTime());
        var end = new Date(last.getTime());
        var count = 0;
        while (start <= end) 
        {
            if (start.getDay() != 0 && start.getDay() != 6) 
            count++;
            start.setDate(start.getDate() + 1);
        }
        return count;
    }

    obj.getPublicHoliday = function(region)
    {
        return $http({method: 'GET', url: './json/holiday//bank-holidays.json'}).then(
        function successCallback(response) 
        {
            var publicHoliday = {}
            for(var dates in response.data[region].events)
            {
                var date = response.data[region].events[dates].date
                var notes = response.data[region].events[dates].notes
                var title = response.data[region].events[dates].title
                var bunting = response.data[region].events[dates].bunting
                publicHoliday[date] = {date:date,
                                       notes:notes,
                                       title:title,
                                       bunting:bunting}

            }
            return publicHoliday
        }, 
        function errorCallback(response) 
        {

        });
    }

    obj.getPublicAndDaysOff = function(startDate, endDate, daysoff)
    {
        return obj.getPublicHoliday('england-and-wales').then(function(data)
        {
            var publicHoliday = data
            if(startDate && endDate)
            {
                var count = 0;

                var foundDate = {};
            
                var oneDay = 24*60*60*1000; // hours*minutes*seconds*milliseconds
            
                var foundDate = {};
            
                for (var d=[],listdate=startDate*1,last=endDate*1;listdate<=last;listdate+=oneDay)
                {
                    var date = new Date(listdate);
                    var getday = date.getDay();
                    var listdatefrm = moment(date).format('YYYY-MM-DD');

                    if (weekday[getday] != "sunday" && weekday[getday] != "saturday")
                    {
                        if(utils.inArray(weekday[getday], daysoff))  
                        {
                            foundDate[listdatefrm] = listdatefrm;
                        }

                        if(publicHoliday[listdatefrm])
                        {
                            foundDate[listdatefrm] = listdatefrm;
                        }
                    }
                }
                var keys = Object.keys(foundDate).length;
                if(keys)
                {
                    count = keys
                }
                else
                {
                    count = 0
                }
                return count;
            }
        });
    }

    obj.getListDates = function(date)
    {
        var start_date = moment(date, 'YYYY-MM-DD')
        var end_date = moment(date, 'YYYY-MM-DD').add(30, 'day')

        function getDates( d1, d2 )
        {
            var listDateObj = {};
            var oneDay = 24*3600*1000;
            for (var d=[],ms=d1*1,last=d2*1;ms<=last;ms+=oneDay)
            {
                var date = new Date(ms);

                var unixtime = moment(date).format("x")

                var dateFormat = moment(date).format("YYYY-MM-DD")
                //mon
                var dayWeekShort = moment(date).format("ddd").toLowerCase();
                //monday
                var dayWeekLong = moment(date).format("dddd").toLowerCase();
                //01 (day number)
                var dayNo = moment(date).format("D").toLowerCase();

                listDateObj[unixtime] = {'unixtime':unixtime, 
                                        'dateFormat':dateFormat,
                                        'dayWeekShort':dayWeekShort,
                                        'dayWeekLong':dayWeekLong,
                                        'dayNo':dayNo}
            }

            return listDateObj;

        }
        var listDates = getDates(start_date, end_date);

        return listDates;
        
    };

    obj.checkDateInBetween = function(check, start, end)
    {
        var check = moment(check, "YYYY-MM-DD").toDate()
        var start = moment(start, "YYYY-MM-DD").toDate()
        var end = moment(end, "YYYY-MM-DD").toDate()

        if(check >= start && check <= end)
        {
            return true
        }
        return false
    }

    obj.dateIsValid = function(date)
    {
        return moment(date, "YYYY-MM-DD", true).isValid()
    }

    obj.ageDifference = function(dob, check)
    {
        var dob = moment(dob, "YYYY-MM-DD").toDate()
        var check = moment(check, "YYYY-MM-DD").toDate()
        
        var yearNow = check.getYear();
		var monthNow = check.getMonth();
		var dateNow = check.getDate();

		var yearDob = dob.getYear();
		var monthDob = dob.getMonth();
		var dateDob = dob.getDate();

		var age = {};
		var ageString = "";
		var yearString = "";
		var monthString = "";
		var dayString = "";

		yearAge = yearNow - yearDob;

		if (monthNow >= monthDob)
        {
		    var monthAge = monthNow - monthDob;
        }
		else 
        {
		    yearAge--;
		    var monthAge = 12 + monthNow -monthDob;
		}

		if (dateNow >= dateDob)
        {
		    var dateAge = dateNow - dateDob;
        }
		else 
        {
		    monthAge--;
		    var dateAge = 31 + dateNow - dateDob;
		    if (monthAge < 0) 
            {
		      monthAge = 11;
		      yearAge--;
		    }
		}

		age = {
		        years: yearAge,
		        months: monthAge,
		        days: dateAge
		      };

		  if ( age.years > 1 ) yearString = " years";
		  else yearString = " year";
		  if ( age.months> 1 ) monthString = " months";
		  else monthString = " month";
		  if ( age.days > 1 ) dayString = " days";
		  else dayString = " day";


		  if ( (age.years > 0) && (age.months > 0) && (age.days > 0) )
		    ageString = age.years + yearString + ", " + age.months + monthString + ", and " + age.days + dayString;
		  else if ( (age.years == 0) && (age.months == 0) && (age.days > 0) )
		    ageString = "Only " + age.days + dayString
		  else if ( (age.years > 0) && (age.months == 0) && (age.days == 0) )
		    ageString = age.years + yearString
		  else if ( (age.years > 0) && (age.months > 0) && (age.days == 0) )
		    ageString = age.years + yearString + " and " + age.months + monthString
		  else if ( (age.years == 0) && (age.months > 0) && (age.days > 0) )
		    ageString = age.months + monthString + " and " + age.days + dayString
		  else if ( (age.years > 0) && (age.months == 0) && (age.days > 0) )
		    ageString = age.years + yearString + " and " + age.days + dayString
		  else if ( (age.years == 0) && (age.months > 0) && (age.days == 0) )
		    ageString = age.months + monthString + " old.";
		  else ageString = "Oops! Could not calculate age!";

		  return ageString;
    }

    return obj
});