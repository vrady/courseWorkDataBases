namespace courseWorkDataBases.Models
{
    public class Plan
    {
        public int? Id { get; set; }
        public int SpecialityId { get; set; }
        public int Semester { get; set; }
        public int SubjectId { get; set; }
        public int TeacherId { get; set; }
        public int Lectures { get; set; }
        public int Practices { get; set; }

        public virtual Subject Subject { get; set; }
        public virtual Teacher Teacher { get; set; }
        public virtual Speciality Speciality { get; set; }
    }
}