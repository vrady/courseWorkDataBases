using System.Collections.Generic;

namespace courseWorkDataBases.Models
{
    public class Audience
    {
        public Audience()
        {
            Shedules = new HashSet<Shedule>();
        }
        public int? Id { get; set; }
        public int Number { get; set; }
        public int Quantity { get; set; }
        public string Type { get; set; }

        public virtual ICollection<Shedule> Shedules { get; set; }
    }
}