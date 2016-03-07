angular.module('gameOfLife')
    .factory('gameService', ['$http', '$q', function($http, $q){
       
       return {
            getHelloWorld: function(){
                
                var deferred = $q.defer();
                
                $http({
                    method: "GET",
                    url: "http://localhost:8080/api/HelloWorld"  
                }).then(function successCallback(response){
                    deferred.resolve(response.data);
                }, function errorCallback(response){
                    deferred.reject("Error");
                });
                
                return deferred.promise;
            },
            
            postHelloWorld: function(){
                var deferred = $q.defer();
                
                $http({
                    method: "POST",
                    url: "http://localhost:8080/api/HelloWorld"
                }).then(function successCallback(response){
                    deferred.resolve(true);
                }, function errorCallback(response){
                    deferred.reject(false);
                });
                
                return deferred.promise;
            },
            postCells: function(cellData){
                var deferred = $q.defer();
                
                $http({
                    method: "POST",
                    url: "http://localhost:8080/api/cells",
                    data: cellData
                }).then(function successCallback(response){
                    deferred.resolve(response.data);
                }, function errorCallback(response){
                    deferred.reject();
                });
                
                return deferred.promise;
            }
       }     
}]);