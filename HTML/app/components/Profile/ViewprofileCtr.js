/**
 * Created by Darshan on 3/20/2017.
 */

app.controller('viewProfileCtr',['$scope','$http','$state','$rootScope','ViewProfileServiceInfo',function ($scope,$http,$state,$rootScope,ViewProfileServiceInfo){

    debugger;

    $scope.loading = true;

    $scope.currentPage = 1;
    $scope.numPerPage = 6;
    $scope.maxSize = 5;





    ViewProfileServiceInfo.GetAllProfilesService().then(function (result) {
        debugger;
        var GetResults=result.responseCode;


        if(result.responseCode == 0){

            $scope.makeTodos = function() {
                $scope.todos = [];

                $scope.todos = result.resultObject;

                var data = $.grep($scope.todos,function(td){}).parktype;
            };
            $scope.makeTodos();

            $scope.$watch('currentPage + numPerPage', function() {
                var begin = (($scope.currentPage - 1) * $scope.numPerPage)
                    , end = begin + $scope.numPerPage;

                $scope.GetPatientsProfiles = $scope.todos.slice(begin, end);
            });
            /* $scope.GetPatientsProfiles=result.resultObject;*/
            $scope.loading = false;
        }
        else{
            $scope.loading = false;
        }



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