using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using courseWorkDataBases.Models;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace courseWorkDataBases.Controllers
{
    [Route("api/[controller]")]
    public class AudiencesController : Controller
    {
        private readonly GroupsAppContext _dbContext;

        public AudiencesController(GroupsAppContext dbContext)
        {
            _dbContext = dbContext;
        }

        // GET: api/values
        [HttpGet]
        public IEnumerable<Audience> Get()
        {
            return _dbContext.Audiences;
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var audience = _dbContext.Audiences.FirstOrDefault(x => x.Id == id);

            if(audience != null)
            {
                return new ObjectResult(audience);
            }
            else
            {
                return new NotFoundResult();
            }
        }

        // POST api/values
        [HttpPost]
        public IActionResult Post([FromBody]Audience audience)
        {
            if(audience.Id == null)
            {
                _dbContext.Audiences.Add(audience);

                _dbContext.SaveChanges();

                return new ObjectResult(audience);
            }
            else
            {
                var existingAudience = _dbContext.Audiences.FirstOrDefault(x => x.Id == audience.Id);

                existingAudience.Number = audience.Number;
                existingAudience.Quantity = audience.Quantity;
                existingAudience.Type = audience.Type;

                _dbContext.SaveChanges();

                return new ObjectResult(existingAudience);
            }
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody]Audience audience)
        {
            var existingAudience = _dbContext.Audiences.FirstOrDefault(x => x.Id == id);

            existingAudience.Number = audience.Number;
            existingAudience.Quantity = audience.Quantity;
            existingAudience.Type = audience.Type;

            _dbContext.SaveChanges();

            return new ObjectResult(existingAudience);
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var audience = _dbContext.Audiences.FirstOrDefault(x => x.Id == id);

            _dbContext.Audiences.Remove(audience);

            _dbContext.SaveChanges();

            return new StatusCodeResult(200);
        }
    }
}