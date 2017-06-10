//Do not change any of the function names

function multiplyByTen(num) {
  //return num after multiplying it by ten
  return 10 * num;
}

//~ console.log(multiplyByTen(2.5));

function subtractFive(num) {
  //return num after subtracting five
  return num - 5;
}

//~ console.log(subtractFive(5.5));

function areSameLength(str1, str2) {
  //return true if the two strings have the same length
  if (str1.length === str2.length) { return true; }
  //otherwise return false
  else { return false; }
}

//~ console.log(areSameLength("one","two"));

function areEqual(x, y) {
  //return true if x and y are the same
  if (x === y) { return true; }
  //otherwise return false
  else { return false; }
}

//~ console.log(areEqual("1",1));

function lessThanNinety(num) {
  //return true if num is less than ninety
  if (num < 90) { return true; }
  //otherwise return false
  else { return false; }
}

//~ console.log(lessThanNinety("89"));

function greaterThanFifty(num) {
  //return true if num is greater than fifty
  if (num > 50) { return true; }
  //otherwise return false
  else { return false; }
}

//~ console.log(greaterThanFifty("50.01"));

function add(x, y) {
  //add x and y together and return the value
  return x + y;
}

//~ console.log(add(1,2));

function subtract(x, y) {
  //subtract y from x and return the value
  return x - y;
}

//~ console.log(subtract(1,2));

function divide(x, y) {
  //divide x by y and return the value
  return x / y;
}

//~ console.log(divide(1,2));

function multiply(x, y) {
  //multiply x by y and return the value
  return x * y;
}

//~ console.log(multiply(0.5,0.5));

function getRemainder(x, y) {
  //return the remainder from dividing x by y
  return x % y;
}

//~ console.log(getRemainder(3,2));

function isEven(num) {
  //return true if num is even
  if (num%2 === 0) { return true; }
  //otherwise return false
  else { return false; }
}

//~ console.log(isEven(2));

function isOdd(num) {
  //return true if num is odd
  if (num%2 !== 0) { return true; }
  //otherwise return false
  else { return false; }
}

//~ console.log(isOdd(2));

function square(num) {
  //square num and return the new value
  return num * num;
}

//~ console.log(square(3));

function cube(num) {
  //cube num and return the new value
  return num * num * num;
}

//~ console.log(cube(3));

function raiseToPower(num, exponent) {
  //raise num to whatever power is passed in as exponent
  //~ Math.pow(num, exponent);
  for (var i = 0, result = 1; i < exponent; i++) { result *= num; }
  return result;
}

//~ console.log(raiseToPower(3,4));

function roundNumber(num) {
  //round num and return it
  return Math.round(num);
}

//~ console.log(roundNumber(-1.5));

function roundUp(num) {
  //round num up and return it
  return Math.ceil(num);
}

//~ console.log(roundUp(-1.99));

function addExclamationPoint(str) {
  //add an exclamation point to the end of str and return the new string
  //'hello world' -> 'hello world!'
  return str + '!';
}

//~ console.log(addExclamationPoint("hi"));

function combineNames(firstName, lastName) {
  //return firstName and lastName combined as one string and separated by a space.
  //'Lambda', 'School' -> 'Lambda School'
  return firstName + ' ' + lastName;
}

//~ console.log(combineNames("cov","fefe"));

function getGreeting(name) {
  //Take the name string and concatenate other strings onto it so it takes the following form:
  //'Sam' -> 'Hello Sam!'
  return 'Hello ' + name + '!';
}

//~ console.log(getGreeting("World"));

//If you can't remember these area formulas then head over to Google or look at the test code.

function getRectangleArea(length, width) {
  //return the area of the rectangle by using length and width
  return length * width;
}

//~ console.log(getRectangleArea(3,4));

function getTriangleArea(base, height) {
  //return the area of the triangle by using base and height
  return base * height / 2;
}

//~ console.log(getTriangleArea(3,4));

function getCircleArea(radius) {
  //return the rounded area of the circle given the radius
  return Math.round(Math.PI * Math.pow(radius, 2));
}

//~ console.log(getCircleArea(Math.sqrt(1/Math.PI)));

function getRectangularPrismVolume(length, width, height) {
  //return the area of the 3D rectangular prism given the length, width, and height
  return length * width * height;
}

//~ console.log(getRectangularPrismVolume(3,4,5));

/*
 * Functions : An operation that transforms something you give it into something else. It can transform a number into a number by multiplying it for example, or a number into a word using a code as another example.
 * 
 * Parameters : Information, options or values needed by a function to work. A function that multiplies what you give it needs a number for example.
 * 
 * Arguments : The actual values you pass to a function for its parameters. I can pass the argument '5' to someMultiplyFunction(5) for example.
 * 
 * 'if' statements : Block of code or instructions that only happen if (a) certain condition(s) is true or met.
 */

//Do not modify code below this line.
////--------------------------------

module.exports = {
  multiplyByTen: multiplyByTen,
  subtractFive: subtractFive,
  areSameLength: areSameLength,
  areEqual: areEqual,
  lessThanNinety: lessThanNinety,
  greaterThanFifty: greaterThanFifty,
  add: add,
  subtract: subtract,
  divide: divide,
  multiply: multiply,
  getRemainder: getRemainder,
  isEven: isEven,
  isOdd: isOdd,
  square: square,
  cube: cube,
  raiseToPower: raiseToPower,
  roundNumber: roundNumber,
  roundUp: roundUp,
  addExclamationPoint: addExclamationPoint,
  combineNames: combineNames,
  getGreeting: getGreeting,
  getRectangleArea: getRectangleArea,
  getTriangleArea: getTriangleArea,
  getCircleArea: getCircleArea,
  getRectangularPrismVolume: getRectangularPrismVolume
};
