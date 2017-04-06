

app.factory('patientServiceInfo',function ($http) {
        var webServiceUrl   = "http://digitest.castusinfo.com/";
        var config = {
            headers: {'Content-Type': 'application/json; charset=utf-8', 'Authorization': 'homecare1@3'}
        };

        return{

            AddPatientService :  function(Add){
                debugger;

                var promise = $http.post(webServiceUrl+'addPatients',Add,config) .then(function(response) {
                    debugger;

                    console.log('Response -- '+response.data);
                    return response.data;
                }, function (error) {

                })
                return promise;
            }

        }

    });