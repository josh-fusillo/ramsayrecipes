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
  $("#exampleModal").modal("hide");
  $("#exampleModalTwo").modal("show");
  setTimeout(() => $("#exampleModalTwo").modal("hide"), 3000);
};

document.addEventListener("DOMContentLoaded", function () {
  let stars = document.querySelectorAll(".star");
  stars.forEach(function (star) {
    star.addEventListener("click", setRating);
  });

  let rating = parseInt(
    document.querySelector(".stars").getAttribute("data-rating")
  );
  let target = stars[rating - 1];
  target.dispatchEvent(new MouseEvent("click"));
});

function setRating(ev) {
  let span = ev.currentTarget;
  let stars = document.querySelectorAll(".star");
  let match = false;
  let num = 0;
  stars.forEach(function (star, index) {
    if (match) {
      star.classList.remove("rated");
    } else {
      star.classList.add("rated");
    }
    //are we currently looking at the span that was clicked
    if (star === span) {
      match = true;
      num = index + 1;
    }
  });
  document.querySelector(".stars").setAttribute("data-rating", num);
}
