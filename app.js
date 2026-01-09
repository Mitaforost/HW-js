"use strict";

class Person {
  constructor(rase, name, language) {
    this.rase = rase;
    this.name = name;
    this.language = language;
  }

  getGreetings() {
    console.log(`Язык: ${this.language}, Имя: ${this.name}`);
  }
}

class Orc extends Person {
  constructor(rase, name, language, weapon) {
    super(rase, name, language);
    this.weapon = weapon;
  }
  getHits() {
    console.log(`Метод удара, оружие: ${this.weapon}`);
  }
}

class Elfi extends Person {
  constructor(rase, name, language, typeOfMagic) {
    super(rase, name, language);
    this.typeOfMagic = typeOfMagic;
  }
  getCreateMagic() {
    console.log(`Создать заклинание благодаря: ${this.typeOfMagic}`);
  }
}

const orc = new Orc("Чернокнижник", "Alan", "English", "Hammer");
orc.getGreetings();
orc.getHits();

const elf = new Elfi("God", "Alina", "Russian", "Repear");
elf.getGreetings();
elf.getCreateMagic();
