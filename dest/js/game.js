"use strict";
var Game = (function () {
    function Game(neighbourCounter) {
        this.neighbourCounter = neighbourCounter;
    }
    Game.prototype.startGame = function () {
        var inputElements = this.getCellInputElements();
        var neighbourCountGrid = this.neighbourCounter.countNeighbours(inputElements);
        for (var row = 0; row < enums.CELL_COUNT_X; row++) {
            for (var col = 0; col < enums.CELL_COUNT_Y; col++) {
                var neighbourCount = neighbourCountGrid[row][col];
                var cell = inputElements[row][col];
                cell.checked = this.checkForUnderpopulation(neighbourCount, cell);
                cell.checked = this.checkForOvercrowding(neighbourCount, cell);
                cell.checked = this.checkForMating(neighbourCount, cell);
            }
        }
    };
    Game.prototype.getCellInputElements = function () {
        var inputElements = [];
        for (var row = 0; row < enums.CELL_COUNT_X; row++) {
            inputElements.push(new Array());
            for (var col = 0; col < enums.CELL_COUNT_Y; col++) {
                inputElements[row][col] = document.getElementById(row + '_' + col);
            }
        }
        return inputElements;
    };
    Game.prototype.checkForUnderpopulation = function (neighbourCount, existingCell) {
        return (neighbourCount < 2) ? enums.DEAD_CELL : existingCell.checked;
    };
    Game.prototype.checkForOvercrowding = function (neighbourCount, existingCell) {
        return (neighbourCount > 3) ? enums.DEAD_CELL : existingCell.checked;
    };
    Game.prototype.checkForMating = function (neighbourCount, existingCell) {
        return (neighbourCount == 3) ? enums.LIVE_CELL : existingCell.checked;
    };
    return Game;
}());
