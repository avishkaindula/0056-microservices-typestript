const carMakers: string[] = [];

const carMakers2 = ['ford', 'toyota', 'chevy'];
// Type inference works when defining an array and initializing it with values. 
// So, we don't need to add the type annotation.

const dates = [new Date(), new Date()];

const carsByMake: string[][] = [];

const cartByMake2 = [
  ['f150'],
  ['corolla'],
  ['camaro']
];

// Help with inference when extracting values
const car = carMakers2[0];
// const car has type string assigned thanks to type inference.
const myCar = carMakers2.pop();

// Prevent incompatible values
// carMakers2.push(100); // Error

// Help with 'map', 'forEach', 'reduce' functions
carMakers2.map((car: string): string => {
  return car.toUpperCase();
  // TS knows that car is a string. So, we can use string methods.
});

// Flexible types
const importantDates: (Date | string)[] = [];
const importantDates2: (Date | string)[] = [new Date()];

importantDates2.push('2030-10-10');
importantDates2.push(new Date());
// importantDates2.push(100); // Error

const importantDates3 = [new Date(), '2030-10-10'];
// Type inference works when defining an array and initializing it with values.
// So, it has type (Date | string)[] assigned automatically using pipe operator.
