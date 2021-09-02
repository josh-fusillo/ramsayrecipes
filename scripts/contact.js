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

        'name': event.target.name.value,
        'email': event.target.email.value,
        'phone': event.target.phone.value,
        'message': event.target.message.value,
        _template: "table",


      };

      $.ajax('https://formsubmit.co/ajax/josh.fusillo@gmail.com', {
        type: 'POST',
        
        data: JSON.stringify(data),
        contentType: 'application/json'
      }).done(function () {
        contactSend();
        event.target.reset();
        console.log('Your mail is sent!');
      }).fail(function (error) {
        console.log('Oops... ' + JSON.stringify(error));
      });
    })
}