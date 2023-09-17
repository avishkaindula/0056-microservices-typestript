// import { User } from "./User";
// import { Company } from "./Company";
// User and Company are classes.
// We can use them to create a new instance of User or Company or to refer to the type of User or Company.

// ---------------------------------------------------------------------------------------------------

// Instructions to every other class on how they can be an argument to 'addMarker'
export interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
  markerContent(): string;
  // The classes that satisfy the Mappable interface must have a markerContent method that returns a string.
  color: string;
}
// For a class satisfies the Mappable interface, it must have a location property that has a lat and lng property.
// If those classes have a location property that has a lat and lng property, then they can be an argument to addMarker.
// Both User and Company satisfy the Mappable interface because they both have a location property that has a lat and lng property.
// A single value inside TypeScript can have multiple  different types.
// So in this case, if the User class satisfies the Mappable interface, then the User can also be of type Mappable.

export class CustomMap {
  private googleMap: google.maps.Map;
  // We can use the private keyword to protect the googleMap property from being accessed outside of the CustomMap class.

  constructor(divId: string) {
    this.googleMap = new google.maps.Map(
      document.getElementById(divId) as HTMLElement,
      {
        zoom: 1,
        center: {
          lat: 0,
          lng: 0,
        },
      }
    );
  }

  addMarker(mappable: Mappable): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng,
      },
    });

    marker.addListener("click", () => {
      const infoWindow = new google.maps.InfoWindow({
        // content: "Hi there!",
        content: mappable.markerContent(),
      });

      infoWindow.open(this.googleMap, marker);
    });
  }

  // ---------------------------------------------------------------------------------------------------

  // addUserMarker(user: User): void {
  //   // addUserMarker will receive an instance of User as an argument.
  //   new google.maps.Marker({
  //     map: this.googleMap,
  //     position: {
  //       lat: user.location.lat,
  //       lng: user.location.lng,
  //     },
  //   });
  // }

  // addCompanyMarker(company: Company): void {
  //   new google.maps.Marker({
  //     map: this.googleMap,
  //     position: {
  //       lat: company.location.lat,
  //       lng: company.location.lng,
  //     },
  //   });
  // }
  // There's some code duplication here. We can refactor this code to make it more reusable.

  // ---------------------------------------------------------------------------------------------------

  // addMarker(mappable: User | Company): void {
  //   // We can only access the properties that are common between User and Company.
  //   // In this case, we can only access the location property.
  //   // If we do it like this, CustomMap will have a dependency on User and Company.
  //   // And if we add more classes, CustomMap will have a dependency on those classes as well.
  //   new google.maps.Marker({
  //     map: this.googleMap,
  //     position: {
  //       lat: mappable.location.lat,
  //       lng: mappable.location.lng,
  //     },
  //   });
  // }

  // ---------------------------------------------------------------------------------------------------
}
