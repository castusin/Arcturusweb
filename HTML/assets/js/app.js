

var app = angular.module('MyApp', ['ui.router','ui.bootstrap']);
                      debugger;
app.config(function($stateProvider, $urlRouterProvider) {

    /*$urlRouterProvider.otherwise('/home');*/

    $stateProvider

    // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/home',
            templateUrl: '../../HTML/app/components/Dashboard/dashboard.html',
            controller:''
        })
        .state('Addpatient',{
            url:'/Addpatient',
            templateUrl: '../../HTML/app/components/Patients/AddPatient.html',
            controller: 'addPatientsCtr'

        })
        .state('ViewProfile',{
            url:'/ViewProfile',
            templateUrl: '../../HTML/app/components/Profile/ViewProfiles.html',
            controller: 'viewProfileCtr'
        })
        .state('ViewPatientProfile',{
            url:'/ViewPatientProfile',
            templateUrl: '../../HTML/app/components/PatientProfile/viewPatientProfile.html',
            controller: 'viewPatientProfileCtr'
        })
        .state('EditPatientProfile',{
            url:'/EditPatientProfile',
            templateUrl: '../../HTML/app/components/editProfile/editProfile.html',
            controller: 'EditProfileCtr'
        })
        .state('#',{
            url:'',
            templateUrl: '../../HTML/app/components/Dashboard/dashboard.html'

        })

        .state('careTaker',{
            url:'/careTaker',
            templateUrl: '../../HTML/app/components/caretaker/Addcare_taker.html',
            controller: 'careTakerCtr'

        })
		.state('help',{
            url:'/help',
            templateUrl: '../../HTML/app/components/Help/help.html',
            controller: ''

        })


});

//------------Only number in input text start----------------//

app.directive('numbersOnly', function () {
    return {
        require: 'ngModel',
        link: function (scope, element, attrs, modelCtrl) {
            modelCtrl.$parsers.push(function (inputValue) {
                // this next if is necessary for when using ng-required on your input.
                // In such cases, when a letter is typed first, this parser will be called
                // again, and the 2nd time, the value will be undefined
                if (inputValue == undefined) return ''
                var transformedInput = inputValue.replace(/[^0-9]/g, '');
                if (transformedInput != inputValue) {
                    modelCtrl.$setViewValue(transformedInput);
                    modelCtrl.$render();
                }

                return transformedInput;
            });
        }
    };
});

//------------Only number in input text end----------------//

//-------------------Email Directive Start---------------//
app.directive('validateEmail', function () {
    var EMAIL_REGEXP = /^[_a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
    return {
        link: function (scope, elm) {
            elm.on("keyup", function () {
                var isMatchRegex = EMAIL_REGEXP.test(elm.val());
                if (isMatchRegex && elm.hasClass('warning') || elm.val() == '') {
                    elm.removeClass('warning');
                } else if (isMatchRegex == false && !elm.hasClass('warning')) {
                    elm.addClass('warning');
                }
            });
        }
    }
});
//-------------------Email Directive End---------------//


app.directive('overwriteEmail', function() {
    var EMAIL_REGEXP = /^[_a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/;

    return {
        require: '?ngModel',
        link: function(scope, elm, attrs, ctrl) {
            // only apply the validator if ngModel is present and Angular has added the email validator
            if (ctrl && ctrl.$validators.email) {

                // this will overwrite the default Angular email validator
                ctrl.$validators.email = function(modelValue) {
                    return ctrl.$isEmpty(modelValue) || EMAIL_REGEXP.test(modelValue);
                };
            }
        }
    };
})


  app.directive('phoneInput', function($filter, $browser) {
        return {
            require: 'ngModel',
            link: function($scope, $element, $attrs, ngModelCtrl) {
                var listener = function() {
                    var value = $element.val().replace(/[^0-9]/g, '');
                    $element.val($filter('tel')(value, false));
                };

                // This runs when we update the text field
                ngModelCtrl.$parsers.push(function(viewValue) {
                    return viewValue.replace(/[^0-9]/g, '').slice(0,10);
                });

                // This runs when the model gets updated on the scope directly and keeps our view in sync
                ngModelCtrl.$render = function() {
                    $element.val($filter('tel')(ngModelCtrl.$viewValue, false));
                };

                $element.bind('change', listener);
                $element.bind('keydown', function(event) {
                    var key = event.keyCode;
                    // If the keys include the CTRL, SHIFT, ALT, or META keys, or the arrow keys, do nothing.
                    // This lets us support copy and paste too
                    if (key == 91 || (15 < key && key < 19) || (37 <= key && key <= 40)){
                        return;
                    }
                    $browser.defer(listener); // Have to do this or changes don't get picked up properly
                });

                $element.bind('paste cut', function() {
                    $browser.defer(listener);
                });
            }

        };
    })

      .filter('tel', function () {
          return function (tel) {
              console.log(tel);
              if (!tel) { return ''; }

              var value = tel.toString().trim().replace(/^\+/, '');

              if (value.match(/[^0-9]/)) {
                  return tel;
              }

              var country, city, number;

              switch (value.length) {
                  case 1:
                  case 2:
                  case 3:
                      city = value;
                      break;

                  default:
                      city = value.slice(0, 3);
                      number = value.slice(3);
              }

              if(number){
                  if(number.length>3){
                      number = number.slice(0, 3) + '-' + number.slice(3,7);
                  }
                  else{
                      number = number;
                  }

                  return ("(" + city + ") " + number).trim();
              }
              else{
                  return "(" + city;
              }

          };
      })

