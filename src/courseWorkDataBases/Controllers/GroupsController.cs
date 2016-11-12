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
            return _dbContext.Groups;
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var group = _dbContext.Groups.FirstOrDefault(x => x.Id == id);

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
            if (group.Id == 0)
            {
                _dbContext.Groups.Add(group);
                _dbContext.SaveChanges();
                return new ObjectResult(group);
            }
            else
            {
                var existingGroup = _dbContext.Groups.FirstOrDefault(q => q.Id == group.Id);
                existingGroup.Name = group.Name;
                _dbContext.SaveChanges();
                return new ObjectResult(existingGroup);
            }
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody]Group group)
        {
            var existingGroup = _dbContext.Groups.FirstOrDefault(q => q.Id == id);
            existingGroup.Name = group.Name;
            _dbContext.SaveChanges();
            return new ObjectResult(existingGroup);
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var group = _dbContext.Groups.FirstOrDefault(m => m.Id == id);
            _dbContext.Groups.Remove(group);
            _dbContext.SaveChanges();
            return new StatusCodeResult(200);
        }
    }
}
