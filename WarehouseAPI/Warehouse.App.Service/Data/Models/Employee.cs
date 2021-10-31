using System.ComponentModel.DataAnnotations;

namespace Warehouse.App.Service.Data.Models
{
    public class Employee
    {
        [Key]
        [Required]
        public string Id { get; set; }
        [Required]
        public string FirstName { get; set; }
        [Required]
        public string LastName { get; set; }
        [Required]
        public string Login { get; set; }
        [Required]
        public string Password { get; set; }
        [Required]
        public int RankdId { get; set; }
        [Required]
        public string SubervisorId { get; set; }
    }
}
