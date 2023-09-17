import { faker } from "@faker-js/faker";
import { Mappable } from "./CustomMap";

export class Company implements Mappable {
  // implements Mappable means that Company Class must satisfy the Mappable interface.
  // So, the Company class must have all the properties and methods that the Mappable interface has.
  // We add implements because it would be easier for us to find from where the error is coming from.
  // Cause if we don't add implements, then the error will be thrown from the company instance we create in index.ts.
  companyName: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };
  color: string = "red";

  constructor() {
    this.companyName = faker.company.name();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: faker.location.latitude(),
      lng: faker.location.longitude(),
    };
  }

  markerContent(): string {
    return `
      <div>
        <h1>Company Name: ${this.companyName}</h1>
        <h3>Catchphrase: ${this.catchPhrase}</h3>
      </div>
    `;
  }
  // As Mappable interface on CustomMap expects a markerContent function that returns a string, we need to 
  // create a function called markerContent that returns a string.
}
