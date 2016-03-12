define(
	'model',
	['jquery'],
	function () {
		function Model(toDos) {
			var self = this;

			self.ToDos = toDos;

			self.addItem = function(item) {
				if (item.length === 0) {
					return
				};
				self.ToDos.splice(0, 0, item);
				return self.ToDos;
			};

			self.indexItem = function(item) {
				var index = self.ToDos.indexOf(item);
				if (index === -1) { 
					return
				} return index;
			};

			self.editItem = function(item, newValue) {
				var index = self.indexItem(item);
				self.ToDos[index] = newValue;
				return self.ToDos;
			};

			this.removeItem = function(item) {
				var index = self.indexItem(item);
				self.ToDos.splice(index, 1);
				return self.ToDos;
			};
		}

		return {
			init: Model,
		}
	}
);