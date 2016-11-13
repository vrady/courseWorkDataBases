using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace courseWorkDataBases.Models
{
    public class Teacher
    {
        public Teacher()
        {
            Plans = new HashSet<Plan>();
            Shedules = new HashSet<Shedule>();
        }

        [Key]
        public int? Id { get; set; }

        [Required]
        [MaxLength(150)]
        [MinLength(5)]
        public string FullName { get; set; }

        public virtual ICollection<Plan> Plans { get; set; }
        public virtual ICollection<Shedule> Shedules { get; set; }
    }
}
