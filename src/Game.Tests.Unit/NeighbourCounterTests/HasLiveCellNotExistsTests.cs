using Domain;
using NUnit.Framework;

namespace Game.Tests.Unit.NeighbourCounterTests
{
    [TestFixture]
    public class HasLiveCellNotExistsTests
    {
        private bool _expectedResult;
        private bool _actualResult;

        [OneTimeSetUp]
        public void GivenANeighbourCounterHasLiveCellsMethod_WhenANonExistingIndexIsPassed()
        {
            _expectedResult = false;

            var neighbourCounter = new NeighbourCounter();

            var cells = new[,] {
                {
                    new Cell {Alive = false},
                    new Cell {Alive = false}
                }
            };

            _actualResult = neighbourCounter.HasLiveCell(1, 2, cells);
        }

        [Test]
        public void ThenTheMethodReturnsFalse()
        {
            Assert.That(_actualResult, Is.EqualTo(_expectedResult));
        }
    }
}
