const line = "jorge,pedro,andrea,melissa,carmen,carmela,gloria,renzon,cesar";

const nameList = line.split(","); // ["jorge", "pedro", "andrea", ...]
const namesCapitalLetter = nameList.map((name) => name.toUpperCase());

const namesSorted = namesCapitalLetter.sort();

const namesWithHypens = namesSorted.join("-");

console.log("line", line);
console.log("namesWithHypens", namesWithHypens);

const toUpper = (name) => name.toUpperCase();

const namesFinal = line.split(",").map(toUpper).sort().join("-");

console.log("namesFinal", namesFinal);
