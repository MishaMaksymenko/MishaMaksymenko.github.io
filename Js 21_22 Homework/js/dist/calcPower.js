var calcPower = function (base, powerIndex) { //Возвращает base в степени powerIndex
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
};

try {
	module.exports = calcPower;
} catch (e) {};

