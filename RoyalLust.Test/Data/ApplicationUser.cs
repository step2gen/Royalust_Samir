using Microsoft.AspNetCore.Identity;

namespace RoyalLust.Test.Data
{
    public class ApplicationUser : IdentityUser
    {
        [PersonalData]
        public string? Firstname { get; set; }
        [PersonalData]
        public string? Lastname { get; set; }
        [PersonalData]
        public DateTime DOB { get; set; }
        [PersonalData]
        public string? Address { get; set; }
    }
}
