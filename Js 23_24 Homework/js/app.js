requirejs.config({
	paths: {  
        'jquery': 'https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min'
    }
});

require(
	[
		'model',
		'view',
		'controller',
	],

	function(model, view, controller) {
		$(function(){
			var model_1 = new model.init(['make Homework', 'buy Chocolate', 'watch StarWars']);
			var view_1 = new view.init(model_1);
			var controller_1 = new controller.init(model_1, view_1);
		});
	}
);