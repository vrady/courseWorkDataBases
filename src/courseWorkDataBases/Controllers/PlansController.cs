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
    public class PlansController : Controller
    {
        private readonly GroupsAppContext _dbContext;

        public PlansController(GroupsAppContext dbContext)
        {
            _dbContext = dbContext;
        }

        // GET api/values/5
        [HttpGet("{specialityId}")]
        public IActionResult Get(int specialityId)
        {
            var plans = _dbContext.Plans.Where(x => x.SpecialityId == specialityId);

            if(plans.Any())
            {
                return new ObjectResult(plans);
            }
            else
            {
                return new NotFoundResult();
            }
        }

        // POST api/values
        [HttpPost]
        public IActionResult Post([FromBody]Plan plan)
        {

            throw new NotImplementedException();
            if(plan.Id == null)
            {
                _dbContext.Plans.Add(plan);

                _dbContext.SaveChanges();

                return new ObjectResult(plan);
            }
            else
            {
                //var existingPlan = _dbContext.Plans.FirstOrDefault(x => x.Id == plan.Id);

                //existingPlan.Lectures = plan.Name;
                //existingPlan.SpecialityId = plan.SpecialityId;
                //existingPlan.Course = plan.Course;
                //existingPlan.Quantity = plan.Quantity;

                //_dbContext.SaveChanges();
                return new ObjectResult(existingPlan);
            }
        }

        // PUT api/values/5
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
