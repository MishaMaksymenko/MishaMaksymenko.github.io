var power = require('../js/dist/calcPower.js');

describe("pow", function() {
  it("power to 2 to 3 eq 8", function() {
  	// prepare

  	var result;

  	// act
  	var result = power(2,3);

  	// assert
  	expect(result).toBe(8);
  });

    it("power to 0 should return 1", function() {
  	// prepare

  	var result;

  	// act
  	var result = power(8,0);

  	// assert
  	expect(result).toBe(1);
  });

  it("power to negative 2 to -1 eq 0.5", function() {
  	// prepare

  	var result;

  	// act
  	var result = power(2,-1);

  	// assert
  	expect(result).toBe(0.5);
  });
  it("power 0 to any (ex.0) eq 0", function() {
  	// prepare

  	var result;

  	// act
  	var result = power(0,3);

  	// assert
  	expect(result).toBe(0);
  });
});