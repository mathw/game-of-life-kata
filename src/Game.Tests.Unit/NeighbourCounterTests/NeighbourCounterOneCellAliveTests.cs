using Domain;
using NUnit.Framework;

namespace Game.Tests.Unit.NeighbourCounterTests
{
    [TestFixture]
    public class NeighbourCounterOneCellAliveTests
    {
        private Cell[,] _cells;
        private int[,] _expectedCellCounts;
        private int[,] _actualCellCounts;

        [OneTimeSetUp]
        public void GivenANeighbourCounter_WhenOneCellIsAlive()
        {
            _cells = new Cell[,]
            {
                {new Cell {Alive = false}, new Cell {Alive = false}, new Cell {Alive = false}, new Cell {Alive = false}},
                {new Cell {Alive = false}, new Cell {Alive = false}, new Cell {Alive = false}, new Cell {Alive = false}},
                {new Cell {Alive = false}, new Cell {Alive = true}, new Cell {Alive = false}, new Cell {Alive = false}},
                {new Cell {Alive = false}, new Cell {Alive = false}, new Cell {Alive = false}, new Cell {Alive = false}}
            };
            
            _expectedCellCounts = new int[,]
            {
                {0,0,0,0},
                {1,1,1,0},
                {1,0,1,0},
                {1,1,1,0}
            };

            var neighbourCounter = new NeighbourCounter();
            _actualCellCounts = neighbourCounter.CountNeighbours(_cells);
        }

        [Test]
        public void ThenTheSurroundingCellsShouldCountAsOne()
        {
            Assert.That(_actualCellCounts, Is.EqualTo(_expectedCellCounts));
        }
    }
}
