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

function parse(str) {
	if (typeof str !== 'string') {
		return {};
	}
	
	return decodeURI(str).split('&').map(param => {
		const tmp = param.split('=')
		const key = tmp[0]
		let value = tmp[1] || true
		if (typeof value === 'string' && isNaN(Number(value)) === false) {
			value = Number(value)
		}
		return {key, value}
	}).reduce((params, item) => {
		const {key, value} = item
		if (typeof params[key] === 'undefined') {
			params[key] = value
		} else {
			let newValue = Array.isArray(params[key]) ? params[key] : [params[key]]
			newValue.push(value)
			params[key] = newValue
		}
		return params
	}, {})
}