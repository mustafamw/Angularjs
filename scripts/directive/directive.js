myApp.directive('validNumber', function() {
    return {
      require: '?ngModel',
      link: function(scope, element, attrs, ngModelCtrl) {
        if(!ngModelCtrl) {
          return; 
        }

        ngModelCtrl.$parsers.push(function(val) {
          if (angular.isUndefined(val)) {
              var val = '';
          }
          
          var clean = val.replace(/[^-0-9\.]/g, '');
          var negativeCheck = clean.split('-');
			var decimalCheck = clean.split('.');
          if(!angular.isUndefined(negativeCheck[1])) {
              negativeCheck[1] = negativeCheck[1].slice(0, negativeCheck[1].length);
              clean =negativeCheck[0] + '-' + negativeCheck[1];
              if(negativeCheck[0].length > 0) {
              	clean =negativeCheck[0];
              }
              
          }
            
          if(!angular.isUndefined(decimalCheck[1])) {
              decimalCheck[1] = decimalCheck[1].slice(0,2);
              clean =decimalCheck[0] + '.' + decimalCheck[1];
          }

          if (val !== clean) {
            ngModelCtrl.$setViewValue(clean);
            ngModelCtrl.$render();
          }
          return clean;
        });

        element.bind('keypress', function(event) {
          if(event.keyCode === 32) {
            event.preventDefault();
          }
        });
      }
    };
});

myApp.directive('currency', function () {
    return {
        require: 'ngModel',
        link: function(elem, $scope, attrs, ngModel){
            ngModel.$formatters.push(function(val){
                return '£' + parseFloat(val).toFixed( 2 );
            });
            ngModel.$parsers.push(function(val){
                return val.replace(/^\£/, '')
            });
        }
    }
})

myApp.directive('errSrc', function() {
	  return {
	    link: function(scope, element, attrs) {
	 
	      scope.$watch(function() {
	          return attrs['ngSrc'];
	        }, function (value) {
	          if (!value) {
	            element.attr('src', attrs.errSrc); 
	          }
	      });
	 
	      element.bind('error', function() {
	        element.attr('src', attrs.errSrc);
	      });
	    }
	  }
});


myApp.directive('capitalizeFirst', function(uppercaseFilter, $parse) {
   return {
     require: 'ngModel',
     link: function(scope, element, attrs, modelCtrl) {
        var capitalize = function(inputValue) {
           if(inputValue)
           {
           var capitalized = inputValue.charAt(0).toUpperCase() +
               inputValue.substring(1);
           if(capitalized !== inputValue) {
              modelCtrl.$setViewValue(capitalized);
              modelCtrl.$render();
            }         
            return capitalized;
           }
         }
         var model = $parse(attrs.ngModel);
         modelCtrl.$parsers.push(capitalize);
         capitalize(model(scope));
     }
   };
});


myApp.directive('capitalizeEach', function (uppercaseFilter, $parse) {
    return {
        require: 'ngModel',
        scope: {
            ngModel: "="
        },
        link: function (scope, element, attrs, modelCtrl) {
            
            scope.$watch("ngModel", function () {
                scope.ngModel = scope.ngModel.replace(/^(.)|\s(.)/g, function(v){ return v.toUpperCase( ); });
            });
        }
    };
});
myApp.directive('capitalizeAll', function() {
    return {
        require: 'ngModel',
        link: function(scope, element, attrs, modelCtrl) {
            modelCtrl.$parsers.push(function(input) {
                return input ? input.toUpperCase() : "";
            });
            element.css("text-transform","uppercase");
        }
    };
})

myApp.directive('formatCurrency', function($filter, $log) {
    return {
        require: '?ngModel',
        link: function(scope, elem, attrs, ctrl) {
            //model -> view 
            ctrl.$formatters.unshift(function(a) 
            {
              return '£'+(attrs.value)
            });
            //view -> model
            ctrl.$parsers.unshift(function(viewValue) {
              var plainNumber = viewValue.replace(/[^0-9\.]/g, '');
              elem.val( '£'+$filter('number')(plainNumber) );
              return plainNumber;
            });

        }
    };
});



