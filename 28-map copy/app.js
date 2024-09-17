const pricesWithoutTaxes = [20, 10, 59, 23, 8];
const taxInPercent = 0.2;
const listPricesWithTaxes = [];

listPricesWithTaxes = pricesWithoutTaxes.map((el, element) => {
  console.log();
  const priceTaxes = {
    taxAdj: el * 1.5,
    element,
  };

  return priceTaxes;
});

console.log("prices with taxes", listPricesWithTaxes);
