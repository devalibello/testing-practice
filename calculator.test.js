const Calculator = require('./calculator.js');

const solve = new Calculator();

describe('Test cases for Addition', () => {
  beforeEach(() => {
    solve.solution = 0;
  });
  test('Test addition of two numbers (7+3):', () => {
    solve.add(7);
    solve.add(3);
    expect(solve.solution).toBe(10);
  });
  test('Test addition of two numbers (3+15):', () => {
    solve.add(15);
    solve.add(5);
    expect(solve.solution).toBe(20);
  });
  test('Test addition of two numbers (0+0):', () => {
    solve.add(0);
    solve.add(0);
    expect(solve.solution).toBe(0);
  });
});

describe('Test cases for Subtraction', () => {
  beforeEach(() => {
    solve.solution = 0;
  });
  test('Test addition of two numbers (7-3):', () => {
    solve.add(7);
    solve.subtract(3);
    expect(solve.solution).toBe(4);
  });
  test('Test addition of two numbers (0+15):', () => {
    solve.add(0);
    solve.subtract(15);
    expect(solve.solution).toBe(-15);
  });
  test('Test addition of two numbers (0+0):', () => {
    solve.add(0);
    solve.subtract(0);
    expect(solve.solution).toBe(0);
  });
});

describe('Test cases for Multiplication', () => {
  beforeEach(() => {
    solve.solution = 0;
  });
  test('Test addition of two numbers (7x3):', () => {
    solve.add(7);
    solve.multiply(3);
    expect(solve.solution).toBe(21);
  });

  test('Test addition of two numbers (0x15):', () => {
    solve.add(0);
    solve.multiply(15);
    expect(solve.solution).toBe(0);
  });

  test('Test addition of two numbers (5x4):', () => {
    solve.add(5);
    solve.multiply(4);
    expect(solve.solution).toBe(20);
  });
});

describe('Test cases for Division', () => {
  beforeEach(() => {
    solve.solution = 0;
  });
  test('Test addition of two numbers (12/3):', () => {
    solve.add(12);
    solve.divide(3);
    expect(solve.solution).toBe(4);
  });

  test('Test addition of two numbers (15/0):', () => {
    solve.add(15);
    solve.divide(0);
    expect(solve.solution).toBe(Infinity);
  });

  test('Test addition of two numbers (20/5):', () => {
    solve.add(20);
    solve.divide(5);
    expect(solve.solution).toBe(4);
  });
});
