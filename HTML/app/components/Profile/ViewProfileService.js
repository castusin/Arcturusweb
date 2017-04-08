/**
 * Created by Darshan on 3/20/2017.
 */

app.factory('ViewProfileServiceInfo',function ($http) {
    var webServiceUrl   = "http://digihealthcare.castusinfo.com/";
    var config = {
        headers: {'Content-Type': 'application/json; charset=utf-8', 'Authorization': 'homecare1@3'}
    };



    return{

        GetAllProfilesService :  function(){
            debugger;
            var promise = $http.get(webServiceUrl+'viewPatients',config) .then(function(response) {
                console.log('Response -- '+response.data);
                return response.data;
            }, function (error) {

            })
            return promise;
        }

    }

});
