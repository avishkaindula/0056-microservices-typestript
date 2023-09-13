const profile = {
  name: "John",
  age: 30,
  coords: {
    lat: 0,
    lng: 15,
  },
  setAge(age: number): void {
    this.age = age;
  },
};

// const { age, name }: { age: number; name: string } = profile;
const { age }: { age: number } = profile;
// This is destructuring in TS

const { coords: { lat, lng } }: { coords: { lat: number; lng: number } } = profile;
