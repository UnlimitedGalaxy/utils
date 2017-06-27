/* *
*  获取指定个数的随机数，整数范围[2,32]
*  @params {number} n需要的整数个数
*  @return {array} 返回包含n个整数的数组，如果n非法，则返回空数组
* */
function test(n) { 
	// 将整数取值范围作为变量提取出来
	if (typeof n == 'undef') {
		
	}
	var min = 2, max = 32
	
	// 参数检验
	if (!isThere(n)) return []
	if (!typeOK(n) && !isOKStr(n)) return []
	n = formatInitNum(n)
	if (!rangeOK(n, min, max)) return []

	let arr = []
	
	for (let i = 0;  i < n; i++){
    let randomNum = 2 + Math.floor(Math.random() * 31)
		if (isInArr(randomNum, arr)) {
			i --
		} else {
    	arr.push(randomNum)
		}
	}
	
	return arr
}

function isInArr(p, arr) {
	for (let j in arr) {
		if (p == j) {
			return true
		}
	}
	return false
}

console.log(test())