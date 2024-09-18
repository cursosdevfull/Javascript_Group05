const nameList = ["Carlos", "Lorena", "Silvia"];
const nameListClone = [...nameList]; //nameList;

console.log("nameList before", nameList);
console.log("nameListClone before", nameListClone);

nameListClone.push("Aida");

console.log("nameList after", nameList);
console.log("nameListClone after", nameListClone);

const prices = [200, 3300, 300, 150, 388, 78, 12, 34];

const highest = Math.max(...prices);
const lowest = Math.min(...prices);

const namesMenList = ["Pedro", "Luis", "Sergio"];
const namesWomenList = ["Carmen", "Sara", "Adriana", "Gloria", "Johana"];

const namesListTotal = [...namesMenList, ...namesWomenList].sort();
console.log("namesListTotal", namesListTotal);

const namesListConcated = namesMenList.concat(...namesWomenList);
console.log("namesListConcated", namesListConcated);
