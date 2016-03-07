angular.module('gameOfLife')
    .controller("gameController", ['$scope', 'gameService', function($scope, gameService){
                                
       $scope.postCells = function(){
                     
           gameService.postCells($scope.cellData)
                .then(function(data){
                    $scope.cellData = data;
                }, function(){
                    
                });
       },
       
       $scope.cellsX = 4,
       $scope.cellsY = 4,
       $scope.cellData = [];
            
    }]);