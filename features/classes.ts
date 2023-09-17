class Vehicle {
  drive() {
    console.log("chugga chugga");
  }
  honk() {
    console.log("beep");
  }
}

const vehicle = new Vehicle();
vehicle.drive();
vehicle.honk();

class Car1 extends Vehicle {}

const car1 = new Car1();
car1.drive();

class Car2 extends Vehicle {
  drive() {
    console.log("vroom");
  }
  // We can override methods in child classes
}

const car2 = new Car2();
car2.drive();

// ---------------------------------------------------------------------------------------------------
// Access modifiers

class Vehicle2 {
  public reverse(): void {
    console.log("reverse");
  }
  // public is the default access modifier. So we can omit it as we've done in previous examples

  protected honk(): void {
    console.log("beep");
  }
}

class Car3 extends Vehicle2 {
  private drive(): void {
    console.log("vroom");
  }

  startDrivingProcess(): void {
    this.drive();
    // We can call private methods inside child classes
    this.honk();
    // We can call protected methods inside child classes
    this.reverse();
    // We can call public methods inside child classes
  }
}

const car3 = new Car3();
// car3.drive(); // Error
// We can't call private methods outside of the class

const vehicle2 = new Vehicle2();
// vehicle2.honk(); // Error
// We can't call protected methods outside of the class.
// Protected methods can only be called inside the class or inside child classes

// ---------------------------------------------------------------------------------------------------
// Fields in classes
// Fields are variables that are defined inside a class like color in the example below

class Vehicle3 {
  // color: string = "red"; // We can initialize fields in the class itself or using a constructor

  color: string;

  constructor(color: string) {
    this.color = color;
  }

  protected honk(): void {
    console.log("beep");
  }
}

const vehicle3 = new Vehicle3("orange");
console.log(vehicle3.color);

class Vehicle4 {
  constructor(public color: string) {}
  // Vehicle3 and Vehicle4 are equivalent

  // constructor(private color: string) {}
  // constructor(protected color: string) {}
  // We can also use private and protected access modifiers in the constructor

  protected honk(): void {
    console.log("beep");
  }
}

// ---------------------------------------------------------------------------------------------------
// Fields with inheritance

class Vehicle5 {
  constructor(public color: string) {}

  protected honk(): void {
    console.log("beep");
  }
}

class Car5 extends Vehicle5 {
  constructor(public wheels: number, color: string) {
    super(color);
    // We must call super in the constructor of the child class
    // super calls the constructor of the parent class
    // And the color we pass to super is passed to the constructor of the parent class
    // The constructor on Car5 will throw an error if we don't pass the color to super
  }
  // We haven't defined color in the constructor of Car5 as public color: string because 
  // we don't want to initialize a new field called color in Car5. We want to use the color field
  // defined in the parent class

  private drive(): void {
    console.log("vroom");
  }

  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const car5 = new Car5(4, "blue");
// We must pass the color to the constructor of the parent class
// color will be first passed to the constructor of the child class and then to the constructor of the parent class
