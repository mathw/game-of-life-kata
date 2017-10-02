"use strict";
var CELL_COUNT_X = 3;
var CELL_COUNT_Y = 3;
var Game = (function () {
    function Game() {
        this.neighbourCounter = new counters.NeighbourCounter();
    }
    Game.prototype.startGame = function () {
        var cells = [];
        for (var row = 0; row < CELL_COUNT_X; row++) {
            for (var col = 0; col < CELL_COUNT_Y; col++) {
                cells[row][col] = document.getElementById(row + '_' + col);
            }
        }
        var neighbourCountGrid = this.neighbourCounter.countNeighbours(cells);
        for (var row = 0; row < CELL_COUNT_X; row++) {
            for (var col = 0; col < CELL_COUNT_Y; col++) {
                var neighbourCount = neighbourCountGrid[row][col];
                var cell = cells[row][col];
                cell.checked = this.checkForUnderpopulation(neighbourCount, cell);
                cell.checked = this.checkForOvercrowding(neighbourCount, cell);
                cell.checked = this.checkForMating(neighbourCount, cell);
            }
        }
    };
    Game.prototype.checkForUnderpopulation = function (neighbourCount, existingCell) {
        if (neighbourCount < 2) {
            return false;
        }
        return existingCell.checked;
    };
    Game.prototype.checkForOvercrowding = function (neighbourCount, existingCell) {
        if (neighbourCount > 3) {
            return false;
        }
        return existingCell.checked;
    };
    Game.prototype.checkForMating = function (neighbourCount, existingCell) {
        if (neighbourCount == 3) {
            return true;
        }
        return existingCell.checked;
    };
    return Game;
}());
