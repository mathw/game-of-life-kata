var game = require("./../index");

describe('Any dead cell with exactly three live neighbours becomes a live cell', function() {
    
    var input = [
        [".",".",".","."],
        [".",".",".","."],
        [".",".","*","."],
        [".","*","*","."],
        [".",".",".","."],
        [".",".",".","."]
    ]
    
    it('contains cells', function() {
               
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
    