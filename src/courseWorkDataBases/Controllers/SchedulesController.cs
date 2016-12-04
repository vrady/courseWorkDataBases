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
    public class SchedulesController : Controller
    {
        private GroupsAppContext _dbContext;

        public SchedulesController(GroupsAppContext dbContext)
        {
            _dbContext = dbContext;
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public ScheduleItem[,] Get(int id)
        {
            var bundle = new ScheduleItem[5, 6];

            var schedules = from schedule in _dbContext.Schedules
                            where schedule.GroupId == id
                            join teacher in _dbContext.Teachers on schedule.TeacherId equals teacher.Id
                            join audience in _dbContext.Audiences on schedule.AudienceId equals audience.Id
                            join subject in _dbContext.Subjects on schedule.SubjectId equals subject.Id
                            select new Schedule
                            {
                                Teacher = teacher,
                                Audience = audience,
                                Day = schedule.Day,
                                Group = schedule.Group,
                                Id = schedule.Id,
                                LessonNumber = schedule.LessonNumber,
                                Type = schedule.Type,
                                Subject = subject
                            };

            foreach(var schedule in schedules)
            {
                var day = schedule.Day;
                var lessonNumber = schedule.LessonNumber;

                bundle[lessonNumber, day] = new ScheduleItem
                {
                    ScheduleId = schedule.Id,
                    Audience = schedule.Audience,
                    Subject = schedule.Subject,
                    Teacher = schedule.Teacher,
                    Type = schedule.Type,
                    Group = schedule.Group
                };
            }

            return bundle;
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody] Schedule schedule)
        {
            var existingSchedule = _dbContext.Schedules;
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
