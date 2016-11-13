using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace courseWorkDataBases.Models
{
    public class Speciality
    {
        public Speciality()
        {
            Groups = new HashSet<Group>();
        }

        [Key]
        public int? Id { get; set; }

        [Required]
        [MaxLength(50)]
        public string Name { get; set; }

        public virtual ICollection<Group> Groups { get; set; }
    }
}
