'use strict';

var testData = [{
	question: 'Вопрос №1',
	variants: ['Вариант ответа №1', 'Вариант ответа №2', 'Вариант ответа №3'],
	correct: 0
}, {
	question: 'Вопрос №2',
	variants: ['Вариант ответа №1', 'Вариант ответа №2', 'Вариант ответа №3'],
	correct: 1
}, {
	question: 'Вопрос №3',
	variants: ['Вариант ответа №1', 'Вариант ответа №2', 'Вариант ответа №3'],
	correct: 2
}];

var $modal = void 0;
var $overlay = void 0;

var test = {
	generateTest: function generateTest() {
		var questions = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];

		var html = $('#test').html();
		var content = tmpl(html, { data: questions });
		$('body').append(content);
	},

	checkUp: function checkUp() {
		var count = 0;
		for (var i in testData) {
			var $array = $('input[name=Q' + i + ']');
			var $checked = $('input[name=Q' + i + ']:checked');
			if ($array.index($checked) === testData[i].correct) {
				count++;
				$checked.parent().css("color", "green");
			} else {
				$checked.parent().css("color", "red");
			}
		}
		return count;
	},

	showResults: function showResults() {
		var correct = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];
		var questions = arguments.length <= 1 || arguments[1] === undefined ? testData : arguments[1];

		var htmlModal = $('#modal').html();
		var testResults = {
			questionsAmount: questions.length,
			correctAnswers: correct
		};
		$modal = tmpl(htmlModal, testResults);
		$overlay = $('<div class="test-overlay"></div>');
		$('body').append($overlay);
		$('body').append($modal);
	},

	testAgain: function testAgain() {
		$overlay.remove();
		$('.test-modal').remove();
		$('input:checked').parent().css("color", "black");
		$('input:radio').attr('checked', false);
	}

};

$(function () {
	test.generateTest(testData);
	$('#check').on('click', function () {
		event.preventDefault();
		var results = test.checkUp();
		test.showResults(results, testData);
		$('#again').on('click', test.testAgain);
	});
});
