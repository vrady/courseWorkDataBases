using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace courseWorkDataBases.Models
{
    public class CustomValidator
    {
        public static bool MoreThanZero(int value)
        {
            return value > 0;
        }

        public static bool NotLessThanZero(int value)
        {
            return value >= 0;
        }
    }
}
