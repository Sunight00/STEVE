const seemoreBtn = document.getElementById("btn");
const moreServices = document.querySelectorAll(".more-services");

seemoreBtn.addEventListener("click", () => {
    moreServices.forEach(service => {
        service.classList.toggle("active");
    });

    seemoreBtn.textContent =
        seemoreBtn.textContent === "See More"
            ? "See Less"
            : "See More";
});

document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault(); // prevent page reload

  emailjs.sendForm('service_rzzge44','template_hdd9gog', this)
    .then(function() {

    document.getElementById('form-message').innerHTML = "<p style='color:green;'>Message sent successfully!</p>";
      document.getElementById('contact-form').reset();
    }, function(error) {
      document.getElementById('form-message').innerHTML = "<p style='color:red;'>Oops! Something went wrong.</p>";
      console.error('FAILED...', error);
    });
});