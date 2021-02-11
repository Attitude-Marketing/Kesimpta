<?php
function divi__child_theme_enqueue_styles() {
    wp_enqueue_style( 'parent-style', get_template_directory_uri() . '/style.css' );
}
add_action( 'wp_enqueue_scripts', 'divi__child_theme_enqueue_styles' );
 
function divi__child_theme_enqueue_scripts(){
	wp_enqueue_script( 'child-gsap', 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.6.0/gsap.min.js', null, null, true );
	wp_enqueue_script( 'child-gsap-scroll', 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.6.0/ScrollTrigger.min.js', null, null, true );
	wp_enqueue_script( 'child-scripts', get_stylesheet_directory_uri() . '/scripts.js', null, null, true );
	wp_enqueue_style( 'child-scripts-style', get_stylesheet_directory_uri() . '/scriptsStyles.css' );
}
add_action( 'wp_enqueue_scripts', 'divi__child_theme_enqueue_scripts' );