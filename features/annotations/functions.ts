const add = (a: number, b: number): number => {
  return a + b;
};

const subtract = (a: number, b: number): number => { 
  return a - b;
}

function divide(a: number, b: number): number {
  return a / b;
}

const multiply = function(a: number, b: number): number {
  return a * b;
}

// void and never

const logger = (message: string): void => { 
  console.log(message);
}

const throwError = (message: string): never => { 
  throw new Error(message);
  // never means that we never reach the end of the function. We never return anything
}

const throwError2 = (message: string): string => { 
  if (!message) {
    throw new Error(message);
  }
  return message;
}

const throwError3 = (message: string): void => { 
  if (!message) {
    throw new Error(message);
  }
}

// Destructuring with annotations

const todaysWeather = {
  date: new Date(),
  weather: 'sunny'
};

const logWeather = (forecast: { date: Date, weather: string }): void => {
  console.log(forecast.date);
  console.log(forecast.weather);
}

const logWeather2JS = ({ date, weather }) => {
  console.log(date);
  console.log(weather);
  // This is destructuring in JS
}

const logWeather2TS = ({ date, weather }: { date: Date, weather: string }): void => {
  console.log(date);
  console.log(weather);
  // This is destructuring in TS
}

logWeather(todaysWeather);
