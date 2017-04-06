
app.controller('addPatientsCtr',['$scope','$http','$state','patientServiceInfo','$window',function ($scope,$http,$state,patientServiceInfo,$window) {

       debugger;
    $scope.questionelemnt = [{
        phoneNumber: ''
    }];

    $scope.addFormField = function ($event) {
        debugger;
        $scope.questionelemnt.push({
           phoneNumber: ''
        });
        $event.preventDefault();
    }

    $scope.careTakerModel= {
        "appId":"",
        "accountType":"",
        "firstName":"",
        "lastName":"",
        "phoneNumber":"",
        "password":"",
        "emailId":"",
        "gender":"",
        "photo":"",
        "dob":"",
        careTakerDetails: []
    }
    /*$scope.GetFeedBackResult=[];*/

    /*$scope.showitems = function ($event) {
        debugger;
        $('#displayitems').css('visibility', 'none');
        angular.forEach($scope.questionelemnt,function (fdr) {
            $scope.careTakerModel.careTakerDetails.push(fdr);

        });

    }*/

    $scope.elemnt   ={}

    $scope.addPatientCall=function(patient){

        debugger;

        if($scope.addPatientProfileForm.$valid) {

        $scope.careTakerModel.appId='a8edd8e0';
        $scope.careTakerModel.accountType='P';
        $scope.careTakerModel.firstName=patient.firstName;
        $scope.careTakerModel.lastName=patient.lastName;
        $scope.careTakerModel.phoneNumber=patient.phoneNumber;
        $scope.careTakerModel.emailId=patient.emailId;
        $scope.careTakerModel.password='';
        $scope.careTakerModel.gender='M';
        $scope.careTakerModel.photo='';
        $scope.careTakerModel.dob='';

        angular.forEach($scope.questionelemnt,function (fdr) {
            $scope.careTakerModel.careTakerDetails.push(fdr);
        });




        patientServiceInfo.AddPatientService($scope.careTakerModel).then(function(GetRsltInfo){
            debugger;
            var GetRstval = GetRsltInfo;
            var ResltVal = GetRsltInfo.responseCode;
            var Rstval = GetRsltInfo.resultObject;
            
            if(GetRsltInfo.responseCode == 0){
               /* $window.location.reload();*/

                /*$scope.addpatient="Patient added successfully" ;*/
                $state.go($state.current, {}, {reload: true});
               alert("Patient added successfully");
            }
            else{
                $state.go($state.current, {}, {reload: true});
               alert( "Failed At DataAccess");
                /*$scope.addpatent="Sorry" ;*/
            }

        }).error(function(){});
    };


    }

}]);