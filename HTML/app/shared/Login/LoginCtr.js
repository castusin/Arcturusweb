/**
 * Created with JetBrains WebStorm.
 * User: castus
 * Date: 3/24/17
 * Time: 9:53 PM
 * To change this template use File | Settings | File Templates.
 */

app.controller('LoginCtr',['$scope','$http','$window','$mdToast',function ($scope,$http,$window,$mdToast) {
    debugger;

    $scope.LoginModel={
        UserId:'',
        Password:''
    }

    $scope.SubmitLogin=function(LoginModel){
                              debugger;
        if((LoginModel.UserId=='Admin')&&(LoginModel.Password=='arcturus'))
        {
            $window.location='../HTML/app/home.html';
        }
        else
        {
            $mdToast.show(
                $mdToast.simple()
                    .textContent('Invalid UserId and Password')
                    .position('top')
                    .theme('error-toast')
                    .hideDelay(3000)
            );
            /*alert("Invalid UserId and Password");*/
        }


    }

}]);
