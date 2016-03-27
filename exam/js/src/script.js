function launchMasonry() {

	$('.grid').masonry({
		columnWidth: '.grid-sizer',
		itemSelector: '.grid-item',
		percentPosition: true,
	})
}

function popUp() {
	var $body = $('body');
	var imgUrl = $(this).find('img').attr('src');
	var $popUp = $('<div class="overlay"><div class="pop-up"><span class="helper"></span><img src="' +  imgUrl +'" alt=""></div></div>');
	$body.append($popUp);
	$popUp.one('click', function() {
		$popUp.remove();
	})
}

function getImages(request) {
	var XHR = (window.XDomainRequest) ? XDomainRequest : XMLHttpRequest;
	// var XHR = ("onload" in new XMLHttpRequest()) ? XMLHttpRequest : XDomainRequest;
	var xhr = new XHR();

	xhr.open('GET', 'http://api.pixplorer.co.uk/image?word='+request+'&amount=7&size=s', true);

	xhr.onload = function() {
		var html = $('#images').html();
		var result = xhr.responseText;
		result = JSON.parse(result);
		var images = result.images;
		var content = tmpl(html, {data:images});
		
		$('.grid').remove();
		$('.activities__field').append(content);
		launchMasonry();
		$('.grid-wrapper').on('click', popUp);
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
		var request = $( ".activ-search__in" ).val();
		getImages(request);
	});

	$('.test').on('click', function(e){
		e.preventDefault();
		popUp();
	});


});