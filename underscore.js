(function(root) {
	var previous = root._;
	var _ = function(obj) {
		return new wrapper(obj);
	};
	root['_'] = _;
	var wrapper = function(obj) {
		this.wrapped = obj;
	};

	_.prototype = wrapper.prototype;

	_.map = function(arr, fn) {
		var i, len = arr.length;
		for (i = 0; i < len; i++) {
			console.log(i);
		}
	};
})(this);

console.log();