function extendFn(child, parent) {
	var F = function() {};
	F.prototype = parent.prototype;
	var o = new F();
	child.prototype = o;
}

function superType() {
	var arg = arguments;
	this.name = "parent";
	this.showArg = function() {
		for (var i in arg) {
			console.log(i + ":" + arg[i]);
		}
	}
}
superType.prototype.sayName = function() {
	console.log(this.name);
};

function subType(name) {
	superType.apply(this, arguments);
	this.name = "child";
}

extendFn(subType, superType);
var obj = new subType(5, "sex");

obj.showArg();
obj.sayName();