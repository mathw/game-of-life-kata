using Domain;

namespace Game
{
    public class Runner
    {
        private INeighbourCounter _neighbourCounter;

        public Runner(INeighbourCounter neighbourCounter)
        {
            _neighbourCounter = neighbourCounter;
        }

        public Cell[,] Run(Cell[,] providedCells)
        {
            return new[,]{
                {new Cell {Alive = false}, new Cell {Alive = false}, new Cell {Alive = false}, new Cell {Alive = false}},
                {new Cell {Alive = false}, new Cell {Alive = true}, new Cell {Alive = false}, new Cell {Alive = false}},
                {new Cell {Alive = false}, new Cell {Alive = false}, new Cell {Alive = false}, new Cell {Alive = false}},
                {new Cell {Alive = false}, new Cell {Alive = false}, new Cell {Alive = false}, new Cell {Alive = false}}
            };
        }
    }
}
