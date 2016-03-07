angular.module('gameOfLife')
    .directive('cellGrid', ['$compile', function($compile){
       var directive = {
           restrict: 'E',
           template:'',
           link: link
           //compile: compile
       };
       return directive;
       
       function compile(scope){
          scope.checkChange = function(x, y){
            scope.cellData[x][y] = (scope.cellData[x][y] === '.') ? '*' : '.';
          }
          
           var innerHtml = '<input type="checkbox" ng-change="checkChange(0,0)" />';
           
           return $compile(innerHtml);
       
       };
       
       function link(scope, element, attrs){
           scope.RefreshCells = function(){
               
                var table = angular.element("<table></table>");
                         
                scope.cellModel = {};
           
                for(var x = 0; x < scope.cellsX; x++){
                    scope.cellData.push([]);
                    scope.cellModel[x] = {};
                    var row = angular.element("<row></row>")
                    table.append(row);
                    
                    for(var y = 0; y < scope.cellsY; y++){
                        scope.cellData[x].push('.')                        
                        var cell = angular.element("<td></td>");
                        row.append(cell);
                                                                                                
                        cell.append('<input type="checkbox" ng-checked="{{checked}}" ng-model="cellModel[' + x + '][' + y + '][\'checked\']" ng-change="checkChange('+ x + ',' + y + ')" />');
                                                
                        scope.cellModel[x][y] = {"checked" :"false"};                  
                    }
                }
                
                $compile(table)(scope);
                element.append(table);
           }
           
           scope.RefreshCells();
       
           scope.checkChange = function(x, y){
               scope.cellData[x][y] = (scope.cellData[x][y] == '.') ? '*' : '.';
           }
           
           scope.refreshFromData = function(){
               for(var x = 0; x < scope.cellsX; x++){
                    for(var y = 0; y < scope.cellsY; y++){
                        scope.cellModel[x][y]["checked"] = (scope.cellData[x][y] == '*');
                    }
               }
           }
        }
    }]);