using System.ComponentModel.DataAnnotations;

namespace Contracts.Models
{
    public class Contract
    {
        [Required]
        public string Name { get; set; }

        public Position Type { get; set; }

        [Required]
        public int TypeId { get; set; }

        [Required]
        public int Experience { get; set; }

        [Required]
        public int Salary { get; set; }

        public int Id { get; set; }
    }
}
