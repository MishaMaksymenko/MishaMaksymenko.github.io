function launchMasonry() {

	$('.grid').isotope({
		itemSelector: '.grid-item',
		percentPosition: true,
		columnWidth: '.grid-sizer'
	})
}

function getImages(request) {
	var XHR = (window.XDomainRequest) ? XDomainRequest : XMLHttpRequest;
	// var XHR = ("onload" in new XMLHttpRequest()) ? XMLHttpRequest : XDomainRequest;
	var xhr = new XHR();

	xhr.open('GET', 'http://api.pixplorer.co.uk/image?word='+request+'&amount=7&size=tb' + Math.random(), true);

	xhr.onload = function() {
		var html = $('#images').html();
		var result = xhr.responseText;
		result = JSON.parse(result);
		var images = result.images;
		var content = tmpl(html, {data:images});
		
		$('.grid').remove();
		$('.activities__field').append(content);
		launchMasonry();
	}

	xhr.send();
}

$(function() {
	$('.flexslider').flexslider({
		animation: "slide",
	});

	getImages();

	$('#activ-search').on('submit', function(e){
		if (e.preventDefault) {
			e.preventDefault();
		} else {
			e.returnValue = false;
		}
		var request = $( ".activ-search__in" ).val();
		getImages(request);
	});
});