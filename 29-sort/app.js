const notas = [30, 13, 35, 20, 54];

const arreglo = notas.sort((elementA, elementB) => {
  if (elementA > elementB) {
    return 1;
  } else if (elementA === elementB) {
    return 0;
  } else {
    return -1;
  }
});

console.log(arreglo);
