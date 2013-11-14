$(document).ready(function() {
	var windowHeight = $(window).height();
	setGallerySize(windowHeight);
	resizeImages();

	$(window).resize(function() {
		windowHeight = $(window).height();
		setGallerySize(windowHeight);
		resizeImages();
	});
});

function setGallerySize(height) {
	$(".gallery").css("height", (height - 50) + "px");
	$(".gallery-holder").css("width", getGalleryWidth() + "px");
}

function getGalleryWidth() {
	var width = 0;
	$(".gallery-holder img").each(function() {
		width += $(this).width();
	});
	return width + 1;
}

function resizeImages() {
	$(".gallery img").each(function() {
		$(this).css("max-height", $(".gallery").height());
	});
}