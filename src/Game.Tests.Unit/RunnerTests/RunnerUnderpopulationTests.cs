using Domain;
using Moq;
using NUnit.Framework;

namespace Game.Tests.Unit.RunnerTests
{
    [TestFixture]
    public class RunnerUnderpopulationTests
    {
        private Mock<INeighbourCounter> _mockNeighbourCounter;

        private Cell[,] _providedCells;
        private Cell[,] _expectedCells;
        private Cell[,] _actualCells;
      
        [OneTimeSetUp]
        public void GivenAnUnderpopulatedArrayOfCells_WhenTheGameIsRun()
        {
            _providedCells = new[,]{
                {new Cell {Alive = false}, new Cell {Alive = false}, new Cell {Alive = false}, new Cell {Alive = false}},
                {new Cell {Alive = false}, new Cell {Alive = true}, new Cell {Alive = false}, new Cell {Alive = false}},
                {new Cell {Alive = false}, new Cell {Alive = false}, new Cell {Alive = false}, new Cell {Alive = false}},
                {new Cell {Alive = false}, new Cell {Alive = false}, new Cell {Alive = false}, new Cell {Alive = false}}
            };

            _expectedCells = new[,]{
                {new Cell {Alive = false}, new Cell {Alive = false}, new Cell {Alive = false}, new Cell {Alive = false}},
                {new Cell {Alive = false}, new Cell {Alive = false}, new Cell {Alive = false}, new Cell {Alive = false}},
                {new Cell {Alive = false}, new Cell {Alive = false}, new Cell {Alive = false}, new Cell {Alive = false}},
                {new Cell {Alive = false}, new Cell {Alive = false}, new Cell {Alive = false}, new Cell {Alive = false}}
            };

            var cellCounts = new[,]{
                {1,1,1,0},
                {1,0,1,0},
                {1,1,1,0},
                {0,0,0,0}
            };

            _mockNeighbourCounter = new Mock<INeighbourCounter>();
            _mockNeighbourCounter.Setup(counter => counter.CountNeighbours(_providedCells)).Returns(cellCounts);

            var runner = new Runner(_mockNeighbourCounter.Object);
            _actualCells = runner.Run(_providedCells);
        }

        [Test]
        public void TheNeighbourCounterShouldBeCalledOnce()
        {
            _mockNeighbourCounter.Verify(counter => counter.CountNeighbours(It.IsAny<Cell[,]>()), Times.Once);
        }

        [Test]
        public void ThenTheCellIsExpectedToDie()
        {
            for (var row = 0; row < _actualCells.GetLength(0); row++)
            {
                for (var col = 0; col < _actualCells.GetLength(1); col++)
                {
                    Assert.That(_actualCells[row, col].Alive, Is.EqualTo(_expectedCells[row, col].Alive),
                        $"Row: {row}, Col: {col}");
                }
            }
        }
    }
}
