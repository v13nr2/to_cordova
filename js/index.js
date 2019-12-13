if(!cek_login()){
	aztira_logout();
}

$('document').ready(function(){
	//console.log("ready dokumen");
	$("#aztira_konten").load("pages/aztira/dashboard.html");
});