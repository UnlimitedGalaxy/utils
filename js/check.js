function checkType() {
	(function () {
		var utils = {}, numObj = {
			isNum: Number,
			isStr: String,
			isBoo: Boolean,
			isObj: Object,
			isAry: Array,
			isFun: Function,
			isHTM: HTMLElement,
		}, isType = function() {
			var outerArg = arguments[0]
			return function () {
				var innerArg = arguments[0]
				return innerArg instanceof outerArg
			}
		}
		if (jQuery) {
			numObj['isJQu'] = jQuery
		}
		for (var key in numObj) {
			if (numObj.hasOwnProperty(key)) {
				utils[key] = isType(numObj[key])
			}
		}
		window.$type = utils
	})()
}
