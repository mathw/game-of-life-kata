angular.module('gameOfLife')
    .controller("gameController", ['$scope', 'gameService', function($scope, gameService){
              
       gameService.getHelloWorld()
                  .then(function(data){
                        $scope.HelloWorld = data.message;
                    }, function(message){
                        $scope.HelloWorld = message;
                    }),
                                
       $scope.postCells = function(){
                     
           gameService.postCells($scope.cellData)
                .then(function(data){
                    $scope.cellData = data;
                    $scope.refreshFromData();
                }, function(){
                    
                });
       },
       
       $scope.cellsX = 4,
       $scope.cellsY = 4,
       $scope.cellData = [];
            
    }]);