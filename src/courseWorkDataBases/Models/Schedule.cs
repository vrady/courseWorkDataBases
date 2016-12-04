using System.ComponentModel.DataAnnotations;

namespace courseWorkDataBases.Models
{
    public class Schedule
    {
        [Key]
        public int? Id { get; set; }

        [Required]
        public int GroupId { get; set; }

        [Required]
        [Range(0, 5)]
        public int Day { get; set; }

        [Required]
        [Range(0, 1)]
        public int Week { get; set; }

        [Required]
        public int SubjectId { get; set; }

        [Required]
        public int TeacherId { get; set; }

        [Required]
        public int AudienceId { get; set; }

        [Required]
        [MaxLength(10)]
        public string Type { get; set; }

        [Required]
        [Range(0, 4)]
        public int LessonNumber { get; set; }

        public virtual Subject Subject { get; set; }
        public virtual Teacher Teacher { get; set; }
        public virtual Group Group { get; set; }
        public virtual Audience Audience { get; set; }

    }
}