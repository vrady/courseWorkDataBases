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
        public int? Id { get; set; }
        [Required]
        [MaxLength(50)]
        public string Name { get; set; }
        [Range(1, 6)]
        [Required]
        public int Course { get; set; }
        [Required]
        [CustomValidation(typeof(CustomValidator), "GroupQuantityOverZero")]
        public int Quantity { get; set; }
        public int SpecialityId { get; set; }
        [ForeignKey("Id")]
        public virtual Speciality Speciality { get; set; }

        public static List<Group> All { get; set; } = new List<Group>
        {
            new Group { Id = 1, Name = "ТР-41", Course = 3, Quantity = 19 },
            new Group { Id = 2, Name = "ТР-42", Course = 3, Quantity = 18 },
            new Group { Id = 3, Name = "ТІ-52", Course = 2, Quantity = 22 },
            new Group { Id = 4, Name = "ТВ-62", Course = 1, Quantity = 25 },
            new Group { Id = 5, Name = "ТР-32", Course = 4, Quantity = 15 }
        };
    }
}
