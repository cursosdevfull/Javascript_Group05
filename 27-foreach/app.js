const pricesWithoutTaxes = [20, 10, 59, 23, 8];
const taxInPercent = 0.2;
const listPricesWithTaxes = [];

pricesWithoutTaxes.forEach((price) => {
  const priceWithTaxes = {
    taxAdjPrice: price * (1 + taxInPercent),
  };

  listPricesWithTaxes.push(priceWithTaxes);
});

console.log("prices with taxes", listPricesWithTaxes);
