using Domain;
using NUnit.Framework;

namespace Game.Tests.Unit.NeighbourCounterTests
{
    [TestFixture]
    public class HasLiveCellLiveCellTests
    {
        private bool _expectedResult;
        private bool _actualResult;

        [OneTimeSetUp]
        public void GivenANeighbourCounterHasLiveCellsMethod_WhenALiveCellIsPassed()
        {
            _expectedResult = true;

            var neighbourCounter = new NeighbourCounter();

            var cells = new[,] {
                {
                    new Cell {Alive = true}, 
                    new Cell {Alive = true},
                    new Cell {Alive = true}
                },
                {
                    new Cell {Alive = true},
                    new Cell {Alive = true},
                    new Cell {Alive = true}
                },
                {
                    new Cell {Alive = true},
                    new Cell {Alive = true},
                    new Cell {Alive = true}
                }
            };

            _actualResult = neighbourCounter.HasLiveCell(0, 0, cells);
        }

        [Test]
        public void ThenTheMethodReturnsTrue()
        {
            Assert.That(_actualResult, Is.EqualTo(_expectedResult));
        }
    }
}
