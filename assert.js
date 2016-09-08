(function() {
	var results;
	this.assert = function(value, desc) {
		var li = document.createElement('li');
		li.className = value ? 'pass' : 'fail';
		li.appendChild(document.createTextNode(desc));
		results.appendChild(li);
		return li;
	};
	this.test = function(name, fn) {
		results = document.getElementById('result');
		results = assert(true, name).appendChild(document.createElement('ul'));
		fn();
	}
})();

window.onload = function() {
	test('A test', function() {
		assert(true, 'error message2');
		assert(true, 'error message3');
	});

	var naijia = {
		shorp: function signal(n) {
			return n > 1 ? signal(n - 1) + "-shorp" : "shorp";
		},
		inlineFn: signal
	};
	console.log(naijia.inlineFn());
	var samurai = {
		shorp: naijia.shorp
	};
	naijia = {}
		//console.log(naijia.shorp);
	assert(samurai.shorp(3) == "shorp-shorp-shorp", "yes,is eq");

	var anony = function an() {
		console.log(typeof anony);
		console.log(typeof an);
	};
	anony();
	console.log(typeof an);

};