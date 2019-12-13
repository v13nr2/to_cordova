base_url = "http://localhost/CORDOVA/git";
X_API = "9D130421EFB30A0D867A95F4C2C7A976";
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