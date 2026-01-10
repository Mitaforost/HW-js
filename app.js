"use strict";

class Car {
  #brand;
  #model;
  #mileage;

  constructor(brand, model, mileage) {
    this.#brand = brand;
    this.#model = model;
    this.#mileage = mileage;
  }

  get mileage() {
    return this.#mileage;
  }

  set mileage(value) {
    this.#mileage = value;
  }

  info() {
    console.log(
      `Марка: ${this.#brand}, Модель: ${this.#model}, Пробег: ${this.#mileage}`
    );
  }
}

const car = new Car("Tesla", "X", 3210);

car.info();
car.mileage = 3300;
car.info();
