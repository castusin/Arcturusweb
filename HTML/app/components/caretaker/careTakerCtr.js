
app.controller('careTakerCtr',['$scope','$http','$rootScope','$state','ViewProfileServiceInfo','$timeout','careTakerServiceInfo','$mdToast','ngProgressFactory',
                         function ($scope,$http,$rootScope,$state,ViewProfileServiceInfo,$timeout,careTakerServiceInfo,$mdToast,ngProgressFactory) {

    debugger;


    ViewProfileServiceInfo.GetAllProfilesService().then(function (result) {
        debugger;
        var GetResults=result.responseCode;
        $scope.GetPatientsProfiles=result.resultObject;

    },function (error) {

    })


    $scope.addCareTakerCall=function(patient){

        debugger;

        if($scope.addCareForm.$valid) {
        /*$scope.loading = true;*/
        $scope.progressbar = ngProgressFactory.createInstance();
        $scope.progressbar.start();
		 $scope.progressbar.setColor('#FFA500');
		$scope.progressbar.setHeight('4px');
        careTakerServiceInfo.CareTakerService(patient).then(function(result){
            debugger;
            /*var GetRstval = careTakeInfo;*/
            var ResltVal = result.responseCode;
           /* var Rstval = careTakeInfo.resultObject;*/

            if(result.responseCode == 0){
                $timeout($scope.progressbar.complete(), 1000);
                /*$scope.loading = false;*/
                $state.go($state.current, {}, {reload: true});
                /*$scope.updatesucc = "CareTaker added successfully";*/
             /* alert( "CareTaker added successfully");*/
                $mdToast.show(
                    $mdToast.simple()
                        .textContent('CareTaker added successfully')
                        .position('bottom')
                        .theme('success-toast')
                        .hideDelay(3000)
                );

            }

            else{
                $timeout($scope.progressbar.complete(), 1000);
               /* $scope.loading = false;*/
                $state.go($state.current, {}, {reload: true});
                /*$scope.updateError = "Sorry";*/
                /*alert("Account already exists");*/
                $mdToast.show(
                    $mdToast.simple()
                        .textContent('Account already exists')
                        .position('bottom')
                        .theme('error-toast')
                        .hideDelay(3000)
                );

            }




        });
    }

    }

}]);

