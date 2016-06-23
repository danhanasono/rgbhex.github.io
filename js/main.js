$(document).ready(function() {

	//Oridomi
	var folded = new OriDomi('#the-fold', {
	  vPanels:         3,     // number of panels when folding left or right (vertically oriented)
	  speed:           1200,  // folding duration in ms
	});

	folded.wait(3000).stairs(40);
	setTimeout (tagReveal,3000);

	function tagReveal(){
		var $el = $(".tagline:first"), text = $el.text(),
		    words = text.split(" ");

		var html = "";
		for (var i = 0; i < words.length; i++) {
		    html += "<span>" + words[i] + " </span>";
		};
		$el.html(html).children().hide().each(function(i){
		  $(this).delay(i*400).fadeIn(700);
		});
	};

	



	//Sticky navbar on scroll
	var mn = $(".navbar");
    mns = "navbar-scrolled";
    hdr = $('#hero').height();

	$(window).scroll(function() {
		if( $(this).scrollTop() > hdr ) {
			mn.addClass(mns);
		} else {
			mn.removeClass(mns);
		}
	});


	//Smooth scroll
	$("a[href^='#']:not([href=#carousel-gallery])").on('click', function(e) {

		// prevent default anchor click behavior
		e.preventDefault();

		// store hash
		var hash = this.hash;

		// animate
		$('html, body').animate({
			scrollTop: $(hash).offset().top
		}, 800, function(){

			// when done, add hash to url
			// (default click behaviour)
			window.location.hash = hash;
		});
	});

});
