$(function () {
	var mixer = mixitup('.portfolio__content', {
		animation: {
			// duration: 2000
	}
	});

	$('.slider-blog__inner').slick({
		dots: true,
		prevArrow: `<button type="button" class="slick-prev">
			<img src="images/arrow-left.svg" alt="">
		</button>`,
		nextArrow: `<button type="button" class="slick-next">
			<img src="images/arrow-right.svg" alt="">
		</button>`
	});
});