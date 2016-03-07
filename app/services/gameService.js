angular.module('gameOfLife')
    .factory('gameService', ['$http', '$q', function($http, $q){
       
       return {
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