'use strict';

$(function() {
	var html = $('#test').html();
	var htmlModal = $('#modal').html();

	var test = [
		{
			question: 'Вопрос №1',
			variants: [
				'Вариант ответа №1',
				'Вариант ответа №2',
				'Вариант ответа №3',
			],
			correct: 'Вариант ответа №1',
		},
		{
			question: 'Вопрос №2',
			variants: [
				'Вариант ответа №1',
				'Вариант ответа №2',
				'Вариант ответа №3',
			],
			correct: 'Вариант ответа №2',
		},
		{
			question: 'Вопрос №3',
			variants: [
				'Вариант ответа №1',
				'Вариант ответа №2',
				'Вариант ответа №3',
			],
			correct: 'Вариант ответа №3',
		},
	];

	var $modal;
	var $overlay;
	var str;

	localStorage.setItem('testData', JSON.stringify(test));
	var questons = localStorage.getItem('testData');
	questons = JSON.parse(questons);

	var content = tmpl(html, {data:questons});
	$('body').append(content);

	$('#check').on('click', function() {
		event.preventDefault();

		var count = 0;
		str = $( "input:checked" ).parent();
		try {
			for (var i = 0; i < questons.length; i++) {
				if (questons[i].correct === str[i].innerText) {
					count++;
					$(str[i]).css( "color", "green" );
				} else {
					$(str[i]).css( "color", "red" );
				};
			};
		} catch (err) {
  			// alert('введите ответы на все вопросы')
		}

		var testResults = {
			questionsAmount: questons.length,
			correctAnswers: count
		}
		
		var modal = tmpl(htmlModal, testResults);
		// $modal = $('<div class="test-modal modal-content">'+'Результаты теста '+ count +'</div>');
		$overlay = $('<div class="test-overlay"></div>');
		$('body').append($overlay);
		// $('body').append($modal);
		$('body').append(modal);

		$('#again').one('click', function() {
			$overlay.remove();
			$('.test-modal').remove();
			$('input:radio').attr('checked', false);
			str.css( "color", "black" );
		});
	});
});