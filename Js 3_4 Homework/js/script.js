var test = {
	createElement: function(params) {
		var element = document.createElement(params.tagName);

		if (params.inputType){
		  element.setAttribute('type', params.inputType);
		}

		if (params.className){
		  element.className = params.className;
		}

		if (params.content){
		  element.innerHTML = params.content;
		}

		if (params.parentElement){
		  params.parentElement.appendChild(element);
		}

		return element;
	},
	
	generateTest: function() {
		label.insertBefore(variant, label.firstChild);

		for (var i = 0; i < 3; i++) {

			question = question.cloneNode(true);
			question.innerHTML = (i + 1) + '. Вопрос №' + (i + 1);
			form.appendChild(question);

			for (var j = 0; j < 3; j++) {

				checkbox = checkbox.cloneNode(true);
				checkbox.firstChild.childNodes[1].data = 'Вариант ответа №' + (j + 1);
				form.appendChild(checkbox);	
			}
		};
	}
}

var body = document.body;

var wrapper = test.createElement({
	tagName: 'div',
	className: 'wrapper',
	parentElement: body
});

var title = test.createElement({
	tagName: 'h1',
	content: 'Тест по программированию',
	parentElement: wrapper
});

var form = test.createElement({
	tagName: 'form',
	parentElement: wrapper
});

var question = test.createElement({
	tagName: 'h2',
});

var checkbox = test.createElement({
	tagName: 'div',
	className: 'checkbox'
});

var label = test.createElement({
	tagName: 'label',
	content: 'Вариант ответа №',
	parentElement: checkbox
});

var variant = test.createElement({
	tagName: 'input',
	inputType: 'checkbox',
});

test.generateTest();

var sendResults = test.createElement({
	tagName: 'button',
	inputType: 'submit',
	className: 'btn btn-default',
 	content: 'Проверить мои результаты',
	parentElement: form
});