function center(id, wrapper) {
	var oBox = document.getElementById(id)
	if (!oBox) {
		throw new Error('id获取有误')
	}
	var L1 = oBox.offsetWidth
	var H1 = oBox.offsetHeight
	var left = null
	var top = null
	if (oBox && typeof wrapper === 'undefined') {
		left = Math.round((document.documentElement.clientWidth-L1) / 2)
		top = Math.round((document.documentElement.clientHeight-H1) / 2)
	} else if (typeof wrapper === 'string'){
		wrapper = document.getElementById(wrapper)
		left = Math.round((wrapper.offsetWidth - L1) / 2)
		top =  Math.round((wrapper.offsetHeight - H1) / 2)
	}
	oBox.style.left = left+'px'
	oBox.style.top = top+'px'
}

function centerX(id, wrapper) {
	var oBox = document.getElementById(id)
	if (!oBox) {
		throw new Error('id获取有误')
	}
	var L1 = oBox.offsetWidth
	var left = null
	if (oBox && typeof wrapper === 'undefined') {
		left = Math.round((document.documentElement.clientWidth-L1) / 2)
	} else if (typeof wrapper === 'string'){
		wrapper = document.getElementById(wrapper)
		left = Math.round((wrapper.offsetWidth - L1) / 2)
	}
	oBox.style.left = left+'px'
}

function centerY(id, wrapper) {
	var oBox = document.getElementById(id)
	if (!oBox) {
		throw new Error('id获取有误')
	}
	var H1 = oBox.offsetHeight
	var top = null
	if (oBox && typeof wrapper === 'undefined') {
		top = Math.round((document.documentElement.clientHeight-H1) / 2)
	} else if (typeof wrapper === 'string'){
		wrapper = document.getElementById(wrapper)
		top =  Math.round((wrapper.offsetHeight - H1) / 2)
	}
	oBox.style.top = top+'px'
}

export {center, centerX, centerY}