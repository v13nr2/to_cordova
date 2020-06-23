	function aztira_login(){
		$.ajax({
                type: "post",
                url: SERVER_API+"/api/login",
				beforeSend: function(request) {
					//request.setRequestHeader("x-api-key", X_API);
				},
                data: {
                    email:  $("#email").val(),
                    password:  $("#password").val()
                },
                dataType: "json",
                success: function (response) {
                    if(response.status == false) {
                      
                    } else {
						sessionStorage.setItem("aztira_cust_token", response.token.token);
						sessionStorage.setItem("aztira_cust_name", response.data.name);
						sessionStorage.setItem("aztira_cust_email", response.data.email);
						sessionStorage.setItem("aztira_cust_id", 1);
						window.location.href = base_url+"/index.html";
					}
				}, 
				error: function(res){
					
				}
            });
	}
	
	function aztira_logout(){
		
		sessionStorage.setItem("aztira_cust_token", "");
		sessionStorage.setItem("aztira_cust_id", "");
		sessionStorage.setItem("aztira_cust_email", "");
		sessionStorage.setItem("aztira_cust_uuid", "");
		window.location.href = base_url+"/pages/base/sign-in.html";
	}
	
	
	function aztira_menu(){
		trhtml = "";
		$.ajax({
                type: "get",
                url: SERVER_API+"/api/menu_get",
                data: {
                },
				headers: {
					'Accept':'application/json',
					'Content-Type':'application/json',
					'Authorization':'Bearer ' + sessionStorage.getItem("aztira_cust_token")
				},
                dataType: "json",
                success: function (response) {
                
						
						jQuery.each(response, function(index, item) {
							if(item.parent_id == 0){
										
								trhtml = '<li>'+
									
											'<a href="javascript:void(0);" class="menu-toggle" data-toggle="collapse" data-target=".ml-menu'+index+'">'+
												'<i class="material-icons">swap_calls</i>'+
												'<span>'+ item.nama_menu +'</span>'+
											'</a>'+
											
											'<ul class="ml-menu'+index+' collapse">';
											
											
											jQuery.each(response, function(index2, item2) {
												if(item2.parent_id == item.id){
													trhtml += 	'<li>'+
															'<a href="#">'+ item2.nama_menu +'</a>'+
														'</li>';
												}
													
											});
									 
											trhtml +='</ul>'+
											
											
										'</li>';
										
								//alert(item.nama_menu);
								
								$('#menuUL').append(trhtml);
							}
						});
						
					
				}, 
				error: function(res){
					
				}
            });
	}
	
	
function registerme(){
	alert("register me ");
}
