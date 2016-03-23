using Domain;
using NUnit.Framework;

namespace Game.Tests.Unit.NeighbourCounterTests
{
    [TestFixture]
    public class HasLiveCellNotExistsTests
    {
        private bool _expectedResult;

        private NeighbourCounter _neighbourCounter;
        private Cell[,] _cells;

        [OneTimeSetUp]
        public void GivenANeighbourCounterHasLiveCellsMethod()
        {
            _expectedResult = false;

            _neighbourCounter = new NeighbourCounter();

            _cells = new[,] {
                {
                    new Cell {Alive = true},
                    new Cell {Alive = true}
                },
                                {
                    new Cell {Alive = true},
                    new Cell {Alive = true}
                }
            };
        }

        [Test]
        public void WhenANegativeRowAndColumnIsPassed_ThenTheMethodShouldReturnFalse()
        {
            var actualResult = _neighbourCounter.HasLiveCell(-1, -1, _cells);
            Assert.That(actualResult, Is.EqualTo(_expectedResult));
        }

        [Test]
        public void WhenANegativeRowIsPassed_ThenTheMethodShouldReturnFalse()
        {
            var actualResult = _neighbourCounter.HasLiveCell(-1, 0, _cells);
            Assert.That(actualResult, Is.EqualTo(_expectedResult));
        }

        [Test]
        public void WhenANegativeColumnIsPassed_ThenTheMethodShouldReturnFalse()
        {
            var actualResult = _neighbourCounter.HasLiveCell(0, -1, _cells);
            Assert.That(actualResult, Is.EqualTo(_expectedResult));
        }

        [Test]
        public void WhenANonExistingRowIsPassed_ThenTheMethodShouldReturnFalse()
        {
            var actualResult = _neighbourCounter.HasLiveCell(2, 0, _cells);
            Assert.That(actualResult, Is.EqualTo(_expectedResult));
        }

        [Test]
        public void WhenANonExistingColumnIsPassed_ThenTheMethodShouldReturnFalse()
        {
            var actualResult = _neighbourCounter.HasLiveCell(0, 2, _cells);
            Assert.That(actualResult, Is.EqualTo(_expectedResult));
        }

        [Test]
        public void WhenANonExistingRowAndColumnIsPassed_ThenTheMethodShouldReturnFalse()
        {
            var actualResult = _neighbourCounter.HasLiveCell(2, 2, _cells);
            Assert.That(actualResult, Is.EqualTo(_expectedResult));
        }
    }
}
