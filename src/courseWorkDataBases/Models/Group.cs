using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace courseWorkDataBases.Models
{
    public class Group
    {
        [Key]
        public int? Id { get; set; }

        [Required]
        [MaxLength(50)]
        public string Name { get; set; }

        [Required]
        [Range(1, 6)]
        public int Course { get; set; }

        [Required]
        public int Quantity { get; set; }

        [Required]
        public int SpecialityId { get; set; }

        public virtual Speciality Speciality { get; set; }
    }
}
