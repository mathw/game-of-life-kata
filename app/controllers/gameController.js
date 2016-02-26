angular.module('gameOfLife')
    .controller("gameController", ['$scope', 'gameService', function($scope, gameService){
              
       gameService.getHelloWorld()
                  .then(function(data){
                        $scope.HelloWorld = data.message;
                    }, function(message){
                        $scope.HelloWorld = message;
                    }),
                                
       $scope.postHelloWorld = function(){
           gameService.postHelloWorld()
                .then(function(success){
                    alert("Post Success");
                }, function(fail){
                    alert("Post Fail");
                });
       }
        
    }]);