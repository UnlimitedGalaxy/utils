export function saveToLocal(key, value) {
	let store = window.localStorage.getItem("__shangcheng__")
	store = JSON.parse(store)
	if (!store) {
		store = {}
	}
	store[key] = value
	window.localStorage.setItem("__shangcheng__", JSON.stringify(store))
}

export function loadFromLocal (key) {
	let store = window.localStorage.getItem('__shangcheng__')
	store = JSON.parse(store)
	if (!store) {
		return null
	}
	let ref = store[key]
	return ref
}
