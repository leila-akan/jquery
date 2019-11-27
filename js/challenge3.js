// ch3form.onsubmit = function() {
//     var fruit =
//     document.querySelectorAll('input[name="fruit"]')
//
//
//     for (let i = 0; i < fruit.length;i++){
//         if (fruit[i].checked)
//             return true;
//     }
//
//     alert("You must pick a fruit!")
//     return false;





    // Advanced Answer
    // if(document.querySelector('input[name="fruit"]:checked'))
    //     return true;

    // alert("You must pick a fruit!")
    // return false;
  // }
$("form").submit(function( event ) {
  console.log($("input[name=fruit]:checked").val())
  console.log($("input[name=standing]:checked").val())
  if (
    ($("input[name=fruit]:checked").val()!=undefined)  &&      ($("input[name=standing]:checked").val()!=undefined)){

        console.log("checked");
}
else{
alert("You must pick a standing and fruit!")
event.preventDefault();
}
});
