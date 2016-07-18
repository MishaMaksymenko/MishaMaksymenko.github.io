var hero;
var heroIndex = 1;

function getHero(index) {
	fetch('http://swapi.co/api/people/' + index + '/')
	.then(function(response) {
		return response.json();
	})
	.then(function(heroData) {
   		hero = heroData;
        return Promise.all( heroData.films.map(function(url) {return fetch(url)}) )
    })
    .then(function(responses) {
		return Promise.all(responses.map( function(response) {return response.json()}) )
    })
   	.then(function(episodes) {
   		hero.episodes = episodes.map(function(episode) {
   			return {"id":episode.episode_id, "title":episode.title};
   		})
   		hero.episodes.sort(episodesComp);
   		renderHeroData(hero);
   	})
}

function episodesComp(episode_1, episode_2) {
	return episode_1.id - episode_2.id;
}

function renderHeroData(heroData) {
	var heroTemplate = $("#hero-data").html();
	var heroContent = tmpl(heroTemplate, heroData);
	$('.hero--info, .hero--episodes').remove();
	$('body').append(heroContent);
}

function nextHero(event) {
	if ( heroIndex < 88 ) {
		heroIndex++;
		getHero(heroIndex);
	}
	if ( heroIndex === 88 ) { event.data.next.addClass("hero__btn--disabled"); }
	if ( heroIndex === 2 ) { event.data.prev.removeClass("hero__btn--disabled"); }
}

function prevHero(event) {
	if ( heroIndex > 1 ) {
		heroIndex--;
		getHero(heroIndex);
	}
	if ( heroIndex === 1 ) { event.data.prev.addClass("hero__btn--disabled"); }
	if ( heroIndex === 87 ) { event.data.next.removeClass("hero__btn--disabled"); }
}

$(function() {
	getHero(heroIndex);

  	var prevBtn = $('.hero__btn--prev');
	var nextBtn = $('.hero__btn--next');

	nextBtn.on("click", {next: nextBtn, prev: prevBtn}, nextHero);
	prevBtn.on("click", {next: nextBtn, prev: prevBtn}, prevHero);
});


// Draft

// function episodesFinder(url) {
// 	return fetch(url)
// 		.then(function(response) { 
// 			return response.json();
// 		})
// 		.then(function(episode) {
// 			return {"id":episode.episode_id, "title":episode.title}
// 		})
// }