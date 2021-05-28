
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

//Email user info
(function () {
  emailjs.init("user_rWCesWhsBB4eCL8VQAOuJ");
})();


//Send email to emailJS
window.onload = function () {
  document
    .querySelector(".order-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();     
      emailjs.sendForm("service_mxjx3iz", "template_x7tr2pe", this).then(
        function () {
          console.log("SUCCESS!"); 
          $('#exampleModal').modal("toggle") 
                
        },
        function (error) {
          console.log("FAILED...", error);
        }
        
      );
      event.target.reset();
    });
    
};






