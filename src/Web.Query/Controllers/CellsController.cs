using System.Linq;
using System.Runtime.ExceptionServices;
using System.Web.Http;
using Domain;
using Game;
using Web.Query.Models;

namespace Web.Query.Controllers
{
    public class CellsController : ApiController
    {
        private readonly IRunner _runner;

        public CellsController(IRunner runner)
        {
            _runner = runner;
        }

        public string Get()
        {
            return "Hello World";
        }

        public CellsDto Post(CellsDto requestDto)
        {
            var cells = new Cell[requestDto.Cells.GetLength(0), requestDto.Cells.GetLength(1)];

            for (var row = 0; row < requestDto.Cells.GetLength(0); row++)
                for (var col = 0; col < requestDto.Cells.GetLength(1); col++)
                    cells[row, col] = new Cell {Alive = requestDto.Cells[row][col]};



            return new CellsDto()
            {
                Cells = new[]
                {
                    new[] {false, false, false },
                    new[] {false, false, false },
                    new[] {false, false, false }
                }
            };
        }
    }
}
