using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;
using Warehouse.App.Service.Data.Models;
using Warehouse.App.Service.Interfaces;

namespace Warehouse.App.Service.Data
{
    public class Repository : IRepository
    {
        private readonly WarehouseDbContext context;

        public Repository(WarehouseDbContext context)
        {
            this.context = context;
        }

        public async Task<Employee> GetEmployeeAsync(string login, string password)
        {
            return await context.Employess.FirstOrDefaultAsync(e => e.Login == login && e.Password == password);
        }
    }
}
