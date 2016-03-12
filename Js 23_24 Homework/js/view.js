define(
	'view',
	['tmpl'],
	function() {
		function View(model) {
			var self = this;

			function showList() {
				$('body').append($('#toDoList-wrapper').html());

				self.elements = {
					addNew: $('#toDoList__addItem'),
					input_new: $('.toDoList__addNew'),
					button_new: $('.toDoList__addNew-button'),
					toDos_list: $('.toDoList__todos'),
				}

				self.ShowToDos(model.ToDos);
				self.elements.input_new.focus();
			};

			self.ShowToDos = function(ToDos) {
				var ToDos_list = tmpl($('#toDos').html(), {data:ToDos});
				self.elements.toDos_list.html(ToDos_list);
			};

			showList();


			self.LaunchEditor = function(element) {
				var visible_block = element.parent();
				var input = visible_block.parent().find('.toDoList__edItem');
				var edItem = input.attr('data-value');

				visible_block.css('display','none');
				visible_block.parent().find('#edItem').css('display','block');
				input.val(edItem).focus();
			};

			self.edit = function(element){
				var form = element.parent();
				var list_item = element.closest('.toDoList__item');
				
				var index = $('.toDoList__item').index(list_item);
				var value = model.ToDos[index];
				element.attr('data-value', value);
				list_item.find('.toDoList__main').text(value);

				form.css('display','none');
				list_item.find('.toDoList__visible').css('display','block');
			};
		}

		return{
			init: View,
		}
	}
);