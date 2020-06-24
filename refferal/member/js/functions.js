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
						sessionStorage.setItem("aztira_cust_id", response.data.uuid);
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
					if(response.status=="Token is Expired"){
						alert("Token Anda Telah Expired, Silakan Login Kembali.");
						aztira_logout();
					}
						
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
															'<a href="?mn='+item2.linkz+'">'+ item2.nama_menu +'</a>'+
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
						alert('Ajax Error');
				}
            });
	}
	
	
function registerme(){
	$.ajax({
		type: "post",
		url: SERVER_API+"/api/register",
		beforeSend: function(request) {
			//request.setRequestHeader("x-api-key", X_API);
		},
		data: {
			name:  $("#name").val(),
			email:  $("#email").val(),
			username:  $("#username").val(),
			password:  $("#password").val(),
			password_confirmation:  $("#password_confirmation").val(),
		},
		dataType: "json",
		success: function (response) {
			if(response.status == false) {
				alert("register me ");
			} else {
				sessionStorage.setItem("aztira_cust_token", response.token);
				sessionStorage.setItem("aztira_cust_name", response.user.name);
				sessionStorage.setItem("aztira_cust_email", response.user.email);
				sessionStorage.setItem("aztira_cust_id", response.user.uuidx);
				window.location.href = base_url+"/index.html";
			}
		}, 
		error: function(res){
			alert("Cek Kembali, Silakan Coba Lagi..");
		}
	});
}

function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi,    
    function(m,key,value) {
      vars[key] = value;
    });
    return vars;
  }

function aztira_user(){	
	trhtml = "";
		$.ajax({
			type: "get",
			url: SERVER_API+"/api/user_list",
			data: {
			},
			headers: {
				'Accept':'application/json',
				'Content-Type':'application/json',
				'Authorization':'Bearer ' + sessionStorage.getItem("aztira_cust_token")
			},
			dataType: "json",
			success: function (response) {
					nomorist = 1;
					jQuery.each(response.data, function(index, item) {
						 
							trhtml = '<tr>'+
                                            '<td>'+nomorist+'.</td>'+
                                            '<td>'+item.username+'</td>'+
                                            '<td>'+item.name+'</td>'+
                                            '<td>27</td>'+
                                            '<td>2011/01/25</td>'+
                                            '<td>$112,000</td>'+
                                            '<th>Kota</th>'+
                                            '<th>'+item.email+'</th>'+
                                            '<th>Tanggal Join</th>'+
                                            '<th>Aktifkan</th>'+
                                        '</tr>';
							//alert(item.name);		
							$('#userList').append(trhtml);
							nomorist++;
					});
			}, 
			error: function(res){
				alert('ajax err');
			}
		});
}		

function goto_profile(){
	$("#aztira_konten").load("pages/bogormlm/user/profile.html");
}

function updateProfile(){
	
		$.ajax({
                type: "post",
                url: SERVER_API+"/api/user_update",
				headers: {
					'Accept':'application/json',
					'Content-Type':'application/x-www-form-urlencoded',
					'Authorization':'Bearer ' + sessionStorage.getItem("aztira_cust_token")
				},
                data: {
                    uuid:  sessionStorage.getItem("aztira_cust_id"),
                    name:  $("#profile_namalengkap").val()
                },
                dataType: "json",
                success: function (response) {
                    if(response.status == false) {
                      
                    } else {
						sessionStorage.setItem("aztira_cust_name", $("#profile_namalengkap").val());
						window.location.href = base_url+"/index.html";
					}
				}, 
				error: function(res){
					
				}
            });	
}