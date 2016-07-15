// function episodesFinder(url) {
// 	return fetch(url)
// 		.then(function(response) { 
// 			return response.json();
// 		})
// 		.then(function(episode) {
// 			return {"id":episode.episode_id, "title":episode.title}
// 		})
// }


var hero;
var heroIndex = 1;

function episodesComp(episode_1, episode_2) {
	return episode_1.id - episode_2.id;
}

function renderHeroData(heroData) {
	var heroTemplate = $("#hero-data").html();
	var heroContent = tmpl(heroTemplate, heroData);
	$('.hero--info, .hero--episodes').remove();
	$('body').append(heroContent);
}

function getHero(index) {
	fetch('http://swapi.co/api/people/' + index + '/')
	.then(function(response) {
		return response.json();
	})
	.then(function(heroData) {
   		hero = heroData;
   		return Promise.all( heroData.films.map($.ajax) );
   	})
   	.then(function(episodes) {
   		hero.episodes = episodes.map(function(episode) {
   			return {"id":episode.episode_id, "title":episode.title};
   		})
   		hero.episodes.sort(episodesComp);
   		renderHeroData(hero);
   	})
}

$(function() {
	getHero(heroIndex);

  	var heroPrev = $('.hero__btn--prev');
	var heroNext = $('.hero__btn--next');

	heroNext.on("click", nextHero);
	heroPrev.on("click", prevHero);

	function nextHero() {
		if (heroIndex < 88) {
			heroIndex++;
			getHero(heroIndex);
		}
		if ( heroIndex === 88 ) {
			heroNext.addClass("hero__btn--disabled");
		}
		if ( heroIndex === 2 ) {
			heroPrev.removeClass("hero__btn--disabled");
		}
	}

	function prevHero() {
		if ( heroIndex > 1 ) {
			heroIndex--;
			getHero(heroIndex);
		}
		if ( heroIndex === 87 ) {
			heroNext.removeClass("hero__btn--disabled");
		}
		if ( heroIndex === 1 ) {
			heroPrev.addClass("hero__btn--disabled");
		}
	}
});