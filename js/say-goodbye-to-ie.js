var getExplorer = (function () {
    var explorer = window.navigator.userAgent,
        compare = function (s) { return (explorer.indexOf(s) >= 0); },
        ie11 = (function () { return ("ActiveXObject" in window) })();
    if (compare("MSIE") || ie11) { return 'ie'; }
    else if (compare("Firefox") && !ie11) { return 'Firefox'; }
    else if (compare("Chrome") && !ie11) {
        if (explorer.indexOf("Edge") > -1) {
            return 'Edge';
        } else {
            return 'Chrome';
        }
    }
    else if (compare("Opera") && !ie11) { return 'Opera'; }
    else if (compare("Safari") && !ie11) { return 'Safari'; }

})()

var version = navigator.userAgent;

if (getExplorer == 'ie') {
    window.location.href='https://lijiajunljj.github.io/ie';
}

if (getExplorer == 'Edge') {
	if(version.indexOf("Windows NT 10")!=-1){
		    console.log("一个彩蛋：我单推鹿乃（指花寄女子寮中的鹿乃www）");
}else {
    window.location.href='https://lijiajunljj.github.io/ie';
      }
}