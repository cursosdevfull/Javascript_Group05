const guestParty = [
  { name: "Juan", age: 29 },
  { name: "Jimena", age: 40 },
  { name: "Alfonso", age: 70 },
  { name: "Andrea", age: 12 },
];

const listGuesses = guestParty.filter((element) => {
  return element.age <= 12;
});

console.log(listGuesses);

const guestGreaterThan = guestParty.filter((element) => element.age >= 18);

console.log(guestGreaterThan);

const users = [
  { id: 1, name: "Gonzalo" },
  { id: 2, name: "Luis" },
  { id: 3, name: "Javier" },
  { id: 4, name: "María" },
  { id: 5, name: "Carmen" },
];

function deleteUser(id) {
  return users.filter((user) => user.id !== id);
}

console.log(deleteUser(3));
