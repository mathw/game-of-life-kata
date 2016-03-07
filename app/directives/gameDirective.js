angular.module('gameOfLife')
    .directive('cellGrid', ['$compile', function($compile){
       var directive = {
           restrict: 'E',
           template:'',
           link: link
       };
       return directive;
             
       function link(scope, element, attrs){
           scope.RefreshCells = function(){
               
                var table = angular.element("<table></table>");
                                   
                for(var x = 0; x < scope.cellsX; x++){
                    scope.cellData.push([]);
                    var row = angular.element("<row></row>")
                    table.append(row);
                    
                    for(var y = 0; y < scope.cellsY; y++){
                        scope.cellData[x].push(false)                        
                        var cell = angular.element("<td></td>");
                        row.append(cell);
                                                                                                
                        cell.append('<input type="checkbox" ng-checked="{{cellData[' + x + '][' + y + ']}}" ng-model="cellData[' + x + '][' + y + ']" />');       
                    }
                }
                
                $compile(table)(scope);
                element.append(table);
           }
           
           scope.RefreshCells();
        }
    }]);