
app.controller('EditProfileCtr',['$scope','$http','$rootScope','GetProfileService',function ($scope,$http,$rootScope,GetProfileService) {

    debugger;
    $scope.patient={
        userId:'',
        firstName:'',
        lastName:'',
        emailId:'',
        phoneNumber:''
    }
    var PtnGetUserId = $rootScope.PtnUserId;

    GetProfileService.GetProfileService(PtnGetUserId).then(function(GetRsltInfo){
        var GetPhoneNumber = GetRsltInfo.resultObject.phoneNumber.substring(1,GetRsltInfo.resultObject.phoneNumber);
        $scope.patient = GetRsltInfo.resultObject ;
        $scope.firstName = function(){ return GetRsltInfo.resultObject.firstName; }
        $scope.patient.phoneNumber=GetPhoneNumber;
    },function (error) {});


    $scope.phoneNumberTF=false;
    $scope.firstNameTF=false;
    $scope.lastNameTF=false;
    $scope.emailIdTF=false;

    /*$scope.edit=function(){
        debugger;
        $scope.phoneNumberTF=false;
        $scope.firstNameTF=false;
        $scope.lastNameTF=false;
        $scope.emailIdTF=false;

    }*/

    $scope.updateCall=function(update){

        debugger;
        if($scope.viewPatientProfileForm.$valid) {
            update.date="";
            update.appId  ="a8edd8e0";
            update.accountType  ="P";
            update.gender  ="";
            update.photo  ="";
            update.dob  ="";
            /*update.sessionId="7ca17e22-85f3-45c7-9b9e-f1ced9561954";*/

            GetProfileService.UpdateProfileService(update).then(function(updateInfo){
                debugger;
                var GetRstval = updateInfo;
                var ResltVal = updateInfo.responseCode;
                var Rstval = updateInfo.resultObject;

                if(updateInfo.responseCode == 0){

                    alert("Updated successfully");

                }

                else{
                   alert( "Update failed");

                }




            }).error(function(){});
        };

    }

}]);

