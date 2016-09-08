var a = {
	n: 1
};
var b = a;

a.x = a = {
	n: 2
};

console.log(b);
console.log(a);



function fn() {
	var c = 1;
	this.name = "soso";
};

fn.statc = "static var";
Function.prototype.functionName = "is functon prototype attr";
var foo = new fn();
console.dir(foo);