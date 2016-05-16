function calculator() {
	var prices = [[8, 10, 12, 14, 16, 18, 20, 23], [10, 12, 14, 16, 18, 20, 23, 29], [11, 13, 15, 18, 21, 23, 25, 31], [13, 15, 17, 19, 22, 25, 28, 35], [15, 17, 20, 23, 26, 29, 33, 40]];

	// console.log( prices[3][7] );
	var calc = document.getElementById ('calculator');
	// console.log( document.getElementById ('calculator') );
	var toatlAmount = document.getElementById ('total-amount');
	var words = document.getElementById ('words-amount');

	calc.elements.level.value = 0;
	calc.elements.term.value = 0;
	calc.elements.page.value = 1;

	calc.oninput = function() {
	    // document.getElementById('result').innerHTML = input.value;
		var level = this.elements.level.value;
		var term = this.elements.term.value;
		var pagesAmount = this.elements.page.value;

		var basicPrice = prices[level][term];
		var price = basicPrice * pagesAmount;
		var wordsAmount = pagesAmount * 275;

		console.log (level);
		console.log (term);
		console.log (basicPrice);
		console.log (pagesAmount);
		console.log (price);

		toatlAmount.innerText = price;
		words.innerText = wordsAmount;
};

}

function slider() {
	$('.flexslider').flexslider({
    animation: "slide",
    controlsContainer: $(".custom-controls-container"),
    customDirectionNav: $(".custom-navigation a")
	});
}

function progressBar() {
	var el = $('.circle'),
	inited = false;

	el.appear({ force_process: true });

	el.on('appear', function() {
		if (!inited) {

			$('#circle_1').circleProgress({
				value: 0.99,
				size: 140,
				startAngle: -Math.PI/2,
				reverse: true,
				thickness: 3,
				animation: { duration: 2400},
					fill: {
					color: "#00aced",
				}
			}).on('circle-animation-progress', function(event, progress) {
				$(this).find('strong').html(parseInt(99 * progress) + '<i>%</i>');
			});

			$('#circle_2').circleProgress({
				value: 0.97,
				size: 140,
				startAngle: -Math.PI/2,
				reverse: true,
				thickness: 3,
				animation: { duration: 2400},
					fill: {
					color: "#00aced",
				}
			}).on('circle-animation-progress', function(event, progress) {
				$(this).find('strong').html(parseInt(97 * progress) + '<i>%</i>');
			});

			$('#circle_3').circleProgress({
				value: 0.99,
				size: 140,
				startAngle: -Math.PI/2,
				reverse: true,
				thickness: 3,
				animation: { duration: 2400},
					fill: {
					color: "#00aced",
				}
			}).on('circle-animation-progress', function(event, progress) {
				$(this).find('strong').html(parseInt(99 * progress) + '<i>%</i>');
			});

			inited = true;
		}
	});
}


// Can also be used with $(document).ready()
$(window).load(function() {
	calculator();
	slider();
	progressBar();
});
