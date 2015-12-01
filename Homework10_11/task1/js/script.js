var baseVariable = prompt('Введите основание');

while (typeof(baseVariable) == 'object') {
	baseVariable = prompt('Введите корректное значение основания');
}

var powerIndexVariable = prompt('Введите показатель степени');

while (typeof(powerIndexVariable) == 'object') {
	powerIndexVariable = prompt('Введите корректное значение показателя степени');
}

console.log ( calcPower(baseVariable, powerIndexVariable) );


function calcPower(base, powerIndex) { //Возвращает base в степени powerIndex
	var result = 1;

	if (powerIndex == 0) return 1;

	for (var i = 0; i < Math.abs(powerIndex); i++) {
			result = result * base;
	}

	if (powerIndex >= 1) {
		return result;
	} else {
		return 1/result;
	}
}
