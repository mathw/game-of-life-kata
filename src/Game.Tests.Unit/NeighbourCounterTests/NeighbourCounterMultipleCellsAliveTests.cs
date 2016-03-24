using Domain;
using NUnit.Framework;

namespace Game.Tests.Unit.NeighbourCounterTests
{
    [TestFixture]
    public class NeighbourCounterMultipleCellsAliveTests
    {
        private Cell[,] _cells;
        private int[,] _expectedCellCounts;
        private int[,] _actualCellCounts;

        [OneTimeSetUp]
        public void GivenANeighbourCounter_WhenMultipleCellsAreAlive()
        {
            _cells = new[,]
            {
                {new Cell {Alive = false}, new Cell {Alive = false}, new Cell {Alive = false}, new Cell {Alive = false}},
                {new Cell {Alive = false}, new Cell {Alive = true}, new Cell {Alive = true}, new Cell {Alive = false}},
                {new Cell {Alive = false}, new Cell {Alive = true}, new Cell {Alive = false}, new Cell {Alive = false}},
                {new Cell {Alive = false}, new Cell {Alive = false}, new Cell {Alive = false}, new Cell {Alive = false}}
            };
            
            _expectedCellCounts = new[,]
            {
                {1,2,2,1},
                {2,2,2,1},
                {2,2,3,1},
                {1,1,1,0}
            };

            var neighbourCounter = new NeighbourCounter();
            _actualCellCounts = neighbourCounter.CountNeighbours(_cells);
        }

        [Test]
        public void ThenTheSurroundingCellsShouldContainTheExpectedCounts()
        {
            Assert.That(_actualCellCounts, Is.EqualTo(_expectedCellCounts));
        }
    }
}
