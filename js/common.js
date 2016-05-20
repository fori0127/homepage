/*global $ */
// jQuery to collapse the navbar on scroll
function collapseNavbar() {
	"use strict";
	if ($(".navbar").offset().top > 50) {
		$(".navbar-fixed-top").addClass("top-nav-collapse");
	} else {
		$(".navbar-fixed-top").removeClass("top-nav-collapse");
	}
}

$(window).scroll(collapseNavbar);
$(document).ready(collapseNavbar);

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function () {
	"use strict";
	$('a.page-scroll').bind('click', function (event) {
		var $anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: ($($anchor.attr('href')).offset().top - 69)
		}, 1500, 'easeInOutExpo');
		event.preventDefault();
	});
});

// Closes the Responsive Menu on Menu Item Click
$(function () {
	"use strict";
	$('.navbar-collapse ul li a').click(function () {
		if ($(this).attr('class') !== 'dropdown-toggle active' && $(this).attr('class') !== 'dropdown-toggle') {
			$('.navbar-toggle:visible').click();
		}
	});
});

//company carousel
$(function () {
	"use strict";
	$("#visual").carousel({
		interval: 7000,
		wrap: true
	});
	$("#portfolio-lst, #client-list").carousel({
		interval: false,
		wrap: false
	});
	$(".carousel").swiperight(function () {
		$(this).carousel('prev');
	});
	$(".carousel").swipeleft(function () {
		$(this).carousel('next');
	});
	
});