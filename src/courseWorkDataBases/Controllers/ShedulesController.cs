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
    public class ShedulesController : Controller
    {
        private GroupsAppContext _dbContext;

        public ShedulesController(GroupsAppContext dbContext)
        {
            _dbContext = dbContext;
        }

        // GET api/values/5
        [HttpGet("{groupId}")]
        public SheduleItem[,] Get(string groupName)
        {
            var bundle = new SheduleItem[5, 6];

            var shedules = from shedule in _dbContext.Shedules
                           where shedule.Group.Name == groupName
                           join teacher in _dbContext.Teachers on shedule.TeacherId equals teacher.Id
                           join audience in _dbContext.Audiences on shedule.AudienceId equals audience.Id
                           join subject in _dbContext.Subjects on shedule.SubjectId equals subject.Id
                           select shedule;

            foreach (var shedule in shedules)
            {
                var day = shedule.Day;
                var lessonNumber = shedule.LessonNumber;

                bundle[lessonNumber, day] = new SheduleItem
                {
                    Audience = shedule.Audience,
                    Subject = shedule.Subject,
                    Teacher = shedule.Teacher,
                    Type = shedule.Type,
                    Group = shedule.Group
                };
            }

            return bundle;
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody]string value)
        {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
