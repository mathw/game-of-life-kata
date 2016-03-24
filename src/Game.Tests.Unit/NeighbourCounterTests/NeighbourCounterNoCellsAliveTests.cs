using Domain;
using NUnit.Framework;

namespace Game.Tests.Unit.NeighbourCounterTests
{
    [TestFixture]
    public class NeighbourCounterNoCellsAliveTests
    {
        private Cell[,] _cells;
        private int[,] _expectedCellCounts;
        private int[,] _actualCellCounts;

        [OneTimeSetUp]
        public void GivenANeighbourCounter_WhenNoCellsAreAlive()
        {
            _cells = new Cell[,]
            {
                {new Cell {Alive = false}, new Cell {Alive = false}, new Cell {Alive = false}, new Cell {Alive = false}},
                {new Cell {Alive = false}, new Cell {Alive = false}, new Cell {Alive = false}, new Cell {Alive = false}},
                {new Cell {Alive = false}, new Cell {Alive = false}, new Cell {Alive = false}, new Cell {Alive = false}},
                {new Cell {Alive = false}, new Cell {Alive = false}, new Cell {Alive = false}, new Cell {Alive = false}}
            };
            
            _expectedCellCounts = new int[,]
            {
                {0,0,0,0},
                {0,0,0,0},
                {0,0,0,0},
                {0,0,0,0}
            };

            var neighbourCounter = new NeighbourCounter();
            _actualCellCounts = neighbourCounter.CountNeighbours(_cells);
        }

        [Test]
        public void ThenAllTheCellCountsShouldBeZero()
        {
            Assert.That(_actualCellCounts, Is.EqualTo(_expectedCellCounts));
        }
    }
}
