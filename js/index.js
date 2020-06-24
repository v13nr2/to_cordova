if(!cek_login()){
	aztira_logout();
}

$('document').ready(function(){
	//console.log("ready dokumen");
	$("#aztira_konten").load("pages/aztira/dashboard.html");
	
	//routing menu
	var fType = getUrlVars()["mn"];

	switch (fType) {
	  case "user_list":
	  
			$("#aztira_konten").load("pages/bogormlm/user/list.html");
			$("#leftsidebar").hide();
			$("#aztira_konten").css("margin-left", "10px");
			$(".overlay").trigger("click");
			$(".bars").trigger("click");
		
		break;
	}
	
		
});