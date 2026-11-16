// ==========================================
//              10 FUNCTIONS
// ==========================================

// 1. Add Two Numbers
function add(a, b) {
  return a + b;
}

// 2. Subtract Two Numbers
function subtract(a, b) {
  return a - b;
}

// 3. Multiply Two Numbers
function multiply(a, b) {
  return a * b;
}

// 4. Check Even or Odd
function isEven(num) {
  return num % 2 === 0;
}

// 5. Square of a Number
function square(num) {
  return num * num;
}

// 6. Full Name Builder
function getFullName(firstName, lastName) {
  return firstName + " " + lastName;
}

// 7. String Length
function getLength(text) {
  return text.length;
}

// 8. Uppercase Converter
function toUpper(text) {
  return text.toUpperCase();
}

// 9. Voting Eligibility
function canVote(age) {
  return age >= 18 ? "Eligible" : "Not Eligible";
}
console.log(age(17));


// 10. Default Greeting
function greet(name = "Guest") {
  return "Assalam-o-Alaikum, " + name;
}
console.log(greet);


// ==========================================
//                 10 ARRAY 
// ==========================================

// 1. Create an Array
const fruits = ["Apple", "Banana", "Mango"];

// 2. Access First & Last Item
const colors = ["Red", "Green", "Blue"];
const firstColor = colors[0];
const lastColor = colors[colors.length - 1];

// 3. Add Item at End (push)
const nums = [1, 2, 3];
nums.push(4);

// 4. Remove Last Item (pop)
const numsPop = [1, 2, 3, 4];
numsPop.pop();

// 5. Add Item at Start (unshift)
const cities = ["Lahore", "Karachi"];
cities.unshift("Islamabad");

// 6. Remove First Item (shift)
const citiesShift = ["Islamabad", "Lahore", "Karachi"];
citiesShift.shift();

// 7. Check if Item Exists (includes)
const items = ["Pen", "Book", "Eraser"];
const hasBook = items.includes("Book");

// 8. Loop Through Array (forEach)
const names = ["Ayesha", "Bilal", "Zara"];
names.forEach(name => console.log("Name:", name));

// 9. Transform Every Item (map)
const prices = [100, 200, 300];
const doubledPrices = prices.map(p => p * 2);

// 10. Filter Matching Items (filter)
const ages = [12, 18, 25, 15, 30];
const adults = ages.filter(age => age >= 18);

