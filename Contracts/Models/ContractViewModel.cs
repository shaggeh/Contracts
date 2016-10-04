using System.Collections.Generic;

namespace Contracts.Models
{
    public class ContractViewModel
    {
        public string Name { get; set; }
        public int Type { get; set; }
        public IEnumerable<Position> Types { get; set; }
        public int Salary { get; set; }
        public int Experience { get; set; }
    }
}
