base_url = "http://localhost/git/mlm/frontendMLM/refferal/member";
X_API = "646859D797126335C62FE081FB4558C5";
SERVER_API = "http://localhost:8000";

   
function cek_login(){
	
        if(sessionStorage.getItem("aztira_cust_id")=="" || sessionStorage.getItem("aztira_cust_id")==undefined || sessionStorage.getItem("aztira_cust_token")=="" || sessionStorage.getItem("aztira_cust_token")==undefined){
           
               return false;
           
       } else {

                return true;

       }

       return false;

}


function goto_home(){
	$("#aztira_konten").load("pages/aztira/dashboard.html");
	$(".bars").trigger("click");
}

function goto_penjualan(){
	$("#aztira_konten").load("pages/aztira/penjualan.html");
	$(".bars").trigger("click");
}

function goto_penjualan_list(){
	$("#aztira_konten").load("pages/aztira/penjualan_list.html");
	$(".bars").trigger("click");
}

function goto_data_produk(){
	$("#aztira_konten").load("pages/aztira/pos/produk.html");
	$(".bars").trigger("click");
}

function goto_add_produk(){
	$("#aztira_konten").load("pages/aztira/pos/produk_add.html");
	$(".bars").trigger("click");
}