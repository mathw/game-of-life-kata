var game = require("./../game");

describe('In a game of life', function(){

    describe('any dead cell with exactly three live neighbours', function() {
        
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
    
    describe('any live cell with fewer than two live neighbours', function(){
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
    
    describe('any live cell with more than three live neighbours', function(){
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
    
    describe('any live cell with two live neighbours', function(){
        var input = [
            ['.','.','.','.'],
            ['.','*','*','.'],
            ['.','.','*','.'],
            ['.','.','.','.'],
            ['.','.','.','.'],
            ['.','.','.','.']
        ];   
        
        it('lives', function(){
            var expectedResult = [
                [".",".",".","."],
                [".","*","*","."],
                [".","*","*","."],
                [".",".",".","."],
                [".",".",".","."],
                [".",".",".","."]
            ]
            
            var actualResult = game.run(input);
               
            expect(actualResult).toEqual(expectedResult);
        });
    })
    
    describe('any live cell with three live neighbours', function(){
        var input = [
            ['.','.','.','.'],
            ['.','*','*','.'],
            ['.','*','*','.'],
            ['.','.','.','.'],
            ['.','.','.','.'],
            ['.','.','.','.']
        ];   
        
        it('lives', function(){
            var expectedResult = [
                [".",".",".","."],
                [".","*","*","."],
                [".","*","*","."],
                [".",".",".","."],
                [".",".",".","."],
                [".",".",".","."]
            ]
            
            var actualResult = game.run(input);
               
            expect(actualResult).toEqual(expectedResult);
        });
    })
});
    