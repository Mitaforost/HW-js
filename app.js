const age = new Date("2022-01-01");

function checkAge(age) {
  const currentDate = new Date();
  const difference = currentDate.getFullYear() - age.getFullYear();
  return difference > 14 ? true : false;
}

console.log(checkAge(age));
