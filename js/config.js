base_url = "http://localhost/CORDOVA/git";
X_API = "2D63FCB76054CEEB3183E8F9D96B5D59";
SERVER_API = "http://api.jogjaide-enterprise.com/";

   
function cek_login(){
	
        if(sessionStorage.getItem("aztira_cust_id")=="" || sessionStorage.getItem("aztira_cust_id")==undefined || sessionStorage.getItem("aztira_cust_token")=="" || sessionStorage.getItem("aztira_cust_token")==undefined){
           
               return false;
           
       } else {

                return true;

       }

       return false;

}


function goto_home(){
	window.location.href = base_url+"/index.html";
}

function goto_penjualan(){
	window.location.href = base_url+"/pages/tables/editable-table.html";
}