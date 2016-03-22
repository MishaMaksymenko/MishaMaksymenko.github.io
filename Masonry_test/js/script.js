

function getImages(word) {
	var XHR = ("onload" in new XMLHttpRequest()) ? XMLHttpRequest : XDomainRequest;
	// var xhr = new XHR();

	// xhr.open('GET', 'http://api.pixplorer.co.uk/image?word='+word+'&amount=7&size=tb' + Math.random(), true);

	// xhr.onload = function() {
	// }
		var html = $('#images').html();
		var result = {"images":[{"imageurl":"http://t3.gstatic.com/images?q=tbn:ANd9GcSubRXqPAhohZlJW38Rl-1p0P_mRc3vnKZWDV6QXmhf2OZKEuEiOTaH3vk","word":"estate"},{"imageurl":"http://t2.gstatic.com/images?q=tbn:ANd9GcR5o2FzXJUbPdk9XEb5onPp7hsrv-yQi7gJjoAgxG7e0IqZZjOjv-L9I7Y","word":"estate"},{"imageurl":"http://t1.gstatic.com/images?q=tbn:ANd9GcTEA1qw5qPtrwcs8WkfJz6JhvUJcTyWkGM7d9aINb1SmrZU4rxDNLSJXto","word":"estate"},{"imageurl":"http://t1.gstatic.com/images?q=tbn:ANd9GcQqSvmgQASh4wnU9dWOMuR-bPgLS59nt7Tp1QuKOLjZU5YBx9VFCwp7pc2N","word":"estate"},{"imageurl":"http://t3.gstatic.com/images?q=tbn:ANd9GcTUHZWj_PXBfqbV-Lza_O92Nbd_di3CXrSNB33SDs-kkedMkiqeU4ytfyA","word":"estate"},{"imageurl":"http://t0.gstatic.com/images?q=tbn:ANd9GcRiT8eDWrG-tMCAuQelcgF0RGZWnjVMj85SaxIMnsm-XfsOI9D8M05M5V8","word":"estate"},{"imageurl":"http://t1.gstatic.com/images?q=tbn:ANd9GcQVubQevIE5_gz8jc5v0O4FQJT7R0lYYZPSCVYE153wtCcFRHXfe63VPGA","word":"estate"}],"status":"success","count":7};
		// var result = '' + this.responseText;
		// var images_data = JSON.parse(result);
		// console.log(result);
		// console.log(images_data);
		var images = result.images;
		// console.log(images);

		var content = tmpl(html, {data:images});
		
		$('.grid').remove();
		$('.activities__field').append(content);
		$('.grid').masonry({
			columnWidth: '.grid-sizer',
			itemSelector: '.grid-item',
			percentPosition: true,
		});


	// xhr.send();

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
		// var actitity = $('.activ-search__in').val();
		// getImages(actitity);
		// getImages();
	});
});