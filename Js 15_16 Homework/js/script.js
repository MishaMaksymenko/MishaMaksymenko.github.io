'use strict'

function GoogleCallback(jqueryObj, data) {
    window[jqueryObj](data);
}

var query

function statrSearch(query, start) {
	$.ajax({
			url: 'http://ajax.googleapis.com/ajax/services/search/web?v=1.0&key=ABQIAAAACKQaiZJrS0bhr9YARgDqUxQBCBLUIYB7IF2WaNrkYqF0tBovNBQFDtM_KNtb3xQxWff2mI5hipc3lg&rsz=large&start='+start+'&q='+query+'&callback=GoogleCallback&context=?',
			dataType : "jsonp",
			success: function(data) {
				var html = $('#searchResults').html();
				var content = tmpl(html, {results:data.results});
				$('ul').remove();
				$('body').append(content);
				pagination();
			}
	});
}

function pagination() {
	$('.pagination__number').on('click', function(e){
		e.preventDefault();
		var index = (this.text - 1)*8;
		statrSearch(query, index);
	})
}

function VirtuaCharacters() {
	var Human = {
		name: 'Anton',
		age: 20,
		gender: 'male',
		height: 180,
		weight: 75,
	}

	function Worker(company, wage) {
		this.workPlace = company;
		this.wage = wage;
		this.work = function() {
			alert(this.name + ' work at the ' + this.workPlace)
		};
		this.__proto__ = Human;
	}

	function Student(university, scholarship) {
		this.studyPlace = university;
		this.scholarship = scholarship;
		this.watchTvSeries = function() {
			alert(this.name + ' watches TV Series ')
		};
		this.__proto__ = Human;
	}

	this.create = function() {
		var newWorker1 = new Worker('Google', 500);
		var newStudent1 = new Student('MIT', 200);
		var newStudent2 = new Student('Harvard', 230);
		console.log('newWorker1', newWorker1);
		console.log('newStudent1', newStudent1);
		console.log('newStudent2', newStudent2);			
	}	
};


$(function() {
	$('#search').on('submit', function(e){
		e.preventDefault();
		query = $( "input" ).val();
		if (query != '') statrSearch(query, 0);		
	});

	var virtualCharacters= new VirtuaCharacters();
	virtualCharacters.create();
});