// review button opens modal

let reviewButton = () => {
  $("#exampleModal").modal("show");
};



// sends review to email template and shows completed modal

let reviewSend = () => {
  $("#exampleModal").modal("hide");
  $("#exampleModalTwo").modal("show");
  setTimeout(() => $("#exampleModalTwo").modal("hide"), 3000);
};

// stars rating system

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

// api to emailJS

window.onload = () => {
  document
  .querySelector('.review-form')
  .addEventListener("submit", sendEmail = (event) => {
  event.preventDefault();
  
    let data = {
      service_id: 'service_mxjx3iz',
      template_id: 'template_csuhnz3',
      user_id: 'user_rWCesWhsBB4eCL8VQAOuJ',
      template_params: {
          'product': event.target.product.value,
          'name': event.target.name.value,
          'review': event.target.review.value,
          'rating': $(".stars").attr("data-rating")
          
          
      }
    };
    
    $.ajax('https://api.emailjs.com/api/v1.0/email/send', {
      type: 'POST',
      data: JSON.stringify(data),
      contentType: 'application/json'
    }).done(function() {
      console.log('Your mail is sent!');
    }).fail(function(error) {
      console.log('Oops... ' + JSON.stringify(error));
    });
  })
}
