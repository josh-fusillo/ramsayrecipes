
// checkform for validation
let checkform = () => {  
  let f = document.forms["order-form"].elements;
  let cansubmit = true;
  for (let i = 0; i < f.length; i++) {
      if (f[i].value.length == 0)(f[i].value == null)
          cansubmit = false;      

  }

  document.querySelector('#submitbutton').disabled = !cansubmit;
}
window.onload = checkform;


//checkform for dropdown validation
function enableButton()
{
    var selectelem = document.getElementById('itemOne');
    var btnelem = document.getElementById('submitbutton');
    btnelem.disabled = !selectelem.value;
}








