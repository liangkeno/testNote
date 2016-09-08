function foo(obj, name, fn) {
	var old = obj[name];
	obj[name] = function() {

		if (fn.length == arguments.length) {
			console.log(fn.toString());
			fn.apply(this, arguments);
		} else if (typeof old == 'function') {
			old.apply(this, arguments);
		}

	}
}

var obj = {};
foo(obj, "showCount", function() {
	console.log("no-arg:" + arguments[0])
});

foo(obj, "showCount", function(a) {
	console.log("one-arg:" + arguments[0])
});

foo(obj, "showCount", function(a, b) {
	console.log("one-arg:" + arguments[0])
});

obj.showCount();
obj.showCount(2);
obj.showCount(5, 5);