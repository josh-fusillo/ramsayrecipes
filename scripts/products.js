let reviewButton = () => {
  $("#exampleModal").modal("show");
};

(function () {
  emailjs.init("user_rWCesWhsBB4eCL8VQAOuJ");
})();

window.onload = function () {
  document
    .querySelector(".review-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      emailjs.sendForm("service_mxjx3iz", "template_csuhnz3", this).then(
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

let reviewSend = () => {
    $("#exampleModal").modal("hide")
    $("#exampleModalTwo").modal("show")
    setTimeout(() => ($("#exampleModalTwo").modal("hide")), 3000)
    


}
