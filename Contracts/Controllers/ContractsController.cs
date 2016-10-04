using System.Linq;
using System.Web.Mvc;
using Contracts.Models;

namespace Contracts.Controllers
{
    public class ContractsController : Controller
    {
        private readonly ApplicationDbContext _context;

        public ContractsController()
        {
            _context = new ApplicationDbContext();
        }

        public ActionResult Create()
        {
            var viewModel = new ContractViewModel
            {
                Types = _context.Positions.ToList()
            };

            return View(viewModel);
        }


        [HttpPost]
        public ActionResult Create(ContractViewModel viewModel)
        {
            var contract = new Contract
            {
                Name = viewModel.Name,
                Experience = viewModel.Experience,
                TypeId = viewModel.Type,
                Salary = viewModel.Salary
            };

            _context.Contracts.Add(contract);
            _context.SaveChanges();

            return RedirectToAction("Index", "Home");
        }
    }
}
