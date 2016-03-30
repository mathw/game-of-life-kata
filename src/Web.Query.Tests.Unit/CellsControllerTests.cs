using Domain;
using Game;
using Moq;
using NUnit.Framework;
using Web.Query.Controllers;
using Web.Query.Models;
using System.Web.Script.Serialization;

namespace Web.Query.Tests.Unit
{
    [TestFixture]
    public class CellsControllerTests
    {
        private CellsContainer _expectedResponse;
        private CellsContainer _actualResponse;

        private Mock<IRunner> _mockRunner;

        [OneTimeSetUp]
        public void GivenACellsControllerPostMethod_WhenThatMethodIsCalled()
        {
            var request = new CellsContainer
            {
                Cells = new[]
                {
                    new[] {false, false, false},
                    new[] {false, true, true},
                    new[] {false, false, true}
                }
            };

            _expectedResponse = new CellsContainer
            {
                Cells = new[]
                {
                    new[] {false, false, false},
                    new[] {false, true, true},
                    new[] {false, true, true}
                }
            };

            var runnerReturn = new[,]
            {
                {new Cell { Alive = false}, new Cell {Alive = false}, new Cell {Alive = false} },
                {new Cell { Alive = false}, new Cell {Alive = true}, new Cell {Alive = true} },
                {new Cell { Alive = false}, new Cell {Alive = true}, new Cell {Alive = true} }
            };

            _mockRunner = new Mock<IRunner>();
            _mockRunner.Setup(r => r.Run(It.IsAny<Cell[,]>())).Returns(runnerReturn);

            var cellsController = new CellsController(_mockRunner.Object);
            _actualResponse = cellsController.Post(request);
        }

        [Test]
        public void ThenTheControllerShouldReturnTheCorrectCellsDto()
        {
            var serializer = new JavaScriptSerializer();
            var expectedJson = serializer.Serialize(_expectedResponse);
            var actualJson = serializer.Serialize(_actualResponse);

            Assert.That(actualJson, Is.EqualTo(expectedJson));
        }

        [Test]
        public void ThenTheRunnerShouldBeCalledOnce()
        {
            _mockRunner.Verify(r=> r.Run(It.IsAny<Cell[,]>()), Times.Once);
        }
    }
}
