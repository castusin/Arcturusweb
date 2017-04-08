/**
 * Created by Darshan on 3/20/2017.
 */

app.factory('careTakerServiceInfo',function ($http) {
    var webServiceUrl   = "http://digihealthcare.castusinfo.com/";
    var config = {
        headers: {'Content-Type': 'application/json; charset=utf-8', 'Authorization': 'homecare1@3'}
    };



    return{

        CareTakerService :  function(patient){
            debugger;
            var promise = $http.get(webServiceUrl+'addCareTakers?userId='+patient.userId+'&phoneNumber='+patient.phoneNumber,config) .then(function(response) {
                console.log('Response -- '+response.data);
                return response.data;
            }, function (error) {

            })
            return promise;
        }

    }

});
