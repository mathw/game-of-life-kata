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
            if (cells.Length <= row) return false;
            if (cells.GetLength(row) <= col) return false;

            return cells[row, col].Alive;
        }
    }
}
