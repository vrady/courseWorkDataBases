using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace courseWorkDataBases.Models
{
    public class Audience
    {
        public Audience()
        {
            Shedules = new HashSet<Schedule>();
        }

        [Key]
        public int? Id { get; set; }

        [Required]
        public int Number { get; set; }

        [Required]
        public int Quantity { get; set; }

        [Required]
        [MaxLength(15)]
        public string Type { get; set; }

        public virtual ICollection<Schedule> Shedules { get; set; }
    }
}