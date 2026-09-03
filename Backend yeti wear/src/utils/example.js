export const example = () => {
  return "This is an example function";
};

export const anotherexample = () => {
  return "This is another example";
};

const products = [
  {
    id: 1,
    name: "Jeans",
    price: 1200,
  },
  {
    id: 2,
    name: "Hoodie",
    price: 1500,
  },
];

export const productlist = () => {
  return JSON.stringify(products);
};
