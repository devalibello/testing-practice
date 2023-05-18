class Calculator {
  constructor() {
    this.solution = 0;
  }

    add = (number) => {
      this.solution += number;
      return this.solution;
    };

    subtract = (number) => {
      this.solution -= number;
      return this.solution;
    };

    multiply = (number) => {
      this.solution *= number;
      return this.solution;
    };

    divide = (number) => {
      this.solution /= number;
      return this.solution;
    };
}

module.exports = Calculator;