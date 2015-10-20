var $win = $(window);
var clientWidth = $win.width();
var clientHeight = $win.height();

$(window).resize(function() {
    var newWidth = $win.width();
    var newHeight = $win.height();
    if (newWidth != clientWidth && newHeight != clientHeight) {
        location.replace(location);
    }
});

(function($) {
	$.fn.typewriter = function() {
		this.each(function() {
			var $ele = $(this), str = $ele.html(), progress = 0;
			$ele.html('');
			var timer = setInterval(function() {
				var current = str.substr(progress, 1);
				if (current == '<') {
					progress = str.indexOf('>', progress) + 1;
				} else {
					progress++;
				}
				$ele.html(str.substring(0, progress) + (progress & 1 ? '_' : ''));
				if (progress >= str.length) {
				    onresize = tv.resize;
				    tv.init();
					clearInterval(timer);
				}
			}, 75);
		});
		return this;
	};
})(jQuery);

function timeElapse(date){
	var current = Date();
	var result = "第 <span class=\"digit\">" + GetDateDiff(date.Format("yyyy-MM-dd HH:mm:ss"), current.Format("yyyy-MM-dd HH:mm:ss"), "day") + "</span> 天 <span class=\"digit\">" + hour + "</span> 小时 <span class=\"digit\">" + min + "</span> 分钟 <span class=\"digit\">" + afterMin + "</span> 秒";
    //$.get("/Home/GetTimeLine", function (result) {
    //    $("clock").html(result);
    //});
	$("#clock").html(result);
}
/* 
* 获得时间差,时间格式为 年-月-日 小时:分钟:秒 或者 年/月/日 小时：分钟：秒 
* 其中，年月日为全格式，例如 ： 2010-10-12 01:00:00 
* 返回精度为：秒，分，小时，天 
*/
function GetDateDiff(startTime, endTime, diffType) {
    //将xxxx-xx-xx的时间格式，转换为 xxxx/xx/xx的格式  
    startTime = startTime.replace(/-/g, "/");
    endTime = endTime.replace(/-/g, "/");
    //将计算间隔类性字符转换为小写  
    diffType = diffType.toLowerCase();
    var sTime = new Date(startTime); //开始时间  
    var eTime = new Date(endTime); //结束时间  
    //作为除数的数字  
    var divNum = 1;
    switch (diffType) {
        case "second":
            divNum = 1000;
            break;
        case "minute":
            divNum = 1000 * 60;
            break;
        case "hour":
            divNum = 1000 * 3600;
            break;
        case "day":
            divNum = 1000 * 3600 * 24;
            break;
        default:
            break;
    }
    return parseInt((eTime.getTime() - sTime.getTime()) / parseInt(divNum)); //17jquery.com  
}
