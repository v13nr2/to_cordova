if(!cek_login()){
	aztira_logout();
}

$(document).ready(function(){
	
	jQuery("input:text").keyup(function() {    
	  currentTabIndex = parseInt(jQuery(this).val() * 1);
	  //console.log(currentTabIndex);
	}); 

	reloadTotalQTY();
	reloadTotal();
});

var barisCounter = 1;
var set_TR_number = 0;
var totalQTY = 0;
var TR_number = 0;

function signout(){
	window.location.href = "../../pages/examples/sign-in.html";
}
function login(){
	window.location.href = "../../index.html";
}

function addTR(){
	barisCounter++;
	TR = '<tr id="tr_ke_'+barisCounter+'"><td><input type="text" class="toSend"  name="produk[]" id="produk_'+barisCounter+'" size="20"  value="" onfocus="set_TR('+barisCounter+')"  ></td>'+
			'<td><input type="text" id="harga_'+barisCounter+'" class="toSend"  name="harga[]" size="5" oninput="hitung('+barisCounter+')" value="0" onfocus="set_TR('+barisCounter+')"  ></td>'+
			'<td><input type="text" id="qty_'+barisCounter+'"  class="toSend"  size="3"  name="qty[]" oninput="hitung('+barisCounter+'); reloadTotalQTY()" value="0" onfocus="set_TR('+barisCounter+')"  ></td>'+
			'<td><input type="text" id="total_'+barisCounter+'"  class="toSend"  size="5" readonly name="total[]" value="0" onfocus="set_TR('+barisCounter+')"  ></td></tr>';
		
	$("#mainTable").append(TR);
	reloadTotalQTY();
	reloadTotal();
	toAutoComplete(barisCounter);
}

function removeTR(z){
	if(TR_number != "undefined"){
		$("#tr_ke_"+TR_number).remove();
		reloadTotalQTY();
		reloadTotal();
	}
}

function hitung(z){
	//console.log(z);
	harga = $("#harga_"+z).val() * 1;
	qty = $("#qty_"+z).val() * 1;
	total = harga * qty;
	$("#total_"+z).val(total);
	reloadTotal();
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


function sendingData(){
		$.ajax({
			url : SERVER_API+"api/aztira_transaksi/add",
			type: 'POST',
			beforeSend: function(request) {
					request.setRequestHeader("x-api-key", X_API),
					request.setRequestHeader("x-token", sessionStorage.getItem("aztira_cust_token"))
				},
                data: $(".toSend").serialize(),
                dataType: "json",
                success: function (response) {
						var i;
					 
						Swal.fire(
						  'Sukses!',
						  response.message,
						  'success'
						)

						for(i=0;i<=300;i++){
							$("#tr_ke_"+i).remove();
							reloadTotalQTY();
							reloadTotal();
						}

						addTR();
				
				}, 
				error: function(res){
					
				}
            });
	
	}