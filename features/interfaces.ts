const oldCivic = {
  name: 'civic',
  year: 2000,
  broken: true
};

const printVehicle = (vehicle: { name: string; year: number; broken: boolean }): void => {
  console.log(`Name: ${vehicle.name}`);
  console.log(`Year: ${vehicle.year}`);
  console.log(`Broken? ${vehicle.broken}`);
};
// This is a long annotation. We can use an interface to make it shorter.

// -----------------------------------------------------------------------------------------------------

interface Vehicle {
  name: string;
  year: number;
  broken: boolean;
}
// We can use an interface to describe the structure of an object. We can use it as a type annotation.

const oldCivic2 = {
  name: 'civic',
  year: 2000,
  broken: true
  // isBroken: true // error
  // broken: 'yes' // error
  // name: 10 // error
  // We can't add new properties or change the order of properties. We can only change the value of
  // existing properties.
};

const printVehicle2 = (vehicle: Vehicle): void => {
  console.log(`Name: ${vehicle.name}`);
  console.log(`Year: ${vehicle.year}`);
  console.log(`Broken? ${vehicle.broken}`);
};

printVehicle2(oldCivic2);

// -----------------------------------------------------------------------------------------------------

interface Vehicle2 {
  name: string;
  year: Date;
  broken: boolean;
  summary(): string;
  // summary is a function that returns a string
}

const oldCivic3 = {
  name: 'civic',
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name: ${this.name}`;
  }
};

const printVehicle3 = (vehicle: Vehicle2): void => {
  console.log(vehicle.summary());
};

printVehicle3(oldCivic3);

// -----------------------------------------------------------------------------------------------------

interface Reportable {
  summary(): string;
}

const oldCivic4 = {
  name: 'civic',
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name: ${this.name}`;
  }
};

const summaryPrinter = (item: Reportable): void => {
  console.log(item.summary());
}
// The Reportable interface only has summary function. So it only cares whether the oldCivic4 object has
// a summary function. It doesn't care about other properties.

// -----------------------------------------------------------------------------------------------------
// Code reuse with interfaces

interface Reportable2 {
  summary(): string;
}

const oldCivic5 = {
  name: 'civic',
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name: ${this.name}`;
  }
};

const drink2 = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `My drink has ${this.sugar} grams of sugar`;
  }
}

const printSummary = (item: Reportable2): void => {
  console.log(item.summary());
}

printSummary(oldCivic5);
printSummary(drink2);
// Both oldCivic5 and drink2 satisfy the Reportable2 interface. So we can use the same function to print
// the summary of both objects.
// We can use interfaces to reuse code in different objects. We can use interfaces to make sure that
// different objects satisfy the same contract.
