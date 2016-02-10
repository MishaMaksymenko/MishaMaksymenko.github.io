$(function() {
	var html = $('#profile').html();
	var data = {
		name: 'Миша Максименко',
		img: 'img/fCB5oR5rVh4.jpg',
		university: 'НауКМА',
		reasons: [
			'Интересно как устроен процесс создания сайтов изнутри',
			'Это хорошая возможность расширить свои навыки',
			'Считаю IT перспективной сферой деятельности',
		],
		phone: '+380000000000',
		fb_link: 'https://www.facebook.com',
		feed: 'С легкостью сделаю кореляционно-регрессионный анализ',
	};

	var content = tmpl(html, data);

	$('body').append(content);
});