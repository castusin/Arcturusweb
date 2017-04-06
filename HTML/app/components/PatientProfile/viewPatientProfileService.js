

    app.factory('GetProfileService',function ($http) {
        var webServiceUrl   = "http://digitest.castusinfo.com/";
        var config = {
            headers: {'Content-Type': 'application/json; charset=utf-8', 'Authorization': 'homecare1@3'}
        };

        return{

            GetProfileService :  function(userId){
                debugger;
                var promise = $http.get(webServiceUrl+'getAdminProfileData?userId='+userId,config) .then(function(response) {
                    console.log('Response -- '+response.data);
                    return response.data;
                }, function (error) {

                })
                return promise;
            },

            UpdateProfileService :  function(update){
                debugger;
                var promise = $http.post(webServiceUrl+'adminUpdateProfile',update,config) .then(function(response) {
                    debugger;
                    console.log('Response -- '+response.data);
                    return response.data;
                }, function (error) {
                    debugger;
                    var getError = error;
                })
                return promise;
            }
        }


    });