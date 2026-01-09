function Person(race, name, language) {
  this.race = race;
  this.name = name;
  this.language = language;
}

Person.prototype.speak = function () {
  console.log(`Язык: ${this.language}, Имя: ${this.name}`);
};

function Orc(race, name, language, weapon) {
  Person.call(this, race, name, language);
  this.weapon = weapon;
}

Orc.prototype = Object.create(Person.prototype);
Orc.prototype.constructor = Orc;

Orc.prototype.hit = function () {
  console.log(`Удар оружием: ${this.weapon}`);
};

function Elfi(race, name, language, typeOfMagic) {
  Person.call(this, race, name, language);
  this.typeOfMagic = typeOfMagic;
}
Elfi.prototype = Object.create(Person.prototype);
Elfi.prototype.constructor = Elfi;

Elfi.prototype.createMagic = function () {
  console.log(`Создание заклинания с помощью: ${this.typeOfMagic}`);
};
