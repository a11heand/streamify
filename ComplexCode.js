/*
Filename: ComplexCode.js
Content: Complex JavaScript Code with Various Functionalities
*/

// Constants
const MAX_NUMBER = 100;
const MIN_NUMBER = 0;

// Global Variables
let counter = 0;
let isRunning = false;

// Function to generate random number
function generateRandomNumber() {
  return Math.floor(Math.random() * (MAX_NUMBER - MIN_NUMBER + 1)) + MIN_NUMBER;
}

// Class representing a complex data structure
class ComplexDataStructure {
  constructor(name) {
    this.name = name;
    this.data = [];
  }

  addData(data) {
    this.data.push(data);
  }

  getData() {
    return this.data;
  }
}

// Function to calculate factorial recursively
function calculateFactorial(n) {
  if (n <= 1) {
    return 1;
  }
  return n * calculateFactorial(n - 1);
}

// Event listener for button click
function handleClick() {
  if (!isRunning) {
    isRunning = true;
    counter++;

    setTimeout(() => {
      console.log(`Button clicked ${counter} times.`);
      isRunning = false;
    }, generateRandomNumber() * 1000);
  }
}

// Main function
(function () {
  // Creating objects from ComplexDataStructure class
  const struct1 = new ComplexDataStructure("Structure 1");
  const struct2 = new ComplexDataStructure("Structure 2");

  // Adding data to the structures
  struct1.addData("Data 1");
  struct1.addData("Data 2");
  struct2.addData("Data 3");
  struct2.addData("Data 4");

  // Calculating factorial of a random number
  const randomNumber = generateRandomNumber();
  const factorial = calculateFactorial(randomNumber);
  console.log(`Factorial of ${randomNumber} is ${factorial}.`);

  // Attaching event listener to button
  const button = document.getElementById("myButton");
  button.addEventListener("click", handleClick);
})();
...

// 200+ lines of more complex code
...