jQuery(document).ready(function( $ ) {
	//start of doc ready
	
	var globalEaseParam1 = 1.0;
	var globalEaseParam2 = 0.8;
	var globalDuration = 0.4;
	var globalDistance = 50;
	var glabalEase = "circ.out";
	
	var ctrl = new ScrollMagic.Controller();

	// Create scenes in jQuery each() loop
	$(".et_pb_section").each(function(i) {
		//title
		var titles = $(this).find("h2");
		var subtitles = $(this).find("h3");
		//textes
		var texts = $(this).find("p");
		//li
		var listItems = $(this).find("li");
		//ctas
		var ctas = $(this).find("a");
		//images not specified
		var imgs = $(this).find(".et_pb_image img:not(.gsapFromBottom, .gsapFromRight, .gsapPop) img");
		//images from bottom
		var imgsFromBottom = $(this).find(".et_pb_image.gsapFromBottom img");
		//images from right
		var imgsFromRight = $(this).find(".et_pb_image.gsapFromRight img");
		//images pop
		var imgsPop = $(this).find(".et_pb_image.gsapPop img");
		//Timeline
		var tl = new TimelineMax();
		//animations for content
		tl.fromTo(titles, globalDuration, {opacity:0, top:globalDistance},{ opacity:1, top: 0, ease: glabalEase });
		tl.fromTo(subtitles, globalDuration, {opacity:0, top:globalDistance},{ opacity:1, top: 0, ease: glabalEase });
		tl.fromTo(texts, globalDuration, {opacity:0, top:globalDistance},{ opacity:1, top: 0, ease: glabalEase });
		tl.staggerFromTo(listItems, globalDuration, {opacity:0, top:globalDistance},{ opacity:1, top: 0, ease: glabalEase },0.2);
		tl.fromTo(ctas, 0.25, {opacity:0, top:globalDistance},{ opacity:1, top: 0, ease: glabalEase });

		//animations for imgs (start at 0)
		tl.fromTo(imgs, globalDuration, {opacity:0, left:globalDistance},{ opacity:1, left: 0, ease: glabalEase },0);
		tl.fromTo(imgsFromBottom, globalDuration, {opacity:0, top:globalDistance},{ opacity:1, top: 0, ease: glabalEase },0);
		

		if (window.matchMedia('(min-width: 980px)').matches) {
	        tl.fromTo(imgsFromRight, globalDuration, {opacity:0, left:"18vw"},{ opacity:1, left: "15vw", ease: glabalEase },0);
	    } else {
	        tl.fromTo(imgsFromRight, globalDuration, {opacity:0, left:globalDistance},{ opacity:1, left: 0, ease: glabalEase },0);
	    }
		tl.fromTo(imgsPop, globalDuration, {opacity:0, scale:0},{ opacity:1, scale: 1, ease: glabalEase },0);

		new ScrollMagic.Scene({
			triggerElement: this,
			triggerHook: 0.5,
			reverse: false
		})
		.setTween(tl)
		.addTo(ctrl);
	});
	
	//Anchor scroll to animations
		$(".box-cta a").click(function(e) {
	    e.preventDefault();
	    console.log("prevented!");
	    var scrollTo = $(this).attr("href");
	    $('html,body').animate({scrollTop: $(scrollTo).offset().top},'slow');
	});

	//Nav background on scroll
	$(window).scroll(function(){
	  var fixed = $("#main-header");
	  
	  var fixed_position = $("#main-header").offset().top;
	  var fixed_height = $("#main-header").height();

	    var addClass = false;
	    $('.et_pb_section').each(function(){

	        var toCross_position = $(this).offset().top;
	        var toCross_height = $(this).height();
	        var toCross_color = $(this).css("background-color");
	        if($(this).css('background-color') === 'rgb(255, 255, 255)'){
	        	toCross_color = "rgba(0, 0, 0, 0)";
	        }
	        if (fixed_position + fixed_height  < toCross_position) {
	            
	        } else if (fixed_position > toCross_position + toCross_height) {
	            toCross_color = "rgba(0, 0, 0, 0)";
	            fixed.css("background-color", toCross_color);
	        } else {
	            addClass = true;
	            fixed.css("background-color", toCross_color);
	        }
	    });
	    if(addClass == true){
	        fixed.addClass('withBg');
	    }else{
	        fixed.addClass('withBg');
	    }
	});

	//end of doc ready
});