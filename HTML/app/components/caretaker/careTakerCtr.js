
app.controller('careTakerCtr',['$scope','$http','$rootScope','$state','ViewProfileServiceInfo','careTakerServiceInfo',
                                               function ($scope,$http,$rootScope,$state,ViewProfileServiceInfo,careTakerServiceInfo) {

    debugger;


    ViewProfileServiceInfo.GetAllProfilesService().then(function (result) {
        debugger;
        var GetResults=result.responseCode;
        $scope.GetPatientsProfiles=result.resultObject;

    },function (error) {

    })


    $scope.addCareTakerCall=function(patient){

        debugger;

        careTakerServiceInfo.CareTakerService(patient).then(function(result){
            debugger;
            /*var GetRstval = careTakeInfo;*/
            var ResltVal = result.responseCode;
           /* var Rstval = careTakeInfo.resultObject;*/

            if(result.responseCode == 0){
                $state.go($state.current, {}, {reload: true});
                /*$scope.updatesucc = "CareTaker added successfully";*/
              alert( "CareTaker added successfully");

            }

            else{
                $state.go($state.current, {}, {reload: true});
                /*$scope.updateError = "Sorry";*/
                alert("Account already exists");

            }




        });
    }



}]);

