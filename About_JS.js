
function dark() {
	var bod = document.getElementById("body");
	bod.classList.toggle('body')
	var menu = document.getElementById("topnav");
	menu.classList.toggle('topnav')
	var label = document.getElementById("label");
	label.classList.toggle('label')
	/*var ball = document.getElementById("ball");
	ball.classList.toggle('ball')
	/*document.body.classList.toggle('body_dark');
	document.label.classList.toggle('label_dark');
	document.topnav.classList.toggle('topnav_dark');
	*/
}