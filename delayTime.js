//console.log(test);
//var test = "ni hao";

function test() {
	var a = "5";
	setTimeout(function() {
		a = 1;
		console.log(a);

	}, 0);
	console.log(a);
}
//console.log(0);
//console.log(test);


function foo() {
	this.name = "foo";
}
foo.test = function() {
	console.log("test");
}
foo.test();


function quetion4() {

	name = "outName";

	function baseClass() {
		var name = "internal";
		var method1 = function() {
			console.log(name);
			console.log(this.name);
		};
		this.method1 = function() {
			console.log(this.name);
			method1();
		}

	}
	baseClass.staticName = "staticName";
	baseClass.sayStaticName = function() {
		console.log(this.staticName);
	};
	baseClass.sayStaticName();
	var baseObj = new baseClass();
	baseObj.method1();

}

var user = {
	init: function(name, age) {
		this.name = name;
		this.age = age;
	},
	getName: function() {
		return this.name;
	}

};

user.init('liang', 29);
console.log(user.valueOf());
var num = 123;
console.log(num.valueOf()); //输出：123 
console.log(num.valueOf()); //输出：'number'

var dd;
console.log(Object.prototype.valueOf.call(dd));