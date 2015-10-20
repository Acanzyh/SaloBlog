using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Blog.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {

            return View();
        }

        [HttpGet]
        public string GetTimeLine()
        {
            DateTime dt = new DateTime(2013, 02, 01);
            DateTime now = DateTime.Now;
            TimeSpan ts = now.Subtract(dt);
            int day = ts.Days;
            int hours = ts.Hours;
            int min = ts.Minutes;
            int sec = ts.Seconds;
            string msg = "第 <span class=\"digit\">" + day + "</span> 天 <span class=\"digit\">" + hours + "</span> 小时 <span class=\"digit\">" + min + "</span> 分钟 <span class=\"digit\">" + sec + "</span> 秒";
            return msg;
        }
    }
}
