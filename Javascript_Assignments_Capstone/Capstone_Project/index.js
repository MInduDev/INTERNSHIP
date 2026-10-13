
// 1. Data & Input Initialization
console.log("--- Initializing Inventory System ---");

// Existing products
const inventory = [
    { name: "Laptop", price: 800 },
    { name: "Mouse", price: 25 }
];

// Take new product details from user
const productName = prompt("Enter product name:", "Monitor");
const productPriceInput = prompt("Enter product price:", "150");

// Convert price from string to number
const productPrice = Number(productPriceInput);


// Input Validation

if (
    productName === null ||
    productName.trim() === "" ||
    productPriceInput === null ||
    productPriceInput.trim() === "" ||
    Number.isNaN(productPrice) ||
    productPrice < 0
) {
    console.log("Invalid product details. Product was not added.");
} else {

    // Add new product to inventory
    inventory.push({
        name: productName.trim(),
        price: productPrice
    });

    console.log(
        `[Prompt executed: User adds "${productName.trim()}" at "$${productPrice}"]`
    );
}



// 2. Category using if...else

function getCategory(price) {

    if (price < 100) {
        return "Budget";

    } else if (price < 500) {
        return "Standard";

    } else {
        return "Premium";
    }
}


// Category using switch

function getCategoryName(category) {

    switch (category) {

        case "Budget":
            return "Budget";

        case "Standard":
            return "Standard";

        case "Premium":
            return "Premium";

        default:
            return "Unknown";
    }
}


// 3. Processing Inventory using forEach

console.log("\n--- Processing Inventory Roster (forEach) ---");

inventory.forEach(function (item) {

    // Skip invalid product
    if (!item.name || typeof item.price !== "number") {
        return;
    }

    const category = getCategory(item.price);
    const categoryName = getCategoryName(category);

    console.log(
        `* Item: ${item.name} ($${item.price}) -> Category: ${categoryName}`
    );
});


// Find first affordable product

let index = 0;
let firstAffordableItem = null;

while (index < inventory.length) {

    if (inventory[index].price < 200) {

        firstAffordableItem = inventory[index];

        // Stop searching
        break;
    }

    index++;
}


// 4. Functions & Scope

// Regular function
function calculateTotal(items) {

    let total = 0;

    for (let i = 0; i < items.length; i++) {

        // Skip invalid price
        if (typeof items[i].price !== "number") {
            continue;
        }

        total = total + items[i].price;
    }

    return total;
}


// Arrow function for discount
const applyDiscount = (amount, discountPercent = 0) => {

    return amount - (amount * discountPercent / 100);
};


// Arrow function for tax
const applyTax = (amount, taxPercent = 0) => {

    return amount + (amount * taxPercent / 100);
};


// Calculate total inventory value
const totalInventoryValue = calculateTotal(inventory);



const discountedAmount = applyDiscount(totalInventoryValue, 0);
const finalAmount = applyTax(discountedAmount, 0);


// 5. filter()
// Find products under $200

const affordableItems = inventory.filter(function (item) {

    return item.price < 200;
});

// Create formatted product list

const formattedReport = inventory.map(function (item) {

    return `${item.name.toUpperCase()}: $${item.price}`;
});


// Final Financial Analytics

console.log("\n--- Financial Analytics ---");

console.log(
    `Total Inventory Value: $${totalInventoryValue}`
);

console.log(
    `Filtered Affordable Items (Under $200): ${JSON.stringify(
        affordableItems.map(function (item) {
            return item.name;
        })
    )}`
);

console.log(
    `Formatted Report List: ${JSON.stringify(formattedReport)}`
);
