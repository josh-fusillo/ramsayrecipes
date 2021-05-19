import emailjs from "emailjs-com";

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_mxjx3iz",
        "template_wiw8kem",
        e.target,
        "user_rWCesWhsBB4eCL8VQAOuJ"
      )
      .then(
        (result) => {
          alert("Thank you for the contact details - I will reach out shortly!");
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }


