using System.Threading.Tasks;
using Warehouse.App.Service.Data.Models;

namespace Warehouse.App.Service.Interfaces
{
    public interface IRepository
    {
        Task<Employee> GetEmployeeAsync(string login, string password);
    }
}
