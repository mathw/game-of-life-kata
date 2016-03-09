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
       $scope.cellData = [],
            
       $scope.RefreshCells = function(){
            $scope.cellData = [];                               
            for(var x = 0; x < $scope.cellsX; x++){
                $scope.cellData.push([]);                
                for(var y = 0; y < $scope.cellsY; y++){
                    $scope.cellData[x].push(false)                              
                }
            }
        },
        
        $scope.RefreshCells()
            
    }]);