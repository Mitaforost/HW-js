function rollDice(dice) {
  const sides = parseInt(dice.slice(1), 10);

  if (!Number.isInteger(sides) || sides <= 0) {
    throw new Error("Неверный тип кубика");
  }

  return Math.floor(Math.random() * sides) + 1;
}
rollDice("d6");
rollDice("d20");
rollDice("d4");
