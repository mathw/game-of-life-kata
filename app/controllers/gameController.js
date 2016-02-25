angular.module('gameOfLife')
    .controller("gameController", ['$scope', 'gameService', function($scope, gameService){
       
       gameService.getHelloWorld().then(function(data){
                                    $scope.HelloWorld = data.message;
                                }, function(message){
                                    $scope.HelloWorld = message;
                                }) 
        
    }]);