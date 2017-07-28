/**
 *  [判断值是否为空包括检测对象或数组的值是否为空]
 * @param {any}  [任何值]
 * @return {boolean}  [true判断为空，false判断不为空]
 */
function checkNull(val) {
	if (!val && val !== 0) {
		return true;
	} else {
		if (typeof val === 'object') {
			const keys = Object.keys(val);
			if (keys.length > 0) {
				if (keys.every(item => checkNull(val[item]))) {
					return true;
				}
				return false;
			} else{
				return true;
			}
		}
		if (typeof val === 'array') {
			if (val.every(item => checkNull(item))) {
				return true;
			}
		}
		return false
	}
}

console.log(checkNull({a: 0, b: null}));

