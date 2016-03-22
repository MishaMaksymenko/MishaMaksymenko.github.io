

function getImages(word) {
	var XHR = ("onload" in new XMLHttpRequest()) ? XMLHttpRequest : XDomainRequest;
	var xhr = new XHR();

	xhr.open('GET', 'http://api.pixplorer.co.uk/image?word=estate&amount=7&size=tb', true);

	xhr.onload = function() {
		var html = $('#images').html();
		var result = xhr.responseText;
		var images_data = JSON.parse(result);
		var images = images_data.images;
		var content = tmpl(html, {data:images});
		
		$('.grid').remove();
		$('.activities__field').append(content);
		$('.grid').masonry({
			columnWidth: '.grid-sizer',
			itemSelector: '.grid-item',
			percentPosition: true,
		});
	}

	xhr.send();

	//  $.ajax({
	// 	url: 'http://api.pixplorer.co.uk/image?word='+word+'&amount=7&size=tb',
	// 	cache: false,
	// 	dataType : "json",
	// 	success: function (data) {
	// 		// console.log('data', data.images)
	// 		var html = $('#images').html();
	// 		var images = data.images;
	// 		var content = tmpl(html, {data:images});
			
	// 		$('.grid').remove();
	// 		$('.activities__field').append(content);
	// 		$('.grid').masonry({
	// 			columnWidth: '.grid-sizer',
	// 			itemSelector: '.grid-item',
	// 			percentPosition: true,
	// 		});
	// 	}
	// });
}

$(function() {

	// getImages();

	$('#activ-search').on('submit', function(e){
		if (e.preventDefault) {
			e.preventDefault();
		} else {
			e.returnValue = false;
		}
		var request = $('.activ-search__in').val();
		getImages(request);
	});
});