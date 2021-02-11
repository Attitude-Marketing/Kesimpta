jQuery(document).ready(function( $ ) {
	//start of doc ready
	gsap.utils.toArray(".et_pb_text_inner").forEach(function(section) {		
	//Check if section title exist
		if(section.querySelector("h2") !== null){
			var titre = section.querySelector("h2");
			//Hide
			gsap.set(titre, {opacity:1});
			//Animate
			gsap.fromTo(titre, 0.5, {
			opacity:0,
			top:-20
			},
			{
			ease: "power3.out",
			top:0,
			opacity:1,
			delay:1,
			scrollTrigger: section
			});
		}
		
		//Check if section text exist
		if(section.querySelectorAll("p, ol li") !== null){
			var content = section.querySelectorAll("p, ol li");
			//Hide
			gsap.set(content, {opacity:1});
			//Animate
			gsap.fromTo(content, 0.5, {
			top:-20,
			opacity:0
			},
			{
			top:0,
			ease: "power3.out",
			opacity:1,
			delay:1.50,
			scrollTrigger: section
			});
		}
		
		
		
	});
	//end of doc ready
});