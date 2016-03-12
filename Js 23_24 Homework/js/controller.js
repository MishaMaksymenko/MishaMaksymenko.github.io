define(
	'controller',
	[],
	function() {
		function Controller(model, view) {

			var self = this;
			view.elements.addNew.on('submit', addNew);
			view.elements.toDos_list.on('click','.toDoList__edButton', launchEditor);
			view.elements.toDos_list.on('dblclick','.toDoList__main', launchEditor);
			view.elements.toDos_list.on('click', '.toDoList__rmButton', removeItem);
			view.elements.toDos_list.on( "submit", '#edItem', blurInput);
			view.elements.toDos_list.on( "blur", '.toDoList__edItem', edit);

			function addNew(e){
				e.preventDefault();
				var newItem = view.elements.input_new.val();
				if (newItem.length === 0) {
					return
				};
				model.addItem(newItem);
				view.ShowToDos(model.ToDos);
				view.elements.input_new.val('');
			};

			function removeItem() {
				var rmItem = $(this).attr('data-value');
				model.removeItem(rmItem);
				view.ShowToDos(model.ToDos);
			};

			function launchEditor() {		
				view.LaunchEditor($(this));	
			};

			function blurInput(e) {
				e.preventDefault();
				$(this).find('.toDoList__edItem').blur();
			};

			function edit() {
				var edItem = $(this).attr('data-value');
				newItem = $(this).val();
				model.editItem(edItem, newItem);
				view.edit($(this));
			};
		};


		return{
			init: Controller,
		}
	}
);