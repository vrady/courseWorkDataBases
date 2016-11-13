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
            //var group = new Group { Id = 4, Course = 3, Name = "name", Quantity = 4 };
            //_dbContext.Groups.Add(group);
            //_dbContext.SaveChanges();
            return Group.All;
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var group = Group.All.FirstOrDefault(x => x.Id == id);

            if(group !=null)
            {
                return new ObjectResult(group);
            }
            else
            {
                return new NotFoundResult();
            }
        }

        // POST api/values
        [HttpPost]
        public IActionResult Post([FromBody]Group group)
        {
            if (group.Id == null)
            {
                Group.All.Add(group);
                //_dbContext.SaveChanges();
                return new ObjectResult(group);
            }
            else
            {
                var existingGroup = Group.All.FirstOrDefault(q => q.Id == group.Id);
                existingGroup.Name = group.Name;
                //existingGroup.Speciality = group.Speciality;
                existingGroup.Course = group.Course;
                existingGroup.Quantity = group.Quantity;
                //_dbContext.SaveChanges();
                return new ObjectResult(existingGroup);
            }
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody]Group group)
        {
            var existingGroup = Group.All.FirstOrDefault(q => q.Id == id);
            existingGroup.Name = group.Name;
            //existingGroup.Speciality = group.Speciality;
            existingGroup.Course = group.Course;
            existingGroup.Quantity = group.Quantity;
            //_dbContext.SaveChanges();
            return new ObjectResult(existingGroup);
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var group = Group.All.FirstOrDefault(m => m.Id == id);
            Group.All.Remove(group);
            //_dbContext.SaveChanges();
            return new StatusCodeResult(200);
        }
    }
}
