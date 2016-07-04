function dayTime(hour) {
	if (typeof hour == "number" && hour ===  hour) {
		console.log(typeof hour)
		if (0 <= hour && hour <= 24) {
			if (8 <= hour && hour <= 21) {
				console.log("Hello")
			} else {console.log("It is not good time for that")}
		} else {console.log("incorrect value")}
	} else {console.log("It is not a number")}
}


function array(array, logicArg) {
	var result;

	if (logicArg === true) {
		result = Math.max.apply(null, array);
	} 

	if (logicArg === false) {
		result = Math.min.apply(null, array);
	}
	console.log(result);
}


function power(number) {
	if (typeof number == "number" && number ===  number) {
		var rest = number % 2;
		if (rest === 0) {
			var result = Math.pow(number, 2);
			console.log(result);
		}
	}
}

function difference(a, b) {
	var result;
	if (a >= b) {
		result = a-b;
		console.log(result);
	} else {
		result = a+b;
		console.log(result);
	}
}

function range(a, b) {
	var sum = a + b;
	if (sum >= 11 && sum <=19) {
		console.log(sum)
	} else {
		console.log("Result is not in range between 11 and 19");
	}
}

function division(a, b) {
	var result1 = a % b;
	var result2 = b % a;
	if (result1 === 0 || result2 === 0) {
		console.log("true");
	} else {console.log("false")}
}

function lastDigits(a, b) {
	function floats(a) {
		var arr = String(a).split('.');
		if (arr[1]) {
			return a * Math.pow(10, arr[1].length);
		}
		return a
	}

	var result1 = floats(a) % 10;
	var result2 = floats(b) % 10;

	if (result1 === result2) {
		console.log("Last digits are equal")
	} else {console.log("Last digits aren't equal")}
}

function cycle(arr) {
	var length = arr.length;
	var i = 0;

	while (i < length) {
		console.log(arr[i]);
		i++;
	}

	i = 0;

	do {
		console.log(arr[i]);
		i++;
	} while (i < length);

	for (i = 0; i < length; i++) {
		console.log(arr[i]);
	}

	arr.forEach(function(item, i, arr) {
		console.log(item);
	})
}

function palindrome(str) {
		var strRev = str.split('').reverse().join('');
		if (str === strRev) {
			console.log("This string is palindrome")
		} else {console.log("This string isn't palindrome")}
}

function fizzBuzz() {
	for (var i = 1; i <= 100; i++) {
		var div3 = i % 3;
		var div5 = i % 5;

		if (div3 === 0 && div5 === 0) {
			console.log("FizzBuzz")
		} else {
			if (div3 === 0) {
				console.log("Fizz")
			} else {
				if (div5 === 0) {
					console.log("Buzz")
				} else {console.log(i)}
			}
		}
	}
}


// vampire function works (optimisation required)

function vampire(number) {
	var fang1;
	var fang2;

	var arr = String(number).split('');
	var len = arr.length;
	var lenRest = len % 2;

	function compareNumbers(a, b) {
		return a - b;
	}

	if (lenRest === 0) {
		var composition = 0;
		var index = len/2;
		// var startNumber = Math.pow(10, (index-1));
		var startNumber = Math.sqrt(number);
		startNumber = Math.floor(startNumber);
		var finishNumber = Math.pow(10, (index-1));
		// console.log(startNumber);
		
		for (var i = startNumber; i > finishNumber; i--) {
			// composition = 0;
			// for (var j = i; composition < number; j++) {
			startNumber++;
			for (var j = startNumber; j >= 0 ; j++) {
				composition = i * j;
				console.log(composition);
				if (composition > number) {break}
				if (composition === number) {
					fang1 = String(i).split('');
					fang2 = String(j).split('');

					var newArr = fang1.concat(fang2);
					// console.log(fang1,fang2);
					// console.log(newArr);
					var arrSort = arr.sort(compareNumbers).join(',');
					var newArrSort = newArr.sort(compareNumbers).join(',');
					// console.log(a);
					// console.log(b);
					if (arrSort == newArrSort) {
						if (fang1 % 10 == 0 && fang2 % 10 == 0) {
							console.log("not proper fangs");
						} else {
							console.log('This number is vampire');
							console.log('fangs: ' + i + ' and ' + j);
							return;
						}
					}
				}
			}
		}
	}	
	console.log("This number is not vampire");
}



// vampire function, when fangs are known

function fangs(a, b) {
	var composition = a * b;

	fang1 = String(a).split('');
	fang2 = String(b).split('');
	var fangArr = fang1.concat(fang2);
	var compArr = String(composition).split('');

	var fangArrSort = fangArr.sort().join(',');
	var compArrSort = compArr.sort().join(',');

	if (fangArrSort == compArrSort) {
		if (fang1 % 10 == 0 && fang2 % 10 == 0) {
			console.log("not proper fangs");
		} else {
			console.log(composition + ' this is vampire number');
		}
	}
}

