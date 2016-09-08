function foo() {
	this.fn = function anomy() {
		console.log(anomy);
		return anomy;
	};
	this.an = this.fn();

}

var instance = new foo();
instance.an();


var index = {
	find: function() {
		console.log(arguments);
	}
}

index.find(2, 8, 9);

var a = {};
var fn = function() {};

console.log((a && fn));