/// <reference types="@types/google.maps" />
import { User } from "./User";
import { Company } from "./Company";
import { CustomMap } from "./CustomMap";

const customMap = new CustomMap("map");
// "map" is the id of the div element in index.html
// map.googleMap 
// error: Property 'googleMap' is private and only accessible within class 'CustomMap'.

const user = new User();
const company = new Company();

// customMap.addUserMarker(user);
// This is how we pass an instance of User to the addUserMarker method as 
// addUserMarker expects an instance of User as an argument.

customMap.addMarker(user);
customMap.addMarker(company);
// addMarker expects an instance of Mappable as an argument.
// User and Company both implement the Mappable interface.
// So, we can pass an instance of User or Company to addMarker.