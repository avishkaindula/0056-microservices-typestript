import { faker } from "@faker-js/faker";
import { Mappable } from "./CustomMap";

export class User implements Mappable {
  // implements Mappable means that User Class must satisfy the Mappable interface.
  // So, the User class must have all the properties and methods that the Mappable interface has.
  // We add implements because it would be easier for us to find from where the error is coming from.
  // Cause if we don't add implements, then the error will be thrown from the user instance we create in index.ts.
  name: string;
  location: {
    lat: number;
    lng: number;
  };
  color: string = "red";

  constructor() {
    this.name = faker.person.firstName();
    this.location = {
      lat: faker.location.latitude(),
      lng: faker.location.longitude(),
    };
  }

  markerContent(): string {
    return `User Name: ${this.name}`;
  }
  // As Mappable interface on CustomMap expects a markerContent function that returns a string, we need to 
  // create a function called markerContent that returns a string.
}
