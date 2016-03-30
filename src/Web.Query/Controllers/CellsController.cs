using System.Web.Http;
using Domain;
using Game;

namespace Web.Query.Controllers
{
    public class CellsController : ApiController
    {
        private readonly IRunner _runner;

        public CellsController(IRunner runner)
        {
            _runner = runner;
        }

        public bool[][] Post(bool[][] request)
        {
            var cells = new Cell[request.GetLength(0), request[0].Length];

            for (var row = 0; row < request.GetLength(0); row++)
                for (var col = 0; col < request[row].GetLength(0); col++)
                    cells[row, col] = new Cell {Alive = request[row][col]};
            
            var adjustedCells = _runner.Run(cells);

            var response = new bool[adjustedCells.GetLength(0)][];

            for (var row = 0; row < adjustedCells.GetLength(0); row++)
            {
                response[row] = new bool[adjustedCells.GetLength(1)];

                for (var col = 0; col < adjustedCells.GetLength(1); col++)
                    response[row][col] = adjustedCells[row, col].Alive;
            }

            return response;
        }
    }
}
