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


	var tl = new TimelineMax();
	//animations for content
	tl.fromTo(titles, globalDuration, {opacity:0, top:globalDistance},{ opacity:1, top: 0, ease: glabalEase });
	tl.fromTo(texts, globalDuration, {opacity:0, top:globalDistance},{ opacity:1, top: 0, ease: glabalEase });
	tl.staggerFromTo(listItems, globalDuration, {opacity:0, top:globalDistance},{ opacity:1, top: 0, ease: glabalEase },0.2);
	tl.fromTo(ctas, 0.25, {opacity:0, top:globalDistance},{ opacity:1, top: 0, ease: glabalEase });

	//animations for imgs (start at 0)
	tl.fromTo(imgs, globalDuration, {opacity:0, left:globalDistance},{ opacity:1, left: 0, ease: glabalEase },0);
	tl.fromTo(imgsFromBottom, globalDuration, {opacity:0, top:globalDistance},{ opacity:1, top: 0, ease: glabalEase },0);
	tl.fromTo(imgsFromRight, globalDuration, {opacity:0, left:globalDistance},{ opacity:1, left: 0, ease: glabalEase },0);
	tl.fromTo(imgsPop, globalDuration, {opacity:0, scale:0},{ opacity:1, scale: 1, ease: glabalEase },0);

	new ScrollMagic.Scene({
		triggerElement: this,
		triggerHook: 0.15,
		reverse: false
		})
		.setTween(tl)
		.addTo(ctrl);
	});
	
	
	//end of doc ready
});