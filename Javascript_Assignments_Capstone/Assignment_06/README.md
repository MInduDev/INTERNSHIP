# Assignment 6: Arrays, Objects, and Core Methods

This assignment introduces arrays, objects, and common JavaScript array methods.
It helps beginners learn how to work with structured data in a practical and beginner-friendly way.

## Learning Goals

- Create and use arrays of objects
- Use `forEach()` to loop over array elements
- Use `filter()` to select matching items
- Use `map()` to transform values
- Understand how objects store related data

## Concepts Covered

- Arrays
- Objects
- `forEach()`
- `filter()`
- `map()`
- Data transformation

## File

- `assignment-6.js`

## What the Program Does

The program stores product data as an array of objects:

```js
[
  { name: "Laptop", price: 800 },
  { name: "Mouse", price: 25 },
  { name: "Keyboard", price: 45 }
]
```

Then it:

- prints all products with `forEach()`
- filters products priced below $50
- maps the products into uppercase display labels

## Example Output

```js
-- All Products (forEach) --
Item: Laptop - Price: $800
Item: Mouse - Price: $25
Item: Keyboard - Price: $45

-- Filtered Products (Price < $50) --
[ { name: 'Mouse', price: 25 }, { name: 'Keyboard', price: 45 } ]

-- Mapped Product Tags (map) --
[ "LAPTOP costs $800", "MOUSE costs $25", "KEYBOARD costs $45" ]
```

## How to Run

```bash
node assignment-6.js
```

## Author 

M Indu
