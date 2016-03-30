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

        public CellsContainer Post(CellsContainer requestDto)
        {
            var cells = new Cell[requestDto.Cells.GetLength(0), requestDto.Cells[0].Length];

            for (var row = 0; row < requestDto.Cells.GetLength(0); row++)
                for (var col = 0; col < requestDto.Cells[row].GetLength(0); col++)
                    cells[row, col] = new Cell {Alive = requestDto.Cells[row][col]};


            var adjustedCells = _runner.Run(cells);
            
            var cellsDto = new CellsContainer
            {
                Cells = new bool[adjustedCells.GetLength(0)][]
            };

            for (var row = 0; row < adjustedCells.GetLength(0); row++)
            {
                cellsDto.Cells[row] = new bool[adjustedCells.GetLength(1)];

                for (var col = 0; col < adjustedCells.GetLength(1); col++)
                    cellsDto.Cells[row][col] = adjustedCells[row, col].Alive;
            }

            return cellsDto;
        }
    }
}
