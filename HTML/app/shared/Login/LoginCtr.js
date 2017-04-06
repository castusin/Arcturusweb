/**
 * Created with JetBrains WebStorm.
 * User: castus
 * Date: 3/24/17
 * Time: 9:53 PM
 * To change this template use File | Settings | File Templates.
 */

app.controller('LoginCtr',['$scope','$http','$window',function ($scope,$http,$window) {
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
            alert("Invalid UserId and Password");
        }


    }

}]);
