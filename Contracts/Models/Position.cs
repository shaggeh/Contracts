using System.ComponentModel.DataAnnotations;

namespace Contracts.Models
{
    public class Position
    {
        [Required]
        [StringLength(255)]
        public string Name { get; set; }

        public int Id { get; set; }
    }
}
