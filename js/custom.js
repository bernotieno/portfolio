(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#sideNav'
  });

})(jQuery); // End of use strict
// Ensure the script runs after the DOM is loaded
document.addEventListener("DOMContentLoaded", function() {
  // Initialize EmailJS with your User ID
  emailjs.init('z6ltx6l1K7FLzkr2a');  // Replace with your actual User ID
  
  const form = document.getElementById('contact-form');
  console.log(form);  // Ensure the form is selected correctly

  form.addEventListener('submit', function(event) {
      event.preventDefault();  // Prevent default form submission

      // Send the form data using EmailJS
      emailjs.sendForm('service_sop3bqd', 'template_jmehbga', form)
          .then(function(response) {
              console.log('Message sent successfully!', response);
          }, function(error) {
              console.error('Error sending message:', error);
          });
  });
});