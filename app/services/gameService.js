angular.module('gameOfLife')
    .factory('gameService', ['$http', '$q', function($http, $q){
       
       return {
            getHelloWorld: function(){
                
                var val = $q.defer();
                
                $http({
                method: "GET",
                url: "http://localhost:8080/api/HelloWorld"  
                }).then(function successCallback(response){
                    val.resolve(response.data);
                }, function errorCallback(response){
                    val.reject("Error");
                });
                
                return val.promise;
            }
       }     
}]);