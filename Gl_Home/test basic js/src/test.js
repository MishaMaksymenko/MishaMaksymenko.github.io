/*
	Напишите функцию, которая принимает 1 аргумент и возварщает его тип
*/
function getDataType (variable) {
	return typeof variable;
}


/*
	Напишите функцию, которая принимает 2 аргумента,
	и возврвщает 1 если их значения и их типы равны,
	0 если равны только значения
	и -1 в другом случае
*/
function compareByType (a, b) {
	if (a === b) {
		return 1
	} else {
		if (a == b) {
			return 0
		} else { return -1 }
	}
}


/*
	Напишите функцию, которая принимает 1 аргумент,
	и в случае если аргумент имеет числовой тип увеличивает его на 1
	и возврвщвет результат,
	в любом другом случае возврвщвет -1
*/
function increase (value) {
	if (typeof value == "number" && value ===  value) {
		value++;
		return value
	} else { return -1 }
}

/*
	Напишите функцию, которая принимает 2 аргумента,
	массив в разделитель[опционально],
	и возвращает строку ввиде элементов массива c разделителями если разделитель задан
	или строку разделенную "-" если не задан
*/
function join (array, separator) {
	if (separator == undefined || separator == ""){
		separator = "-";
	}
	var str = array.join(separator);
	return str;
}


/*
	Напишите функцию, которая принимает 2 массива,
	и возвращает один состоящий из элементов перового и второго (последовательно сначала первый потом второй)
*/
function glue (arrA, arrB) {
	var newArr = arrA.concat(arrB);
	return newArr;
}


/*
	Напишите функцию, которая принимает 1 массив,
	и возвращает другой массив отсортированный от большего к меньшему
*/
function order (arr) {
	var newArr = arr.slice().sort().reverse();
	return newArr;
}


/*
	Напишите функцию, которая принимает 1 массив,
	и возвращает другой без чисел которые меньше 0
*/
function removeNegative (arr) {
	var newArr = arr.filter(function(number) {
		return number > 0;
	});
	return newArr;
}


/*
	Напишите функцию, которая принимает 1 аргумент (строку),
	и возвращает массив из елементов строки разделенных по пробелу ' '
*/
function stringToArray (str) {
	var newArr = str.split(' ');
	return newArr;
}


/*
	Напишите функцию, которая принимает 1 аргумент (строку),
	и возвращает часть этой строки до первой запятой
*/
function getStringPart(str) {
	var i = str.indexOf(",");
	var newStr = str.substring(0, i);
	return newStr;
}

