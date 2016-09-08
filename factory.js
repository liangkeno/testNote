function factory(name, sex, age) {
	var o = new Object();
	o._name = name;
	o._sex = sex;
	o._age = age;
	o.printInfo = function() {
		console.log(o._name + ":" + o._age);
	}
	return o;
}

var obj = factory("liang", "man", 28);
console.log(obj);
var obj2 = new factory("bae", "h", 18);
console.log(obj2);
obj.printInfo();