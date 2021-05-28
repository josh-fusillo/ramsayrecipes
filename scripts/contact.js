// modal for sending contact
let contactSend = () => {
  $("#contactModal").modal("show");
    setTimeout(() => $("#contactModal").modal("hide"), 2500)
}


(function () {
 
  emailjs.init("user_rWCesWhsBB4eCL8VQAOuJ");
})();

window.onload = function () {
  document
    .getElementById("contact-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      
      // these IDs from the previous steps
      emailjs.sendForm("service_mxjx3iz", "template_wiw8kem", this).then(
        function () {
          console.log("SUCCESS!");          
        },
        function (error) {
          console.log("FAILED...", error);
        }
      );
      event.target.reset();
    });
};
