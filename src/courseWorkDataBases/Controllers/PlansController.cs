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
                var fullPlans =
                    from p in plans
                    join s in _dbContext.Subjects on p.SubjectId equals s.Id
                    join t in _dbContext.Teachers on p.TeacherId equals t.Id
                    join sp in _dbContext.Specialities on p.SpecialityId equals sp.Id
                    select new Plan
                    {
                        Id = p.Id,
                        Lectures = p.Lectures,
                        Practices = p.Practices,
                        Semester = p.Semester,
                        Speciality = sp,
                        SpecialityId = p.SpecialityId,
                        Subject = s,
                        SubjectId = p.SubjectId,
                        Teacher = t,
                        TeacherId = p.TeacherId
                    };

                return new ObjectResult(fullPlans);
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
            if(plan.Id == null)
            {
                _dbContext.Plans.Add(plan);

                _dbContext.SaveChanges();

                return new ObjectResult(plan);
            }
            else
            {
                var existingPlan = _dbContext.Plans.FirstOrDefault(x => x.Id == plan.Id);

                existingPlan.Lectures = plan.Lectures;
                existingPlan.SpecialityId = plan.SpecialityId;
                existingPlan.Practices = plan.Practices;
                existingPlan.Semester = plan.Semester;
                existingPlan.SubjectId = plan.SubjectId;
                existingPlan.TeacherId = plan.TeacherId;

                _dbContext.SaveChanges();
                return new ObjectResult(existingPlan);
            }
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody]Plan plan)
        {
            var existingPlan = _dbContext.Plans.FirstOrDefault(x => x.Id == id);

            existingPlan.Lectures = plan.Lectures;
            existingPlan.SpecialityId = plan.SpecialityId;
            existingPlan.Practices = plan.Practices;
            existingPlan.Semester = plan.Semester;
            existingPlan.SubjectId = plan.SubjectId;
            existingPlan.TeacherId = plan.TeacherId;

            _dbContext.SaveChanges();

            return new ObjectResult(existingPlan);
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var plan = _dbContext.Plans.FirstOrDefault(x => x.Id == id);

            _dbContext.Plans.Remove(plan);

            _dbContext.SaveChanges();

            return new StatusCodeResult(200);
        }
    }
}
