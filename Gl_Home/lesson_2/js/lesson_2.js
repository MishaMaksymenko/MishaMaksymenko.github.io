function extractCharacters(str) {
	var myArr = [];
	str = str.toLowerCase().split('');

	str.forEach(function(item, i, arr) {

		if (str.indexOf(item) === i) {
			myArr.push(item);
		}

	});

	return myArr;
}

function createLogger(prefix) {
	this.pref = prefix;

	// return function (data) {
	// 	var d = new Date().toISOString();
	// 	console.log(d + " " + pref  + ": " + data);
	// }

	return new Function('data','console.log(new Date().toISOString() + " " + pref  + ": " + data)');
}



// tests

var myLogger = createLogger('My Logger');
myLogger('some data');

function test(a) {
	this.bbb = function inner(b) {
		console.log(a + b);
	}

	return function() {this.bbb()}
}

// var res = test(5);
// res(7);


var calculator1 = {
    value: 'I am calculator 1',
    add: function () {
	return this.value;
    },
};

var calculator2 = {
    value: 'I am calculator 2'
};

calculator2.add = calculator1.add;
calculator1.add();