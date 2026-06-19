const { add, subtract, multiply } = require('../utils/math');

describe('Math Utility Unit Tests', () => {

  // Test Case 1: Testing addition
  test('should correctly add two numbers', () => {
    const result = add(2, 3);
    expect(result).toBe(5);
  });

  // Test Case 2: Testing subtraction
  test('should correctly subtract two numbers', () => {
    const result = subtract(5, 2);
    expect(result).toBe(3);
  });

  // Test Case 3: Testing multiplication
  test('should correctly multiply two numbers hoooo wanot', () => {
    const result = multiply(4, 3);
    expect(result).toBe(12);
  });

});
