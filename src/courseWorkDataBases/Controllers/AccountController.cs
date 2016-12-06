using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using courseWorkDataBases.Models.Security;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace courseWorkDataBases.Controllers
{
    [Route("[controller]")]
    public class AccountController : Controller
    {
        private UserManager<IdentityUser> _userManager;
        private SignInManager<IdentityUser> _signInManager;

        public AccountController(UserManager<IdentityUser> userManager, SignInManager<IdentityUser> signInManager)
        {
            _userManager = userManager;
            _signInManager = signInManager;
        }
        [HttpGet]
        public IActionResult Index()
        {
            return View();
        }

        [HttpPost]
        public async Task<IActionResult> Login(ApplicationUser user, string returnString = null)
        {
            var result = await _signInManager.PasswordSignInAsync(user.Login, user.Password, false, false);
            
            if(result == Microsoft.AspNetCore.Identity.SignInResult.Success)
            {
                ViewBag.Authorized = true;

                return View("Authorized");
            }

            return Redirect("/Account");
        }
        
        [Authorize]
        public IActionResult SignOut()
        {
            _signInManager.SignOutAsync().Wait();

            ViewBag.Authorized = false;

            return View("Authorized");
        }
    }
}
