const users = [
  { id: 1, name: "Вася" },
  { id: 2, name: "Петя" },
  { id: 1, name: "Вася" },
];

const uniqueUsers = [
  ...new Set(users.map(user => user.id))
].map(id => users.find(user => user.id === id));

console.log(uniqueUsers);
