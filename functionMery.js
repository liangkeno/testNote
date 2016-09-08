var store = {
	indexId: 1,
	cache: {},
	add: function(fn) {
		if (!fn.id) {
			fn.id = this.indexId++;
			return !!(this.cache[fn.id] = fn);
		}
	}

};

function show() {

}
store.add(show);
console.log(store)