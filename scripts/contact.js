// modal for sending contact
let contactSend = () => {
  $("#contactModal").modal("show");
    setTimeout(() => $("#contactModal").modal("hide"), 2500)
}

// api to emailJS

window.onload = () => {
  document
  .querySelector('.contactform')
  .addEventListener("submit", sendEmail = (event) => {
  event.preventDefault();
  
    let data = {
      service_id: 'service_mxjx3iz',
      template_id: 'template_wiw8kem',
      user_id: 'user_rWCesWhsBB4eCL8VQAOuJ',
      template_params: {          
          'name': event.target.name.value,
          'email': event.target.email.value,
          'phone': event.target.phone.value,
          'message': event.target.message.value        
          
      }
    };
    
    $.ajax('https://api.emailjs.com/api/v1.0/email/send', {
      type: 'POST',
      data: JSON.stringify(data),
      contentType: 'application/json'
    }).done(function() {
      contactSend();
      event.target.reset();
      console.log('Your mail is sent!');
    }).fail(function(error) {
      console.log('Oops... ' + JSON.stringify(error));
    });
  })
}


