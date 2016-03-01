angular.module('gameOfLife')
    .directive('cellGrid', function(){
       var directive = {
           restrict: 'E',
           template:'',
           link: link
       };
       return directive;
       
       function onChange(scope, element, attrs){     
           var innerHtml = '<table>';
           
            for(var x = 0; x < scope.cellsX; x++){
                innerHtml += '<tr>';
                
                for(var y = 0; y < scope.cellsY; y++){
                    innerHtml += '<td>';
                    innerHtml += '<input type="checkbox">';
                    innerHtml += '</td>';
                }
                
                innerHtml += '</tr>';
            }
            
            innerHtml += '</table>';
            
            element.html(innerHtml);
       }
       
       function link(scope, element, attrs){
           scope.$watch('cellsX', function(oldValue, newValue){
               onChange(scope, element, attrs);
           });
            scope.$watch('cellsY', function(oldValue, newValue){
               onChange(scope, element, attrs);
           });
       }
       

        
    });