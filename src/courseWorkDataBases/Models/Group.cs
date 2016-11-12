using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace courseWorkDataBases.Models
{
    public class Group
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int Course { get; set; }
        public DbSet<Speciality> Speciality { get; set; }
        public int Quantity { get; set; }
    }
}
