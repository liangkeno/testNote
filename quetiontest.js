Number.prototype.plus = function() {
	return this + arguments[0];
};

Number.prototype.minus = function() {
	return this - arguments[0];
};

(function() {
	var dd = (5).plus(3).minus(6);
	//console.log(dd);
})();



function add(x) {
	var sum = x;
	var tmp = function(y) {
		sum = sum + y;
		return tmp;
	};
	tmp.toString = function() {
		return sum;
	};
	return tmp;
}
console.log(add(1)(2)(3)); //6
console.log(add(1)(2)(3)(4)); //10


Array.prototype.max = function() {
	return Math.max.apply(Math, this);
}
var arr = [2, 3, 5, 5, 9];
//console.log(arr.max());



(function() {
	var numArr = [4, 5, 3, 5];
	var fnArr = [];
	for (var i = 0; i < numArr.length; i++) {
		fnArr[i] = (function(a) {
			return function() {
				console.log(a);
			}
		})(numArr[i]);
	}
	//fnArr[2]();
})();

function fn(n) {
	if (n <= 2) {
		return 1;
	} else {
		return arguments.callee(n - 1) + arguments.callee(n - 2);
	}
}
//console.log(fn(10));


(function() {
	var objArr = [{
		a: 5,
		b: 9,
		c: 10,
		d: 4
	}, {
		a: 5,
		b: 9,
		c: 10
	}, {
		a: 5,
		b: 9,
		c: 10,
		d: 4,
		e: 6,
		f: 12
	}, {
		d: 4,
		e: 6,
		f: 12
	}, {
		d: 4,
		f: 12
	}];

	//var aObjs = [obj1, obj2, obj3];
	objArr.sort(function() {
		for (var i = 0; i < 2; i++) {
			arguments[i].length = 0;
			for (var att in arguments[i]) {
				if (arguments[i].hasOwnProperty(att)) {
					arguments[i].length++;
				}
			}
		}
		return arguments[0].length - arguments[1].length;
	});
	//console.log(objArr);
})();


//冒泡排序

(function() {
	var arr = [5, 4, 7, 1, 9];
	console.log(arr);
	for (var i = 0; i < arr.length; i++) {
		for (var j = 0; j < arr.length - 1; j++) {
			if (arr[j] > arr[j + 1]) {
				var temp = arr[j];
				arr[j] = arr[j + 1];
				arr[i] = temp;
			}
		}
	}
	//	console.log(arr);
})();