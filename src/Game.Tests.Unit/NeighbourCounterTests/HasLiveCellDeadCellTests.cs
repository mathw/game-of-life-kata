using Domain;
using NUnit.Framework;

namespace Game.Tests.Unit.NeighbourCounterTests
{
    [TestFixture]
    public class HasLiveCellDeadCellTests
    {
        private bool _expectedResult;
        private bool _actualResult;

        [OneTimeSetUp]
        public void GivenANeighbourCounterHasLiveCellsMethod_WhenADeadCellIsPassed()
        {
            _expectedResult = false;

            var neighbourCounter = new NeighbourCounter();

            var cells = new[,] {
                {
                    new Cell {Alive = false}, 
                    new Cell {Alive = false},
                    new Cell {Alive = false}
                },
                {
                    new Cell {Alive = false},
                    new Cell {Alive = false},
                    new Cell {Alive = false}
                },
                {
                    new Cell {Alive = false},
                    new Cell {Alive = false},
                    new Cell {Alive = false}
                }
            };

            _actualResult = neighbourCounter.HasLiveCell(0, 0, cells);
        }

        [Test]
        public void ThenTheMethodReturnsFalse()
        {
            Assert.That(_actualResult, Is.EqualTo(_expectedResult));
        }
    }
}
