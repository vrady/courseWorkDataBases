using System.ComponentModel.DataAnnotations;

namespace courseWorkDataBases.Models
{
    public class Plan
    {
        [Key]
        public int? Id { get; set; }

        [Required]
        public int SpecialityId { get; set; }

        [Required]
        [Range(1, 12)]
        public int Semester { get; set; }

        [Required]
        public int SubjectId { get; set; }

        [Required]
        public int TeacherId { get; set; }

        [Required]
        public int Lectures { get; set; }

        [Required]
        public int Practices { get; set; }

        public virtual Subject Subject { get; set; }
        public virtual Teacher Teacher { get; set; }
        public virtual Speciality Speciality { get; set; }
    }
}