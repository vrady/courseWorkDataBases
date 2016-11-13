using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace courseWorkDataBases.Models
{
    public class CustomValidator
    {
        public bool GroupQuantityOverZero(int quantity)
        {
            return quantity > 0;
        }
    }
}
