//"use strict";
var person = {
	name: "liang",
	_year: 2011

}

Object.defineProperty(person, 'name', {
	writable: false,
	value: "bai"
});

//console.log(person.name);
person.name = "soso";
//console.log(person.name);


Object.defineProperty(person, "year", {
	get: function() {
		return this._year;
	},
	set: function(newValue) {
		if (newValue > 2016) {
			this._year = 2016;
		}
	}
});


//console.log(person.year);
person.year = 2017;
//console.log(person.year);


var book = {
	name: "liang"
};

Object.defineProperties(book, {
	_year: {
		value: 2004
	},
	edition: {
		value: 1
	}
});


console.log(book._year);

for (var i in book) {
	console.log(i);
}