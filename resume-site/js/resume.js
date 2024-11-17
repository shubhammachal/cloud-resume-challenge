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

  // Visitor counter functionality
  async function updateVisitorCount() {
    try {
      // Replace with your actual API Gateway URL for the put function
      const putResponse = await fetch('https://fbrof3gjqk.execute-api.us-east-1.amazonaws.com/Prod/put');
      const putData = await putResponse.json();
      
      if (putData.count) {
        // Update the visitor count on the webpage
        document.getElementById('visitor-count').textContent = putData.count;
      }
    } catch (error) {
      console.error('Error updating visitor count:', error);
    }
  }

  // Call the visitor counter function when the page loads
  document.addEventListener('DOMContentLoaded', updateVisitorCount);

})(jQuery); // End of use strict