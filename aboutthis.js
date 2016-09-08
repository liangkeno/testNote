function superType() {
	var privateVlaue = "name";
	this.sex = "man";
	this.sayInfo = function() {
		console.log(privateVlaue + "::" + this.sex);
	};
}

superType.prototype.saySex = function() {
	console.log(this.sex);
};

var oo = new superType;
oo.foo.sayFoo();


function foo() {
	var a = 5;
	var index = {
		init: function() {
			console.log(a);
		}
	};
	return index;
}
var obj1 = foo();
obj1.init();
var obj = new foo();
obj.init();

console.log(obj1 === obj);

function newCreate(fn, arg) {
	var obj = {};
	obj.__proto__ = fn.prototype;
	fn.apply(obj, arg);
	return obj;
}