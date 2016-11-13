using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

using Microsoft.EntityFrameworkCore;

namespace courseWorkDataBases.Models
{
    public class GroupsAppContext : DbContext
    {
        public GroupsAppContext(DbContextOptions options) : base(options) { }
        public DbSet<Group> Groups { get; set; }
        public DbSet<Speciality> Specialities { get; set; }
        public DbSet<Subject> Subjects { get; set; }
        public DbSet<Teacher> Teachers { get; set; }
        public DbSet<Audience> Audiences { get; set; }
        public DbSet<Shedule> Shedules { get; set; }
        public DbSet<Plan> Plans { get; set; }
    }
}
