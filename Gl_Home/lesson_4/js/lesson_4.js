function Shape(type) {
	this.type = type;
	this.getType = function() {return this.type};
}

function Triangle(a,b,c) {
	this.a = a;
	this.b = b;
	this.c = c;
}	

Triangle.prototype = new Shape;
Triangle.prototype.constructor = Triangle;

Triangle.prototype.getPerimeter = function() {
	return this.a + this.b + this.c
}


// function add(a) {
// 	return function(b) { return a + b; };
// }

function add(a) {
	var sum = a;
	function adder(b) {
		sum += b;
		return adder;
	};

	adder.valueOf = function() {
	    return sum;
	};

	return adder;
};