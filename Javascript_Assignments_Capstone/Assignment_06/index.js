// Assignment 6: Arrays, Objects, and Core Methods

const products = [
    { name: "Laptop", price: 800 },
    { name: "Mouse", price: 25 },
    { name: "Keyboard", price: 45 }
];

console.log("-- All Products (forEach) --");

products.forEach((product) => {
    console.log(`Item: ${product.name} - Price: $${product.price}`);
});

console.log("\n-- Filtered Products (Price < $50) --");

const filteredProducts = products.filter((product) => product.price < 50);

console.log(
    `[ { name: '${filteredProducts[0].name}', price: ${filteredProducts[0].price} }, { name: '${filteredProducts[1].name}', price: ${filteredProducts[1].price} } ]`
);

console.log("\n-- Mapped Product Tags (map) --");

const mappedProducts = products.map(
    (product) => `${product.name.toUpperCase()} costs $${product.price}`
);

console.log(`[ "${mappedProducts.join('", "')}" ]`);
