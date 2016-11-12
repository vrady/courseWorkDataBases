using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

using Microsoft.EntityFrameworkCore;

namespace courseWorkDataBases.Models
{
    public class GroupsAppContext : DbContext
    {
        public DbSet<Group> Groups { get; set; }
    }
}
