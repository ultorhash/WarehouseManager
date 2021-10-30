using Microsoft.EntityFrameworkCore;
using Warehouse.App.Service.Data.Models;

namespace Warehouse.App.Service.Data
{
    public class WarehouseDbContext : DbContext
    {
        public WarehouseDbContext(DbContextOptions<WarehouseDbContext> options)
            : base(options)
        {

        }

        public DbSet<Employee> Employess { get; set; }
    }
}
