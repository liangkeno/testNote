function addMethod(obj, name, fn) {
	var old = obj[name];
	obj[name] = function() {
		console.log(fn.length + ":" + arguments.length + ":" + typeof old);

		if (fn.length == arguments.length) {
			return fn.apply(this, arguments);
		} else if (typeof old == "function") {
			console.log(obj.toString())
			old.apply(this, arguments);
		}
	}

	return old;

}

var ninja = {};

var d1 = addMethod(ninja, 'find', function() {
	console.log("arguments is null");
});
var d2 = addMethod(ninja, "find", function(a, b) {
	console.log(arguments);
});

/*
var d3 = addMethod(ninja, "find", function(a, b, c) {
	console.log(arguments);
});
console.log(d3);*/
//d3();
ninja.find();
ninja.find(5, 8, 9);
//ninja.find(3);
//ninja.find(3, 4);
//ninja.find(3, 4, 5);
/*
console.log(ninja);



function foo() {
	var count = 0;
	var later = function() {
		count++;
		console.log(count);
	}
	return later;
}
var later = foo();
later();
later();

var later1 = foo();
later1();
later();*/