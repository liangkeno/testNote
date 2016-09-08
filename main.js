require.config({
	paths: {
		"clouse_2": "clouse-2"
	}
});
require(["clouse_2"], function(clouse_2) {
	var btnModel = {
		name: "btnModel",
		click: function() {
			alert(this.name);
		}
	};
	var btn = document.getElementById('btn');
	btn.addEventListener('click', clouse_2.bind(btnModel, "click"), false);
});