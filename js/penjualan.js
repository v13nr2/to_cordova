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

	reloadTotalQTY();
});

var barisCounter = 1;
var set_TR_number = 0;
var totalQTY = 0;

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
			'<td><input type="text" id="qty_'+barisCounter+'"  size="3"  oninput="hitung('+barisCounter+'); reloadTotalQTY()" value="1" onfocus="set_TR('+barisCounter+')"  ></td>'+
			'<td><input type="text" id="total_'+barisCounter+'"  size="5" readonly value="0" onfocus="set_TR('+barisCounter+')"  ></td></tr>';
		
	$("#mainTable").append(TR);
	reloadTotalQTY();
	reloadTotal();
}

function removeTR(z){
	$("#tr_ke_"+TR_number).remove();
	reloadTotalQTY();
	reloadTotal();
}

function hitung(z){
	//console.log(z);
	harga = $("#harga_"+z).val() * 1;
	qty = $("#qty_"+z).val() * 1;
	total = harga * qty;
	$("#total_"+z).val(total);
	reloadTotal();
}


function goto_penjualan(){
	window.location.href = base_url+"/pages/tables/editable-table.html";
}

function set_TR(z){
	TR_number = z;
}

function reloadTotalQTY(){
	totalQTY = 0;
	for(i=0;i<=400;i++){
		if($('#qty_'+i).val()!=undefined){
			totalQTY = totalQTY + ($('#qty_'+i).val() * 1);
		}
	}
	
	$("#totalqty").html(totalQTY);
}

function reloadTotal(){
	total = 0;
	for(i=0;i<=400;i++){
		if($('#total_'+i).val()!=undefined){
			total = total + ($('#total_'+i).val() * 1);
		}
	}
	
	$("#total").html(total);
}