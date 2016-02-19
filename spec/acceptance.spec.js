var game = require("./../game");

describe('A game of life', function(){

    describe('Any dead cell with exactly three live neighbours', function() {
        
        var input = [
            ['.','.','.','.'],
            ['.','.','.','.'],
            ['.','.','*','.'],
            ['.','*','*','.'],
            ['.','.','.','.'],
            ['.','.','.','.']
        ];        
        
        it('becomes a live cell', function() {
                
            var expectedResult = [
                [".",".",".","."],
                [".",".",".","."],
                [".","*","*","."],
                [".","*","*","."],
                [".",".",".","."],
                [".",".",".","."]
            ]
            
            var actualResult = game.run(input);
        
            expect(actualResult).toEqual(expectedResult);
        });   
    });
    
    describe('Any live cell with fewer than two live neighbours', function(){
        var input = [
            ['.','.','.','.'],
            ['.','.','.','.'],
            ['.','.','.','.'],
            ['.','.','*','.'],
            ['.','.','.','.'],
            ['.','.','.','.']
        ];   
        
        it('dies', function(){
            var expectedResult = [
                [".",".",".","."],
                [".",".",".","."],
                [".",".",".","."],
                [".",".",".","."],
                [".",".",".","."],
                [".",".",".","."]
            ]
            
            var actualResult = game.run(input);
        
            expect(actualResult).toEqual(expectedResult);
        });
    })
    
    describe('Any live cell with more than three live neighbours', function(){
        var input = [
            ['.','.','.','.'],
            ['.','.','*','.'],
            ['.','*','*','.'],
            ['.','*','*','.'],
            ['.','.','.','.'],
            ['.','.','.','.']
        ];   
        
        it('dies', function(){
            var expectedResult = [
                [".",".",".","."],
                [".","*","*","."],
                [".",".",".","*"],
                [".","*","*","."],
                [".",".",".","."],
                [".",".",".","."]
            ]
            
            var actualResult = game.run(input);
               
            expect(actualResult).toEqual(expectedResult);
        });
    })
});
    