using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using Warehouse.App.Service.Data.Models;
using Warehouse.App.Service.Interfaces;

namespace Warehouse.App.Service.Controllers
{
    [ApiExplorerSettings(GroupName = "Authentication")]
    [EnableCors]
    [ApiController]
    [Route("/login/auth")]
    public class EmployeeController : ControllerBase
    {
        private readonly IRepository repository;

        public EmployeeController(IRepository repository)
        {
            this.repository = repository;
        }

        [HttpPost]
        public async Task<ActionResult<Employee>> LoginAsync([FromBody] Employee data)
        {
            var employee = await repository.GetEmployeeAsync(data.Login, data.Password);
            return Ok(employee);
        }
    }
}
