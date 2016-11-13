namespace courseWorkDataBases.Models
{
    public class Shedule
    {
        public int? Id { get; set; }
        public int GroupId { get; set; }
        public int Day { get; set; }
        public int SubjectId { get; set; }
        public int TeacherId { get; set; }
        public int AudienceId { get; set; }
        public string Type { get; set; }
        public int LessonNumber { get; set; }

        public virtual Subject Subject { get; set; }
        public virtual Teacher Teacher { get; set; }
        public virtual Group Group { get; set; }
        public virtual Audience Audience { get; set; }

    }
}