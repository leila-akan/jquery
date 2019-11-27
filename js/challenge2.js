// useBilling.onchange = function() {
// 	let home = document.querySelector("#home");
// 	let billing = document.querySelector("#billing");
//
// 	if (this.checked){
// 		home.value = billing.value;
// 		home.disabled = true;}
// 	else {
// 		home.value = "";
// 		home.disabled = false;}
//
// 	}

$("#useBilling").click(function(){
	var b = $("#billing").val()
	if ($(this).is("input:checked")){
    $("#home").val(b);
		$("#home").attr("disabled",true);
		console.log("checked")
	}
	else {
		$("#home").val() = "";
		$("#home").attr("disabled",false);
		console.log("not checked")
	}
  });
