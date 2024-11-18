(function($) {
  "use strict";

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
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

  // Visitor counter function
  async function get_visitors() {
    try {
      const response = await fetch('https://fbrof3gjqk.execute-api.us-east-1.amazonaws.com/Prod/get', { method: 'GET' });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      // Update the visitor count on the page
      document.getElementById("visitors").textContent = data['count'];
    } catch (err) {
      console.error('Failed to fetch visitor count:', err);
      document.getElementById("visitors").textContent = 'Error';
    }
  }

  async function increment_visitors() {
    try {
      const response = await fetch('https://fbrof3gjqk.execute-api.us-east-1.amazonaws.com/Prod/put', { method: 'POST' });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      await get_visitors(); // Refresh the count after increment
    } catch (err) {
      console.error('Failed to increment visitor count:', err);
    }
  }

  // Call visitor counter and increment on DOM load
  document.addEventListener('DOMContentLoaded', () => {
    get_visitors();      // Fetch and display the current count
    increment_visitors(); // Increment the visitor count
  });

})(jQuery);
