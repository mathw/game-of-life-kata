var neighbourCounter = require('./../serverjs/neighbourCounter');

describe('Given a neighbour counter', function() {
    describe("When no cells are alive", function(){
        it("should have zeros in every cell", function(){
            
            var cells = [
                ['.','.','.','.'],
                ['.','.','.','.'],
                ['.','.','.','.'],
                ['.','.','.','.'],
                ['.','.','.','.'],
                ['.','.','.','.']
            ]  
            
            var expected = [
                [ 0, 0, 0, 0 ],
                [ 0, 0, 0, 0 ],
                [ 0, 0, 0, 0 ],
                [ 0, 0, 0, 0 ],
                [ 0, 0, 0, 0 ],
                [ 0, 0, 0, 0 ]
            ];
            
            var actual = neighbourCounter.countNeighbours(cells);
            
            expect(actual).toEqual(expected);                        
        })
    });
    
    describe("When one cell is alive", function(){
        it("should have the correct count in its neighbours", function(){
            
            var cells = [
                ['.','.','.','.'],
                ['.','.','.','.'],
                ['.','*','.','.'],
                ['.','.','.','.'],
                ['.','.','.','.'],
                ['.','.','.','.']
            ]  
            
            var expected = [
                [ 0, 0, 0, 0 ],
                [ 1, 1, 1, 0 ],
                [ 1, 0, 1, 0 ],
                [ 1, 1, 1, 0 ],
                [ 0, 0, 0, 0 ],
                [ 0, 0, 0, 0 ]
            ];
            
            var actual = neighbourCounter.countNeighbours(cells);
            
            expect(actual).toEqual(expected);                        
        })
    });
    
        describe("When more than one cell is alive", function(){
        it("should have the correct count in its neighbours", function(){
            
            var cells = [
                ['.','.','.','.'],
                ['.','.','.','.'],
                ['.','*','*','.'],
                ['.','*','.','.'],
                ['.','.','.','.'],
                ['.','.','.','.']
            ]  
            
            var expected = [
                [ 0, 0, 0, 0 ],
                [ 1, 2, 2, 1 ],
                [ 2, 2, 2, 1 ],
                [ 2, 2, 3, 1 ],
                [ 1, 1, 1, 0 ],
                [ 0, 0, 0, 0 ]
            ];
            
            var actual = neighbourCounter.countNeighbours(cells);
            
            expect(actual).toEqual(expected);                        
        })
    });
});
    