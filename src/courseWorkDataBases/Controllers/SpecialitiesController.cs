using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using courseWorkDataBases.Models;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace courseWorkDataBases.Controllers
{
    [Route("api/[controller]")]
    public class SpecialitiesController : Controller
    {
        private GroupsAppContext _dbContext;

        public SpecialitiesController(GroupsAppContext context)
        {
            _dbContext = context;
        }

        // GET: api/values
        [HttpGet]
        public IEnumerable<Speciality> Get()
        {
            return _dbContext.Specialities;
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var speciality = _dbContext.Specialities.FirstOrDefault(x => x.Id == id);

            if(speciality != null)
            {
                return new ObjectResult(speciality);
            }
            else
            {
                return new NotFoundResult();
            }
        }

        // POST api/values
        [HttpPost]
        public IActionResult Post([FromBody]Speciality speciality)
        {
            if(speciality.Id == null)
            {
                _dbContext.Specialities.Add(speciality);

                _dbContext.SaveChanges();

                return new ObjectResult(speciality);
            }
            else
            {
                var existingSpeciality = _dbContext.Specialities.FirstOrDefault(x => x.Id == speciality.Id);

                existingSpeciality.Name = speciality.Name;

                _dbContext.SaveChanges();

                return new ObjectResult(existingSpeciality);
            }
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody]Speciality speciality)
        {
            var existingSpeciality = _dbContext.Specialities.FirstOrDefault(x => x.Id == id);

            existingSpeciality.Name = speciality.Name;

            _dbContext.SaveChanges();

            return new ObjectResult(existingSpeciality);
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var speciality = _dbContext.Specialities.FirstOrDefault(x => x.Id == id);

            _dbContext.Specialities.Remove(speciality);

            _dbContext.SaveChanges();

            return new StatusCodeResult(200);
        }
    }
}
