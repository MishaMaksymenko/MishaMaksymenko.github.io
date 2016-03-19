function masonry() {
	$('.grid').masonry({
		itemSelector: '.grid-item',
		columnWidth: '.grid-sizer',
		percentPosition: true
	});
}

function getImages(request) {
	$.ajax({
		url: 'http://api.pixplorer.co.uk/image?word='+request+'&amount=7&size=m',
		dataType : "json",
		success: function (data) {
			// console.log('data', data.images)
			var html = $('#images').html();
			var images = data.images;
			var content = tmpl(html, {data:images});
			
			$('.grid').remove();
			$('.activities__field').append(content);
			masonry();
		}
	});
}

$(function() {
	$('.flexslider').flexslider({
		animation: "slide",
		// controlsContainer: $(".custom-controls-container"),
  //   	customDirectionNav: $(".custom-navigation a")
	});

	getImages();
	masonry();

	try {

		$('#activ-search').on('submit', starter)

	// код ...

	} catch (err) {

		element.attachEvent("onsubmit", starter);
	// обработка ошибки

	}

	// $('#activ-search').on('submit', function(e){
		// e.preventDefault();
		
	function starter(e) {
		// console.log('e=',e);

		if (e.preventDefault) {
			e.preventDefault();
		} else {
			e.returnValue = false;
		}
		request = $( "input" ).val();
		getImages(request);
	}
	// });
});