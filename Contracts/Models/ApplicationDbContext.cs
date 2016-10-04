using System.Data.Entity;
using Microsoft.AspNet.Identity.EntityFramework;

namespace Contracts.Models
{
    public class ApplicationDbContext : IdentityDbContext<ApplicationUser>
    {

        public DbSet<Contract> Contracts { get; set; }

        public DbSet<Position> Positions { get; set; }

        public ApplicationDbContext()
            : base("DefaultConnection", throwIfV1Schema: false)
        {
        }

        public static ApplicationDbContext Create()
        {
            return new ApplicationDbContext();
        }
    }
}