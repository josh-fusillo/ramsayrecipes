
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



window.onload = () => {
  document
  .querySelector('.order-form')
  .addEventListener("submit", sendEmail = (event) => {
  event.preventDefault();
  
    let data = {
      service_id: 'service_mxjx3iz',
      template_id: 'template_x7tr2pe',
      user_id: 'user_rWCesWhsBB4eCL8VQAOuJ',
      template_params: {
          'firstName': event.target.firstName.value,
          'lastName': event.target.lastName.value,
          'emailAddress': event.target.emailAddress.value,
          'phoneNumber': event.target.phoneNumber.value,
          'addressOne': event.target.addressOne.value,
          'addressTwo': event.target.addressTwo.value,
          'city': event.target.city.value,
          'province': event.target.province.value,
          'postalCode': event.target.postalCode.value,
          'itemOne': event.target.itemOne.value,
          'itemTwo': event.target.itemTwo.value,
          'itemThree': event.target.itemThree.value,
          'itemFour': event.target.itemFour.value          
      }
    };
    
    $.ajax('https://api.emailjs.com/api/v1.0/email/send', {
      type: 'POST',
      data: JSON.stringify(data),
      contentType: 'application/json'
    }).done(function() {
      $('#exampleModal').modal("toggle") 
      console.log('Your mail is sent!');
    }).fail(function(error) {
      console.log('Oops... ' + JSON.stringify(error));
    });
  })
}






