using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace courseWorkDataBases.Models
{
    public class Group
    {
        public int? Id { get; set; }
        public string Name { get; set; }
        public int Course { get; set; }
        public int Quantity { get; set; }

        public static List<Group> All { get; set; } = new List<Group>
        {
            new Group { Id = 1, Name = "ТР-41", Course = 3, Quantity = 19 },
            new Group { Id = 2, Name = "ТР-42", Course = 3, Quantity = 18 }
        };
    }
}
