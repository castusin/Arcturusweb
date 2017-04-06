/**
 * Created by Darshan on 3/20/2017.
 */

app.controller('viewProfileCtr',['$scope','$http','$state','$rootScope','ViewProfileServiceInfo',function ($scope,$http,$state,$rootScope,ViewProfileServiceInfo){

    debugger;
    
    ViewProfileServiceInfo.GetAllProfilesService().then(function (result) {
debugger;
        var GetResults=result.responseCode;
        $scope.GetPatientsProfiles=result.resultObject;
    },function (error) {
        
    })



    $scope.getProfileCall=function(getUserId){

         $rootScope.PtnUserId=getUserId;
        $state.go('ViewPatientProfile');
        debugger;
        /*var sessionId = "7ca17e22-85f3-45c7-9b9e-f1ced9561954";*/

    }
    $scope.viewProfileCall=function(getUserId){

        $rootScope.PtnUserId=getUserId;
        $state.go('EditPatientProfile');
        debugger;
        /*var sessionId = "7ca17e22-85f3-45c7-9b9e-f1ced9561954";*/

    }


}])

app.controller('EditPatientProfileCtr',['$scope','$http','$rootScope',''])