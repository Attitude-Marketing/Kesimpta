<?php
function divi__child_theme_enqueue_styles() {
    wp_enqueue_style( 'parent-style', get_template_directory_uri() . '/style.css' );
}
add_action( 'wp_enqueue_scripts', 'divi__child_theme_enqueue_styles' );
 
function divi__child_theme_enqueue_scripts(){
	//Gsap
	wp_enqueue_script( 'child-gsap', 'https://cdnjs.cloudflare.com/ajax/libs/gsap/2.1.3/TweenMax.min.js', null, null, true );
	//Scroll magic
	wp_enqueue_script( 'child-scroll', '//cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.7/ScrollMagic.min.js', null, null, true );
	wp_enqueue_script( 'child-gsap-scroll', 'https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.7/plugins/animation.gsap.min.js', null, null, true );
	//Files
	wp_enqueue_script( 'child-scripts', get_stylesheet_directory_uri() . '/scripts.js', null, null, true );
	wp_enqueue_style( 'child-scripts-style', get_stylesheet_directory_uri() . '/scriptsStyles.css' );
}
add_action( 'wp_enqueue_scripts', 'divi__child_theme_enqueue_scripts' );