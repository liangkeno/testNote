function Person(name, sex, age) {
	this._name = name;
	this._sex = sex;
	this._age = age;
	this.printInfo = function() {
		console.log(this._name + "::" + this._age);
	}
}
var person1 = new Person("liang", "man", 28);
var person2 = new Person("hong", "man", 28);

console.log(person1 instanceof Person);
console.log(person1 instanceof Object);
console.log(person2 instanceof Person);