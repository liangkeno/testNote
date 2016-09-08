define(function() {
	function bind(obj, attrName) {
		return function() {
			return obj[attrName].apply(obj, Array.prototype.slice.call(arguments));
		};
	}

	return {
		bind: bind
	};
});