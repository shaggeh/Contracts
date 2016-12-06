using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Web.Http;
using System.Web.Http.Description;
using Contracts.Models;

namespace Contracts.Controllers
{
    public class ContractsApiController : ApiController
    {
        private readonly ApplicationDbContext db = new ApplicationDbContext();

        // GET: api/Api
        public IQueryable<Contract> GetContracts()
        {
            return db.Contracts;
        }

        // GET: api/Api/5
        [ResponseType(typeof(Contract))]
        public IHttpActionResult GetContract(int id)
        {
            var contract = db.Contracts.Find(id);
            if (contract == null)
            {
                return NotFound();
            }

            return Ok(contract);
        }

        // PUT: api/Api/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutContract(int id, Contract contract)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != contract.Id)
            {
                return BadRequest();
            }

            db.Entry(contract).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ContractExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        [HttpGet]
        [Route("api/salaryCalculate/{typeId}/{exp}")]
        public int CalculateSalary(int typeId, int exp)
        {
            var salary = 0;

            switch (typeId)
            {
                case 1:
                    if (exp >= 1 && exp < 2)
                    {
                        salary = 2000;
                    }
                    else if (exp >= 2 && exp <= 4)
                    {
                        salary = 2700;
                    }
                    else if (exp > 4)
                    {
                        salary = 3200;
                    }

                    salary = salary + (exp * 100 + (salary / 4));

                    break;

                case 2:
                    if (exp >= 1 && exp < 3)
                    {
                        salary = 2500;
                    }
                    else if (exp >= 3 && exp <= 5)
                    {
                        salary = 5000;
                    }
                    else if (exp > 5)
                    {
                        salary = 5500;
                    }

                    salary = salary + (exp * 125);

                    break;
            }

            return salary;
        }

        // POST: api/Api
        [ResponseType(typeof(Contract))]
        public IHttpActionResult PostContract(Contract contract)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Contracts.Add(contract);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = contract.Id }, contract);
        }

        // DELETE: api/Api/5
        [HttpGet]
        [Route("api/deleteContract/{Id}")]
        public IHttpActionResult DeleteContract(int id)
        {
            Contract contract = db.Contracts.Find(id);
            if (contract == null)
            {
                return NotFound();
            }

            db.Contracts.Remove(contract);
            db.SaveChanges();

            return Ok(contract);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool ContractExists(int id)
        {
            return db.Contracts.Count(e => e.Id == id) > 0;
        }
    }
}