function forTime() {
	for (var i = 0; i < 10000; i++) {
		setTimeout(function() {
			console.log(i);
		}, 500);
	}
}

(function() {
	function foo() {

	}

	foo.fn = function() {
			function bar() {
				console.log(this);
			}
			bar()
		}
		//foo.fn();
})();

(function() {
	function bar() {
		console.log(a);
		var a = 1;
		console.log(a);
	}

	//bar();
})();


function quation1() {
	function foo() {
		getName = function() {
			console.log(1);
		}
	};
	foo.getName = function() {
		console.log(2);
	};

	foo.prototype.getName = function() {
		console.log(3);
	}

	var getName = function() {
		console.log(4);
	};

	function getName() {
		console.log(5);
	}

	getName(); //4
	foo.getName(); //2
	new foo.getName(); //2
	new foo().getName(); //3
	getName(); //1
	new new foo().getName(); //3
}

quation1();

function quation2() {
	var arr = [2, 5, 9];
	var arr1 = [7, 8, 9];
	//合并数组
	var back = arr.concat(arr1);
	console.log(back);
	//删除数组
	arr.splice(1, 1);
	console.log(arr);
}

function quetion3() {
	var index = function() {
		this.ding = function(type) {
			var _type = type || "ding";
			console.log(_type);
		};
		this.dong = function() {
			this.ding("dong");
		}
	}

	var obj = new index();
	setInterval(obj.dong, 500);
}

function superType() {
	this.name = "superType";
	this.brothers = ["bo", "yan", "tong"];
	this.sayName = function() {

	};
}

function subType() {
	superType.call(this);
	this.name = "superType";
}