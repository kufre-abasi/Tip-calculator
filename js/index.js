
function calc() {
    var bill = Number(document.getElementById('bill').value);
    // var total_bill = bill + tip;
    if( bill > 0 ){
        var tip = bill * .100;
       }
          else{
            alert('invalid')
          }


    document.getElementById("tip").innerHTML = "$" + Number(tip).toFixed(2);
    // document.getElementById("total").innerHTML = "$" + Number(total_bill).toFixed(2);
    //
}