/*
  EXAMPLE TASK:
    - Write an Airplane constructor that initializes `name` from an argument.
    - All airplanes built with Airplane should initialize with an `isFlying` of false.
    - Give airplanes the ability to `.takeOff()` and `.land()`:
        + If a plane takes off, its `isFlying` property is set to true.
        + If a plane lands, its `isFlying` property is set to false. xx
*/

// EXAMPLE SOLUTION CODE:
function Airplane(name) {
    this.name = name;
    this.isFlying = false;
  }
  Airplane.prototype.takeOff = function () {
    this.isFlying = true;
  };
  Airplane.prototype.land = function () {
    this.isFlying = false;
  };
  
  
  /*
  // 👇 COMPLETE YOUR WORK BELOW 👇
  // 👇 COMPLETE YOUR WORK BELOW 👇
  // 👇 COMPLETE YOUR WORK BELOW 👇
  */
  
  /*
    TASK 1
      - Write a Person Constructor that initializes `name` and `age` from arguments. --> Name & Age inside function Parameters

      - All instances of Person should initialize with an empty `stomach` array. --> create stomach array, empty

      - Give instances of Person the ability to `.eat("someFood")`: --> Person.prototype.eat = function (){ this.eat = 10 items}
          + When eating an edible, it should be pushed into the `stomach`. ---> push into stomach
          + The `eat` method should have no effect if there are 10 items in the `stomach`. ---> if stomach.length < 10 , then push into stomach

      - Give instances of Person the ability to `.poop()`: --> Person.prototype.poop = function () { this.stomach = []
          + When an instance poops, its `stomach` should empty. 

      - Give instances of Person a method `.toString()`: ---> Person.prototype.toString = function () {${name} , ${age}; }
          + It should return a string with `name` and `age`. Example: "Mary, 50"
  const personOne = new Person('Chelsea', 22);
 */
  
 function Person(name, age) {
  this.name = name;
  this.age = age;
  this.stomach = [];
  }


// create an eat method, pass in argument of something edible, that edible thing should be pushed into the stomach
// if the stomach has 10 items, person cannot eat anymore

Person.prototype.eat = function(edible) {
  if(this.stomach.length < 10){
    this.stomach.push(edible);
  }
}

//make person poop
Person.prototype.poop = function(){
  this.stomach = [];
}
 

  //make a person toString
Person.prototype.toString = function(){
  return `${this.name}, ${this.age}`;
}

const personOne = new Person('Chelsea', 22);
  

  
  
  /*
    TASK 2
      - Write a Car constructor that initializes `model` and `milesPerGallon` from arguments.
      - All instances built with Car:
          + should initialize with an `tank` at 0
          + should initialize with an `odometer` at 0
      - Give cars the ability to get fueled with a `.fill(gallons)` method. Add the gallons to `tank`.

      - STRETCH: Give cars ability to `.drive(distance)`. The distance driven:
          + Should cause the `odometer` to go up.
          + Should cause the the `tank` to go down taking `milesPerGallon` into account.
      - STRETCH: A car which runs out of `fuel` while driving can't drive any more distance:
          + The `drive` method should return a string "I ran out of fuel at x miles!" x being `odometer`.
  */
  
 function Car(model, milesPerGallon) {
  this.model = model;
  this.milesPerGallon = milesPerGallon;
  this.tank = 0;
  this.odometer= 0;
  }
  //build an instance where a car has a tank and odometer---- should be  = 0

  // Car.prototype.tank = function (){ // HAS NOT PASSED
  //   this.tank = 0 ;
  // }
  // Car.prototype.odometer = function () { //HAS NOT PASSED
  //   this.odometer = 0 ;
  // }

//- Give car the ability to get fueled with a `.fill(gallons)` method. Add the gallons to `tank`. 
  Car.prototype.fill = function (gallons) { //PASSED
   this.tank = this.tank + gallons;
   return this.tank;
  }
// const car1 = new car('Nissan', 10)
// console.log(car1);
  /*
    TASK 3
      - Write a Baby constructor sub classing Person. --> call person pass in this and attributes

      - Besides `name` and `age`, Baby takes a third argument to initialize `favoriteToy`. --> create special attribute for favoriteToy

      - Besides the methods on Person.prototype, babies have the ability to `.play()`: -->

          + Should return a string "Playing with x", x being the favorite toy. -->
  */
 function Baby(attributes) {
   Person.call(this, attributes)
   this.favoriteToy = attributes.favoriteToy; //this is a special attribute that belongs only to BABY
   this.favoriteToy = this.favoriteToy;
  
  }
  //linking to Person prototype with Baby prototype
 Baby.prototype =Object.create(Person.prototype);

 //Give Baby ability to play
  // Baby.prototype.play = function (){
  //   console.log(`Playing with ${this.favoriteToy}`);
  // }

  // const personOne = new BabyOne{
    // name: 'Noah';
    // favoriteToy: 'ball'
  // }




  /* 
    TASK 4
    In your own words explain the four principles for the "this" keyword below:
    1. Global Binding - this is not defined, computer thinks 'this' is everything in the window
    2. Implicit Binding - most common rule, when function is invoked. 'this' will look to left of dot. Only applies obj with methods.
    3. New Binding- using the 'new' keyword constructs a new obj and 'this' points to the new obj created to it. You have to pass arguments 1 by 1.
    4. Explicit Binding 
    (.call(immediately calls function, passes arguments one by one) , 
    .apply(pass arguments as an array)
    , .bind(pass in arguments 1 by 1, but does not immediately invoke function, returns brand new function that can be invoked later.))
  */
  
  
  ///////// END OF CHALLENGE /////////

  /* 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 */
function foo(){
    return 'bar';
}

export default{
    foo,
    Person, 
    Car,
    Baby
}