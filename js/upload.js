function addUrlPara(name, value) {
	var currentUrl = window.location.href.split('#')[0];
	if (/\?/g.test(currentUrl)) {
		if (/name=[-\w]{4,25}/g.test(currentUrl)) {
			currentUrl = currentUrl.replace(/name=[-\w]{4,25}/g, name + "=" + value);
		} else {
			currentUrl += "&" + name + "=" + value;
		}
	} else {
		currentUrl += "?" + name + "=" + value;
	}
	if (window.location.href.split('#')[1]) {
		window.location.href = currentUrl + '#' + window.location.href.split('#')[1];
	} else {
		window.location.href = currentUrl;
	}
}

function getQueryString(name) {
	var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
	var r = window.location.search.substr(1).match(reg);
	if(r!=null)return  unescape(r[2]); return null;
}
