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
var set_TR_number = 0;

function signout(){
	window.location.href = "../../pages/examples/sign-in.html";
}
function login(){
	window.location.href = "../../index.html";
}

function addTR(){
	barisCounter++;
	TR = '<tr id="tr_ke_'+barisCounter+'"><td><input type="text" id="produk_'+barisCounter+'" size="8"  value="Produk '+barisCounter+'" onfocus="set_TR('+barisCounter+')"  ></td>'+
			'<td><input type="text" id="harga_'+barisCounter+'" size="5" oninput="hitung('+barisCounter+')" value="0" onfocus="set_TR('+barisCounter+')"  ></td>'+
			'<td><input type="text" id="qty_'+barisCounter+'"  size="3"  oninput="hitung('+barisCounter+')" value="1" onfocus="set_TR('+barisCounter+')"  ></td>'+
			'<td><input type="text" id="total_'+barisCounter+'"  size="5" readonly value="0" onfocus="set_TR('+barisCounter+')"  ></td></tr>';
		
	$("#mainTable").append(TR);
	$("#totalqty").html(($("#totalqty").val()*1)+1);
}

function removeTR(z){
	$("#tr_ke_"+TR_number).remove();
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

function set_TR(z){
	TR_number = z;
}