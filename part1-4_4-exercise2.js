let calculator = {
  a : undefined,
  b : undefined,
  sum() {
    return this.a + this.b;
  }

  mul() {
    return this.a * this.b
  }
  read() {
    this.a = parseInt(prompt("a?",0));
    this.b = parseInt(prompt("b?",0));
  }
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );