
app.controller('careTakerCtr',['$scope','$http','$rootScope','$state','ViewProfileServiceInfo','careTakerServiceInfo','$mdToast',
                                               function ($scope,$http,$rootScope,$state,ViewProfileServiceInfo,careTakerServiceInfo,$mdToast) {

    debugger;


    ViewProfileServiceInfo.GetAllProfilesService().then(function (result) {
        debugger;
        var GetResults=result.responseCode;
        $scope.GetPatientsProfiles=result.resultObject;

    },function (error) {

    })


    $scope.addCareTakerCall=function(patient){

        debugger;
        $scope.loading = true;
        careTakerServiceInfo.CareTakerService(patient).then(function(result){
            debugger;
            /*var GetRstval = careTakeInfo;*/
            var ResltVal = result.responseCode;
           /* var Rstval = careTakeInfo.resultObject;*/

            if(result.responseCode == 0){
                $scope.loading = false;
                $state.go($state.current, {}, {reload: true});
                /*$scope.updatesucc = "CareTaker added successfully";*/
             /* alert( "CareTaker added successfully");*/
                $mdToast.show(
                    $mdToast.simple()
                        .textContent('CareTaker added successfully')
                        .position('top')
                        .theme('success-toast')
                        .hideDelay(3000)
                );

            }

            else{
                $scope.loading = false;
                $state.go($state.current, {}, {reload: true});
                /*$scope.updateError = "Sorry";*/
                /*alert("Account already exists");*/
                $mdToast.show(
                    $mdToast.simple()
                        .textContent('Account already exists')
                        .position('top')
                        .theme('error-toast')
                        .hideDelay(3000)
                );

            }




        });
    }



}]);

