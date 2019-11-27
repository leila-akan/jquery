$("#subscribe").click(function(){
	if ($(this).is("input:checked")){
    $("#emailField").show();
		console.log("selected")
	}

	else {
		$("#emailField").hide();
		console.log("not selected")
	}
  });
