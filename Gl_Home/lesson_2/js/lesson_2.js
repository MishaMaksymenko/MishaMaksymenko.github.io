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

var myLogger = createLogger('My Logger');
myLogger('some data');