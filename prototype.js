function wrapFunction() {
	var wrapId = "wrap person";

	function Person(name, age) {
		var sex = "man";
		this.name = name;
		this.age = age;
		this.sayInfo = function() {
			console.log(this.name + "::" + sex);

		};
		this.getSex = function() {
			return sex;
		};
		this.setSex = function(Sex) {
			sex = Sex;
		};
		this.setWrapid = function(value) {
			wrapId = value;
		};
		this.getWrapid = function() {
			return wrapId;
		}
	}
	Person.prototype.name = "soso";
	Person.prototype.printSex = function() {
		console.log(this.getSex());
		console.log(this.name);
	};

	var obj = new Person("liang", 28);
	/*	console.log(obj.getWrapid());
		obj.setWrapid("persong change it");
		console.log(obj.getWrapid());*/
	obj.printSex();

}
wrapFunction();