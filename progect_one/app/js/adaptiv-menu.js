
$(document).ready(function(){
	$('#burger').click(function() {
		$('.menu-phone').toggleClass("menu-phone_active");
	});
	// наведение на элемент
	$('.h_1').on('mouseover', function() {
		$('.c1').addClass("circle_active");
		$('.h_1').addClass("h3_active");
	});
	$('.h_1').on('mouseout', function() {
		$('.c1').removeClass("circle_active");
		$('.h_1').removeClass("h3_active");
	});
//...............................................
	$('.h_2').on('mouseover', function() {
		$('.c2').addClass("circle_active");
		$('.h_2').addClass("h3_active");
	});
	$('.h_2').on('mouseout', function() {
		$('.c2').removeClass("circle_active");
		$('.h_2').removeClass("h3_active");
	});
//...............................................
	$('.h_3').on('mouseover', function() {
		$('.c3').addClass("circle_active");
		$('.h_3').addClass("h3_active");
	});
	$('.h_3').on('mouseout', function() {
		$('.c3').removeClass("circle_active");
		$('.h_3').removeClass("h3_active");
	});
//...............................................
	$('.h_4').on('mouseover', function() {
		$('.c4').addClass("circle_active");
		$('.h_4').addClass("h3_active");
	});
	$('.h_4').on('mouseout', function() {
		$('.c4').removeClass("circle_active");
		$('.h_4').removeClass("h3_active");
	});
//...............................................
	$('.h_5').on('mouseover', function() {
		$('.c5').addClass("circle_active");
		$('.h_5').addClass("h3_active");
	});
	$('.h_5').on('mouseout', function() {
		$('.c5').removeClass("circle_active");
		$('.h_5').removeClass("h3_active");
	});
//...............................................
	$('.h_6').on('mouseover', function() {
		$('.c6').addClass("circle_active");
		$('.h_6').addClass("h3_active");
	});
	$('.h_6').on('mouseout', function() {
		$('.c6').removeClass("circle_active");
		$('.h_6').removeClass("h3_active");
	});
//...............................................
	$('.h_7').on('mouseover', function() {
		$('.c7').addClass("circle_active");
		$('.h_7').addClass("h3_active");
	});
	$('.h_7').on('mouseout', function() {
		$('.c7').removeClass("circle_active");
		$('.h_7').removeClass("h3_active");
	});
//...............................................
	$('.h_8').on('mouseover', function() {
		$('.c8').addClass("circle_active");
		$('.h_8').addClass("h3_active");
	});
	$('.h_8').on('mouseout', function() {
		$('.c8').removeClass("circle_active");
		$('.h_8').removeClass("h3_active");
	});
});

$(document).ready(function(){
	$('.h_1').click(function() {
		$('.ul_1').toggleClass("ul_active")
	});
	$('.h_2').click(function() {
		$('.ul_2').toggleClass("ul_active")
	});
	$('.h_3').click(function() {
		$('.ul_3').toggleClass("ul_active")
	});
	$('.h_4').click(function() {
		$('.ul_4').toggleClass("ul_active")
	});
	$('.h_5').click(function() {
		$('.ul_5').toggleClass("ul_active")
	});
	$('.h_6').click(function() {
		$('.ul_6').toggleClass("ul_active")
	});
	$('.h_7').click(function() {
		$('.ul_7').toggleClass("ul_active")
	});
	$('.h_8').click(function() {
		$('.ul_8').toggleClass("ul_active")
	});
});	
$(document).ready(function() {
	$('.menu_a').click(function() {
		$('.menu-phone').removeClass("menu-phone_active");
	});
	$('.callBack_btn').click(function() {
		$('.hade-phone').toggleClass("hade-phone_active");
	});
});
// jQuery(document).ready(function() {
// 	jQuery('.cont_of_coment').addClass("hidden").viewportChecker({
// 		classToAdd: 'visible animated fadeInLeft',
// 		offset: 100
// 	});
// });
$(document).ready(function() {
	$('.btn_header').click(function() {
		$('.cont_of_map_h').addClass("cont_of_map_h-active");
	});
	$('#layers').click(function() {
		$('.cont_of_map_h').addClass("cont_of_map_h-active");
	});
	$('.btn_header').click(function() {
		$('.cont_of_map_h').addClass("cont_of_map_h-active");
	});
	$('#close').click(function() {
		$('.cont_of_map_h').removeClass("cont_of_map_h-active");
	});
});