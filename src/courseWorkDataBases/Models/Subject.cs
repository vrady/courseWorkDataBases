using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace courseWorkDataBases.Models
{
    public class Subject
    {
        [Key]
        public int? Id { get; set; }
        [Required]
        [MaxLength(50)]
        public int Name { get; set; }
    }
}
