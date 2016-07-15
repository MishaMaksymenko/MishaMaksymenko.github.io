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
	
	function login (data) {
		var d = new Date().toISOString();
		console.trace(d, prefix, data);
		// console.log(d, prefix, data);
	}

	return login;

	// return console.log.bind(console, new Date().toISOString(), prefix)
}

var myLogger = createLogger('My Logger');
myLogger('some data');




