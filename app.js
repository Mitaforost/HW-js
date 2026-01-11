"use strict";

class Billing {
  #amount;

  constructor(amount) {
    this.#amount = amount;
  }

  get amount() {
    return this.#amount;
  }

  calculateTotal() {
    return this.#amount;
  }
}

class FixBilling extends Billing {}

class HourBilling extends Billing {
  constructor(amount, hours) {
    super(amount);
    this.hours = hours;
  }

  calculateTotal() {
    return this.amount * this.hours;
  }
}

class ItemBilling extends Billing {
  constructor(amount, itemCount) {
    super(amount);
    this.itemCount = itemCount;
  }
  calculateTotal() {
    return this.amount * this.itemCount;
  }
}

const fix = new FixBilling(100);
console.log(fix.calculateTotal());

const hour = new HourBilling(10, 8);
console.log(hour.calculateTotal());

const item = new ItemBilling(5, 20);
console.log(item.calculateTotal());
