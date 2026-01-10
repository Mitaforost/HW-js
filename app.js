"use strict";

class Person {
  constructor(race, name, lang) {
    this.race = race;
    this.name = name;
    this.lang = lang;
  }

  speak() {
    console.log(`Раса: ${this.race}, Имя: ${this.name}, Язык: ${this.lang}`);
  }
}

class Orc extends Person {
  constructor(race, name, lang, weapon) {
    super(race, name, lang);
    this.weapon = weapon;
  }

  hit() {
    console.log(`Орк наносит удар оружием: ${this.weapon}`);
  }

  speak() {
    super.speak();
    console.log(`Оружие: ${this.weapon}`);
  }
}

class Elf extends Person {
  constructor(race, name, lang, spell) {
    super(race, name, lang);
    this.spell = spell;
  }

  createSpell() {
    console.log(`Эльф создаёт заклинание: ${this.spell}`);
  }

  speak() {
    super.speak();
    console.log(`Заклинание: ${this.spell}`);
  }
}

// Проверка
const orc = new Orc("Орк", "Alan", "Spanish", "Hammer");
orc.hit();
orc.speak();

const elf = new Elf("Эльф", "Алина", "Русский", "Ремонт");
elf.createSpell();
elf.speak();
