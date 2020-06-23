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
						sessionStorage.setItem("aztira_cust_token", response.token);
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
							trhtml = '<li class="ll">'+
										'<a href="javascript:void(0)" onclick="goto_home()">'+
											'<i class="material-icons">home</i>'+
											'<span>'+ item.nama_menu +'</span>'+
										'</a>'+
									'</li>';
									
							//alert(item.nama_menu);
							
							$('#menuUL').append(trhtml);
						});
						
					
				}, 
				error: function(res){
					
				}
            });
	}
