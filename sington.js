//闭包用法之一
(function() {
	var privateName;

	function privateMethod() {
		console.log("name:" + privateName);
	}
	foo = function(name) {
		privateName = name;
	};
	foo.prototype.publicMethod = function() {
		console.log(privateName);
		privateMethod();
	};

})();

var newFoo = new foo("gogo");
newFoo.publicMethod();
var newFoo1 = new foo("home");
newFoo1.publicMethod();
newFoo.publicMethod();

//闭包用法之二

var singleton = (function() {
	var privateName;

	function privateMethod() {
		console.log("name:" + privateName);
	}
	return {
		init: function(name) {
			privateName = name;
		},
		publicMethod: function() {
			console.log(privateName);
			privateMethod();
		}
	}
})();

singleton.init("liang");
singleton.publicMethod();

//闭包的用法之三
singleton2 = (function() {
	var privateName;

	function privateMethod() {
		console.log("name:" + privateName);
	}
	var object = new Object();
	object.init = function(name) {
		privateName = name;
	};
	object.publicMethod = function() {
		console.log(privateName);
		privateMethod();
	}
	return object;
})();

singleton2.init("bar");
singleton2.publicMethod();


function fn(count) {
	var result = count;
	var i = (function() {
		for (var i = 0; i < 5; i++) {
			result += i;
		}
		return i;
	})();
	console.log(i) //error: i not defined
}
fn();