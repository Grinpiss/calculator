function Calculator() {
  this.read = function() {
    this.a = +prompt("Введите первое число:");
    this.b = +prompt("Введите второе число:");
  };

  this.sum = function() {
    return this.a + this.b;
  };

  this.sub = function() {
    return this.a - this.b;
  };

  this.mul = function() {
    return this.a * this.b;
  };

  this.div = function() {
    if (this.b !== 0) {
      return this.a / this.b;
    } else {
      return "Деление на ноль невозможно";
    }
  };
}

let calculator = new Calculator();
calculator.read();

alert("Сумма = " + calculator.sum());
alert("Разность = " + calculator.sub());
alert("Произведение = " + calculator.mul());
alert("Деление = " + calculator.div());