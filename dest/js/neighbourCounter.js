"use strict";
var counters;
(function (counters) {
    var NeighbourCounter = (function () {
        function NeighbourCounter() {
        }
        NeighbourCounter.prototype.countNeighbours = function (cells) {
            var cellCounts = [];
            for (var row = 0; row < cells.length; row++) {
                cellCounts.push([]);
                for (var col = 0; col < cells[row].length; col++) {
                    var count = 0;
                    if (this.hasLiveCell(row - 1, col - 1, cells))
                        count++;
                    if (this.hasLiveCell(row, col - 1, cells))
                        count++;
                    if (this.hasLiveCell(row + 1, col - 1, cells))
                        count++;
                    if (this.hasLiveCell(row - 1, col, cells))
                        count++;
                    if (this.hasLiveCell(row + 1, col, cells))
                        count++;
                    if (this.hasLiveCell(row - 1, col + 1, cells))
                        count++;
                    if (this.hasLiveCell(row, col + 1, cells))
                        count++;
                    if (this.hasLiveCell(row + 1, col + 1, cells))
                        count++;
                    cellCounts[row][col] = count;
                }
            }
            return cellCounts;
        };
        NeighbourCounter.prototype.hasLiveCell = function (row, col, cells) {
            if (!cells[row])
                return enums.DEAD_CELL;
            if (!cells[row][col])
                return enums.DEAD_CELL;
            if (cells[row][col].checked != enums.LIVE_CELL)
                return enums.DEAD_CELL;
            return enums.LIVE_CELL;
        };
        return NeighbourCounter;
    }());
    counters.NeighbourCounter = NeighbourCounter;
})(counters || (counters = {}));
