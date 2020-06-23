$(document).ready(function(){
	$("#menusamping").load("pages/aztira/menusamping.html");
	$("#userinfo").load("pages/aztira/userinfo.html");
});

function signout(){
	window.location.href = "pages/base/sign-in.html";
}
function login(){
	window.location.href = "../../index.html";
}