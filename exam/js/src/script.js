function masonry() {
	$('.grid').masonry({
		itemSelector: '.grid-item',
		columnWidth: '.grid-sizer',
		percentPosition: true
	});
}

function getImages(request) {
	var XHR = ("onload" in new XMLHttpRequest()) ? XMLHttpRequest : XDomainRequest;
	var xhr = new XHR();

	xhr.open('GET', 'http://api.pixplorer.co.uk/image?word='+request+'&amount=7&size=m', true);

	xhr.onload = function() {
		var html = $('#images').html();
		var result = xhr.responseText;
		result = JSON.parse(result)
		var images = result.images;
		var content = tmpl(html, {data:images});
		
		$('.grid').remove();
		$('.activities__field').append(content);
		masonry();
	}

	xhr.send();
}

$(function() {
	$('.flexslider').flexslider({
		animation: "slide",
	});
	getImages();

	$('#activ-search').on('submit', function(e){
		e.preventDefault();
		request = $( "input" ).val();
		getImages(request);
	});
});