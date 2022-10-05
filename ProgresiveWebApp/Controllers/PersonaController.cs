using Microsoft.AspNetCore.Mvc;

namespace ProgresiveWebApp.Controllers
{
    public class PersonaController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
