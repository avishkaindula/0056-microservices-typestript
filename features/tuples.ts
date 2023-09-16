const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40
};

// const pepsi: [string, boolean, number] = ['brown', true, 40]; // tuple
// This is a tuple. It's an array-like structure where each element represents some property of a record
// If we don't add [string, boolean, number] annotation, it will be inferred as (string | boolean | number)[]
// which is an array of strings, booleans and numbers. But we want to represent a specific order of elements

type Drink = [string, boolean, number]; // type alias
const pepsi: Drink = ['brown', true, 40];
const sprite: Drink = ['clear', true, 40];
const tea: Drink = ['brown', false, 0]; 

// tea[0] = 1; // error
// This gives an error because it's a tuple. We can't change the order of elements or add new elements.

// Why tuples are not used often?

const carSpecs: [number, number] = [400, 3354];

const carStats = {
  horsepower: 400,
  weight: 3354
};

// If we want to represent a record, we can use an object. It's more clear and easier to understand.
