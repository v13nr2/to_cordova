if(!cek_login()){
	aztira_logout();
}

$(document).ready(function(){
	$("#menusamping").load("../../pages/aztira/menusamping.html");
	$("#userinfo").load("../../pages/aztira/userinfo.html");
	
	jQuery("input:text").keyup(function() {    
	  currentTabIndex = parseInt(jQuery(this).val() * 1);
	  //console.log(currentTabIndex);
	}); 



});

var barisCounter = 1;

function signout(){
	window.location.href = "../../pages/examples/sign-in.html";
}
function login(){
	window.location.href = "../../index.html";
}

function addTR(){
	barisCounter++;
	TR = '<tr><td><input type="text" id="produk_'+barisCounter+'" size="8"  value="Produk '+barisCounter+'"></td>'+
			'<td><input type="text" id="harga_'+barisCounter+'" size="5" oninput="hitung('+barisCounter+')" value="0"></td>'+
			'<td><input type="text" id="qty_'+barisCounter+'"  size="3"  oninput="hitung('+barisCounter+')" value="1"></td>'+
			'<td><input type="text" id="total_'+barisCounter+'"  size="5" value="0"></td></tr>';
		
	$("#mainTable").append(TR);
	$("#totalqty").html(($("#totalqty").val()*1)+1);
}

function hitung(z){
	console.log(z);
	harga = $("#harga_"+z).val() * 1;
	qty = $("#qty_"+z).val() * 1;
	total = harga * qty;
	$("#total_"+z).val(total);
}


function goto_penjualan(){
	window.location.href = base_url+"/pages/tables/editable-table.html";
}


