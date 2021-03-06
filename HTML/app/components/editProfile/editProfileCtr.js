
app.controller('EditProfileCtr',['$scope','$http','$rootScope','GetProfileService','$mdToast','ngProgressFactory','$timeout',
                         function ($scope,$http,$rootScope,GetProfileService,$mdToast,ngProgressFactory,$timeout) {

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
           /* $scope.loading = true;*/
            $scope.progressbar = ngProgressFactory.createInstance();
            $scope.progressbar.start();
			 $scope.progressbar.setColor('#FFA500');
		$scope.progressbar.setHeight('4px');

            GetProfileService.UpdateProfileService(update).then(function(updateInfo){
                debugger;
                var GetRstval = updateInfo;
                var ResltVal = updateInfo.responseCode;
                var Rstval = updateInfo.resultObject;

                if(updateInfo.responseCode == 0){
                    $timeout($scope.progressbar.complete(), 1000);
                   /* $scope.loading = false;*/
                   /* alert("Updated successfully");*/
                    $mdToast.show(
                        $mdToast.simple()
                            .textContent('Updated successfully')
                            .position('bottom')
                            .theme('success-toast')
                            .hideDelay(3000)
                    );

                }

                else{
                    $timeout($scope.progressbar.complete(), 1000);
                   /* $scope.loading = false;*/
                /*   alert( "Update failed");*/
                    $mdToast.show(
                        $mdToast.simple()
                            .textContent('Update failed')
                            .position('bottom')
                            .theme('error-toast')
                            .hideDelay(3000)
                    );

                }




            }).error(function(){});
        };

    }

}]);

