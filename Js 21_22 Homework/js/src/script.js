let testData = [
	{
		question: 'Вопрос №1',
		variants: [
			'Вариант ответа №1',
			'Вариант ответа №2',
			'Вариант ответа №3',
		],
		correct: 0,
	},
	{
		question: 'Вопрос №2',
		variants: [
			'Вариант ответа №1',
			'Вариант ответа №2',
			'Вариант ответа №3',
		],
		correct: 1,
	},
	{
		question: 'Вопрос №3',
		variants: [
			'Вариант ответа №1',
			'Вариант ответа №2',
			'Вариант ответа №3',
		],
		correct: 2,
	},
];

let $modal;
let $overlay;

let test = {
	generateTest: function (questions = 0) {
		let html = $('#test').html();
		let content = tmpl(html, {data:questions});
		$('body').append(content);
	},

	checkUp: function () {
		let count = 0;
		for ( let i in testData) {
			let $array = $(`input[name=Q${i}]`);
			let $checked = $(`input[name=Q${i}]:checked`);
			if ( $array.index($checked) === testData[i].correct ) {
				count++;
				$checked.parent().css( "color", "green" );
			} else {
				$checked.parent().css( "color", "red" );
			}
		}
		return count;
	},

	showResults: function (correct = 0, questions = testData) {
		let htmlModal = $('#modal').html();		
		let testResults = {
			questionsAmount: questions.length,
			correctAnswers: correct,
		};
		$modal = tmpl(htmlModal, testResults);
		$overlay = $('<div class="test-overlay"></div>');
		$('body').append($overlay);
		$('body').append($modal);
	},

	testAgain: function () {
		$overlay.remove();
		$('.test-modal').remove();
		$( 'input:checked' ).parent().css( "color", "black" );
		$('input:radio').attr('checked', false);
	},

};

$(function() {
	test.generateTest(testData);
	$('#check').on('click', function() {
		event.preventDefault();
		let results = test.checkUp();
		test.showResults(results, testData);
		$('#again').on('click', test.testAgain);
	});
});