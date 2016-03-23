using System;
using Domain;

namespace Game
{
    public interface INeighbourCounter
    {
        bool HasLiveCell(int row, int col, Cell[,] cells);
    }

    public class NeighbourCounter : INeighbourCounter
    {
        public bool HasLiveCell(int row, int col, Cell[,] cells)
        {
            if (row < 0) return false;
            if (col < 0) return false;
            if (cells.GetLength(0) <= row) return false;
            if (cells.GetLength(1) <= col) return false;

            return cells[row, col].Alive;
        }
    }
}
