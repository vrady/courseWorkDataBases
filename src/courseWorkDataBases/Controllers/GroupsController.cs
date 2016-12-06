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
    public class GroupsController : Controller
    {
        private readonly GroupsAppContext _dbContext;

        public GroupsController(GroupsAppContext dbContext)
        {
            _dbContext = dbContext;
        }

        // GET: api/values
        [HttpGet]
        public IEnumerable<Group> Get()
        {
            return _dbContext.Groups.Join(_dbContext.Specialities, x => x.SpecialityId, x => x.Id, (x, y) => new Group { Id = x.Id, Course = x.Course, Name = x.Name, Quantity = x.Quantity, Speciality = y, SpecialityId = (int)y.Id});

        }

        // GET api/values/5
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var group = _dbContext.Groups.FirstOrDefault(x => x.Id == id);

            if(group != null)
            {
                return new ObjectResult(group);
            }
            else
            {
                return new NotFoundResult();
            }
        }

        // POST api/values
        [Authorize]
        [HttpPost]
        public IActionResult Post([FromBody]Group group)
        {
            if(group.Id == null)
            {
                _dbContext.Groups.Add(group);

                _dbContext.SaveChanges();

                return new ObjectResult(group);
            }
            else
            {
                var existingGroup = _dbContext.Groups.FirstOrDefault(x => x.Id == group.Id);

                existingGroup.Name = group.Name;
                existingGroup.SpecialityId = group.SpecialityId;
                existingGroup.Course = group.Course;
                existingGroup.Quantity = group.Quantity;

                _dbContext.SaveChanges();
                return new ObjectResult(existingGroup);
            }
        }

        // PUT api/values/5
        [Authorize]
        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody]Group group)
        {
            var existingGroup = _dbContext.Groups.FirstOrDefault(x => x.Id == id);

            existingGroup.Name = group.Name;
            existingGroup.SpecialityId = group.SpecialityId;
            existingGroup.Course = group.Course;
            existingGroup.Quantity = group.Quantity;

            _dbContext.SaveChanges();

            return new ObjectResult(existingGroup);
        }

        // DELETE api/values/5
        [Authorize]
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var group = _dbContext.Groups.FirstOrDefault(x => x.Id == id);

            _dbContext.Groups.Remove(group);

            _dbContext.SaveChanges();

            return new StatusCodeResult(200);
        }
    }
}
