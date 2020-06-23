	function aztira_login(){
		$.ajax({
                type: "post",
                url: SERVER_API+"api/user/login",
				beforeSend: function(request) {
					request.setRequestHeader("x-api-key", X_API);
				},
                data: {
                    username:  $("#email").val(),
                    password:  $("#password").val()
                },
                dataType: "json",
                success: function (response) {
                    if(response.status == false) {
                      
                    } else {
						sessionStorage.setItem("aztira_cust_token", response.token);
						sessionStorage.setItem("aztira_cust_id", response.data.id);
						sessionStorage.setItem("aztira_cust_uuid", response.data.random_unik);
						sessionStorage.setItem("aztira_cust_email", response.data.email);
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
	
