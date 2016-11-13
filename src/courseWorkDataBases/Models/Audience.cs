using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace courseWorkDataBases.Models
{
    public class Audience
    {
        public Audience()
        {
            Shedules = new HashSet<Shedule>();
        }

        [Key]
        public int? Id { get; set; }

        [Required]
        [CustomValidation(typeof(CustomValidator), "MoreThanZero")]
        public int Number { get; set; }

        [Required]
        [CustomValidation(typeof(CustomValidator), "MoreThanZero")]
        public int Quantity { get; set; }

        [Required]
        public string Type { get; set; }

        public virtual ICollection<Shedule> Shedules { get; set; }
    }
}