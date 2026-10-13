# Assignment 5: Functions and Scope

This assignment introduces functions, which let you organize code into reusable blocks.
It also explains scope, which determines where variables can be used in your program.

## Learning Goals

- Create a function with parameters and default values
- Use arrow functions
- Call functions and return results
- Understand local and block scope
- Handle variable access outside its scope

## Concepts Covered

- Function declaration
- Default parameters
- Arrow functions
- Return values
- Block scope with `let`
- Error handling for out-of-scope variables

## File

- `assignment-5.js`

## What the Program Does

The program:

- defines a rectangle area function using a regular function declaration
- defines another area function using an arrow function
- calls both functions with example values
- demonstrates block scope by creating a variable inside an `if` block
- tries to access that variable outside the block to show scope behavior

## Example Output

```js
Standard Function Area (Default 5x4): 20
Arrow Function Area (Custom 10x3): 30
Inside block: I exist only inside this block
Scope Test Error: ReferenceError: blockVar is not defined
```

## How to Run

```bash
node assignment-5.js
```

## Author 

M Indu
