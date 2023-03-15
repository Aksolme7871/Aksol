(function ($) {
    "use strict";
  
    $(".testimonials-slides").owlCarousel({
      loop: true,
      nav: false,
      dots: true,
      smartSpeed: 500,
      margin: 25,
      center: true,
      autoplayHoverPause: true,
      autoplay: true,
  
      responsive: {
        0: {
          items: 1,
        },
        768: {
          items: 2,
        },
        1024: {
          items: 3,
        },
        1200: {
          items: 4,
        },
      },
    });
  
    $(".brand-carousel").owlCarousel({
      loop: true,
      nav: false,
      dots: true,
      smartSpeed: 500,
      margin: 25,
      center: true,
      autoplayHoverPause: true,
      autoplay: true,
  
      responsive: {
        0: {
          items: 1,
        },
        768: {
          items: 2,
        },
        1024: {
          items: 3,
        },
        1200: {
          items: 4,
        },
      },
    });
  
    $(".services-slides-two").owlCarousel({
      loop: true,
      nav: false,
      dots: true,
      smartSpeed: 500,
      margin: 25,
      center: true,
      autoplayHoverPause: true,
      autoplay: true,
  
      responsive: {
        0: {
          items: 1,
        },
        768: {
          items: 2,
        },
        1024: {
          items: 3,
        },
        1200: {
          items: 4,
        },
      },
    });

       // MixItUp JS
	try {
    var mixer = mixitup('#Container', {
        controls: {
            toggleDefault: 'none'
        }
    });
} catch (err) {}
  })(window.jQuery);
  /* Description: Custom JS file */

/* Navigation*/
// Collapse the navbar by adding the top-nav-collapse class
window.onscroll = function () {
	scrollFunction();
	scrollFunctionBTT(); // back to top button
};

window.onload = function () {
	scrollFunction();
};

function scrollFunction() {
	if (document.documentElement.scrollTop > 30) {
		document.getElementById("navbarExample").classList.add("top-nav-collapse");
	} else if ( document.documentElement.scrollTop < 30 ) {
		document.getElementById("navbarExample").classList.remove("top-nav-collapse");
	}
}

// Navbar on mobile
let elements = document.querySelectorAll(".nav-link:not(.dropdown-toggle)");

for (let i = 0; i < elements.length; i++) {
	elements[i].addEventListener("click", () => {
		document.querySelector(".offcanvas-collapse").classList.toggle("open");
	});
}

document.querySelector(".navbar-toggler").addEventListener("click", () => {
  	document.querySelector(".offcanvas-collapse").classList.toggle("open");
});

// Hover on desktop
function toggleDropdown(e) {
	const _d = e.target.closest(".dropdown");
	let _m = document.querySelector(".dropdown-menu", _d);

	setTimeout(
		function () {
		const shouldOpen = _d.matches(":hover");
		_m.classList.toggle("show", shouldOpen);
		_d.classList.toggle("show", shouldOpen);

		_d.setAttribute("aria-expanded", shouldOpen);
		},
		e.type === "mouseleave" ? 300 : 0
	);
}

// On hover
const dropdownCheck = document.querySelector('.dropdown');

if (dropdownCheck !== null) { 
	document.querySelector(".dropdown").addEventListener("mouseleave", toggleDropdown);
	document.querySelector(".dropdown").addEventListener("mouseover", toggleDropdown);

	// On click
	document.querySelector(".dropdown").addEventListener("click", (e) => {
		const _d = e.target.closest(".dropdown");
		let _m = document.querySelector(".dropdown-menu", _d);
		if (_d.classList.contains("show")) {
			_m.classList.remove("show");
			_d.classList.remove("show");
		} else {
			_m.classList.add("show");
			_d.classList.add("show");
		}
	});
}
  
/* Back To Top Button */
// Get the button
myButton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
function scrollFunctionBTT() {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		myButton.style.display = "block";
	} else {
		myButton.style.display = "none";
	}
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
	document.body.scrollTop = 0; // for Safari
	document.documentElement.scrollTop = 0; // for Chrome, Firefox, IE and Opera
}
  
$('.projects-filter-menu').mixitup({

  // default selectors
  selectors: {
    target: '.mix',
    filter: '.filter',
    sort: '.sort'
  },

  // config animations here
  animation: {
    enable: true,
    // fade, scale, translateX, translateY
    // translateZ, rotateX, rotateY
    // rotateZ, stagger
    effects: 'fade scale',
    duration: 600,
    easing: 'ease',
    perspectiveDistance: '3000',
    perspectiveOrigin: '50% 50%',
    queue: true,
    queueLimit: 1,
    animateChangeLayout: false,
    animateResizeContainer: true,
    animateResizeTargets: false,
    staggerSequence: false,
    reverseOut: false
  },

  // callbacks
  callbacks: {
    onMixLoad: false,
    onMixStart: false,
    onMixBusy: false,
    onMixEnd: false,
    onMixFail: false,
    _user: false
  },

  // config controls here
  controls: {
    enable: true,
    live: false,
    toggleFilterButtons: false,
    toggleLogic: 'or',
    activeClass: 'active'
  },

  // layout options
  layout: {
    display: 'inline-block',
    containerClass: '',
    containerClassFail: 'fail'
  },

  load: {
    filter: 'all', // e.g. 'none', '.category-1'
    sort: false // e.g. 'age:desc name:asc'
  },

});
  
  