var offer_api_link = "https://mybenefits.zone/offersAPI/";

myApp.factory('offers', function($log, $http, authorization, user, datelibs) {
    var obj = {};

    /* Cashback */

    obj.getCashbackCategories = function() {
        var url = offer_api_link + 'cashback/category.php'

        return $http({
            method: 'GET',
            url: url,
            cache: true,
            dataType: 'json'
        }).then(
            function(response) {
                return response
            },
            function(error) {
                return error
            });
    }

    obj.getCashbackOffers = function() {
        var url = offer_api_link + 'cashback/list.php'

        return $http({
            method: 'GET',
            url: url,
            cache: true,
            dataType: 'json'
        }).then(
            function(response) {
                return response
            },
            function(error) {
                return error
            });
    }

    /* Gift card */

    obj.getGiftcardCategories = function() {
        var url = offer_api_link + 'giftcard/category.php'

        return $http({
            method: 'GET',
            url: url,
            cache: true,
            dataType: 'json'
        }).then(
            function(response) {
                return response
            },
            function(error) {
                return error
            });
    }

    obj.getGiftcardOffers = function() {
        var url = offer_api_link + 'giftcard/list.php'

        return $http({
            method: 'GET',
            url: url,
            cache: true,
            dataType: 'json'
        }).then(
            function(response) {
                return response
            },
            function(error) {
                return error
            });
    }
    obj.getGiftcardTypeOffers = function() 
    {
        var url = offer_api_link + 'giftcard/type.php'

        return $http({
            method: 'GET',
            url: url,
            cache: true,
            dataType: 'json'
        }).then(
            function(response) {
                return response
            },
            function(error) {
                return error
            });
    }

    obj.giftcardExternalLink = function(giftcard)
    {
      return user.getUserDetail().then(function(data)
      {
          var employee_id = employee_id
          var email = data.email
          var code = giftcard.code
          var unixtime = datelibs.getCurrentUnixTime()
          var url = "http://www.zenith.svmeurope.co.uk/autologin.aspx?T="+employee_id+"-"+email+"-My%20SWFT%20Benefits-"+unixtime+"&C="+code+""
          return url
      })
    }


    /* voucher card */

    obj.getVoucherCategories = function() 
    {
        var url = offer_api_link + 'voucher/category.php'

        return $http({
            method: 'GET',
            url: url,
            cache: true,
            dataType: 'json'
        }).then(
            function(response) {
                return response
            },
            function(error) {
                return error
            });
    }

    obj.getVoucherTypeOffers = function() 
    {
        var url = offer_api_link + 'voucher/type.php'

        return $http({
            method: 'GET',
            url: url,
            cache: true,
            dataType: 'json'
        }).then(
            function(response) {
                return response
            },
            function(error) {
                return error
            });
    }

    obj.getVoucherOffers = function() {
        var url = offer_api_link + 'voucher/list.php'

        return $http({
            method: 'GET',
            url: url,
            cache: true,
            dataType: 'json'
        }).then(
            function(response) {
                return response
            },
            function(error) {
                return error
            });
    }


    return obj;
});