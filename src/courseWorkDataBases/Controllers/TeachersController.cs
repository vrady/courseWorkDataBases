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
    public class TeachersController : Controller
    {
        private readonly GroupsAppContext _dbContext;

        public TeachersController(GroupsAppContext dbContext)
        {
            _dbContext = dbContext;
        }

        // GET: api/values
        [HttpGet]
        public IEnumerable<Teacher> Get()
        {
            return _dbContext.Teachers;
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var teacher = _dbContext.Teachers.FirstOrDefault(x => x.Id == id);

            if(teacher != null)
            {
                return new ObjectResult(teacher);
            }
            else
            {
                return new NotFoundResult();
            }
        }

        // POST api/values
        [HttpPost]
        public IActionResult Post([FromBody]Teacher teacher)
        {
            if(teacher.Id == null)
            {
                _dbContext.Teachers.Add(teacher);

                _dbContext.SaveChanges();

                return new ObjectResult(teacher);
            }
            else
            {
                var existingTeacher = _dbContext.Teachers.FirstOrDefault(x => x.Id == teacher.Id);

                existingTeacher.FullName = teacher.FullName;

                _dbContext.SaveChanges();
                return new ObjectResult(existingTeacher);
            }
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody]Teacher teacher)
        {
            var existingTeacher = _dbContext.Teachers.FirstOrDefault(x => x.Id == id);

            existingTeacher.FullName = teacher.FullName;

            _dbContext.SaveChanges();

            return new ObjectResult(existingTeacher);
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var teacher = _dbContext.Teachers.FirstOrDefault(x => x.Id == id);

            _dbContext.Teachers.Remove(teacher);

            _dbContext.SaveChanges();

            return new StatusCodeResult(200);
        }
    }
}