using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using courseWorkDataBases.Models;
using Microsoft.AspNetCore.Authorization;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace courseWorkDataBases.Controllers
{
    [Route("api/[controller]")]
    public class SubjectsController : Controller
    {
        private readonly GroupsAppContext _dbContext;

        public SubjectsController(GroupsAppContext dbContext)
        {
            _dbContext = dbContext;
        }

        // GET: api/values
        [HttpGet]
        public IEnumerable<Subject> Get()
        {
            return _dbContext.Subjects;
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var subject = _dbContext.Subjects.FirstOrDefault(x => x.Id == id);

            if(subject != null)
            {
                return new ObjectResult(subject);
            }
            else
            {
                return new NotFoundResult();
            }
        }

        // POST api/values
        [Authorize]
        [HttpPost]
        public IActionResult Post([FromBody]Subject subject)
        {
            if(subject.Id == null)
            {
                _dbContext.Subjects.Add(subject);

                _dbContext.SaveChanges();

                return new ObjectResult(subject);
            }
            else
            {
                var existingSubject = _dbContext.Subjects.FirstOrDefault(x => x.Id == subject.Id);

                existingSubject.Name = subject.Name;

                _dbContext.SaveChanges();

                return new ObjectResult(existingSubject);
            }
        }

        // PUT api/values/5
        [Authorize]
        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody]Subject subject)
        {
            var existingAudience = _dbContext.Subjects.FirstOrDefault(x => x.Id == id);

            existingAudience.Name = subject.Name;

            _dbContext.SaveChanges();

            return new ObjectResult(existingAudience);
        }

        // DELETE api/values/5
        [Authorize]
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var subject = _dbContext.Subjects.FirstOrDefault(x => x.Id == id);

            _dbContext.Subjects.Remove(subject);

            _dbContext.SaveChanges();

            return new StatusCodeResult(200);
        }
    }
}