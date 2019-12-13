if(!cek_login()){
	aztira_logout();
}

$(document).ready(function(){
	$("#menusamping").load("../../pages/aztira/menusamping.html");
	$("#userinfo").load("../../pages/aztira/userinfo.html");
});


function signout(){
	window.location.href = "../../pages/examples/sign-in.html";
}
function login(){
	window.location.href = "../../index.html";
}

function addTR(){
	TR = '<tr>'+
			'<td tabindex="1">Car</td>'+
			'<td tabindex="1">100</td>'+
			'<td tabindex="1">200</td>'+
			'<td tabindex="1">0</td>'+
		'</tr>';
		
	$("#mainTable").append(TR);
}