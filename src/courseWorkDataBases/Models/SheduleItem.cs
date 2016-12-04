using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace courseWorkDataBases.Models
{
    public class ScheduleItem
    {
        public Teacher Teacher { get; set; }
        public Subject Subject { get; set; }
        public Audience Audience { get; set; }
        public string Type { get; set; }
        public Group Group { get; set; }
        public int? ScheduleId { get; internal set; }
    }
}
