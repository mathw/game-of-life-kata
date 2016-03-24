using System;
using Domain;

namespace Game
{
    public interface INeighbourCounter
    {
        int[,] CountNeighbours(Cell[,] cells);
        bool HasLiveCell(int row, int col, Cell[,] cells);
    }

    public class NeighbourCounter : INeighbourCounter
    {
        private const int ROW_INDEX = 0;
        private const int COL_INDEX = 1;

        public int[,] CountNeighbours(Cell[,] cells)
        {
            var cellCounts = new int[cells.GetLength(ROW_INDEX),cells.GetLength(COL_INDEX)];

            for (var row = 0; row < cells.GetLength(ROW_INDEX); row++)
            {
                for (var col = 0; col < cells.GetLength(COL_INDEX); col++)
                {
                    var count = 0;
                    if (HasLiveCell(row - 1, col - 1, cells)) count++;
                    if (HasLiveCell(row, col - 1, cells)) count++;
                    if (HasLiveCell(row + 1, col - 1, cells)) count++;
                    if (HasLiveCell(row - 1, col, cells)) count++;
                    if (HasLiveCell(row + 1, col, cells)) count++;
                    if (HasLiveCell(row - 1, col + 1, cells)) count++;
                    if (HasLiveCell(row, col + 1, cells)) count++;
                    if (HasLiveCell(row + 1, col + 1, cells)) count++;

                    cellCounts[row, col] = count;
                }
            }

            return cellCounts;
        }

        public bool HasLiveCell(int row, int col, Cell[,] cells)
        {
            if (row < 0) return false;
            if (col < 0) return false;
            if (cells.GetLength(ROW_INDEX) <= row) return false;
            if (cells.GetLength(COL_INDEX) <= col) return false;

            return cells[row, col].Alive;
        }
    }
}
