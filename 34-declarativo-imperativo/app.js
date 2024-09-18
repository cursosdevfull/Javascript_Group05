const productList = [
  { product: "pillow", price: 10, category: "bedroom" },
  { product: "carpet", price: 50.8, category: "living room" },
  { product: "swimming pool", price: 900, category: "outdoor" },
  { product: "night table", price: 100, category: "bedroom" },
];

const filterByCategoryBedroom = (element) => element.category === "bedroom";
const sumPrices = (accumulator, currentValue) => {
  return accumulator + currentValue.price;
};

const totalCategoryBedroom = productList
  .filter(filterByCategoryBedroom)
  .reduce(sumPrices, 0);

console.log("totalCategoryBedroom", totalCategoryBedroom);
