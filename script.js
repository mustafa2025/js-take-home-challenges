// day2
// const todayDate = new Date()
// alert (todayDate)
// const numberOne = prompt ("Enter a number")
// const numberTwo = prompt ("Enter another number")
// console.log("Math.min(numberOne, numberTwo) : ",+Math.min(numberOne, numberTwo))
// alert (Math.min(numberOne, numberTwo))

// day3
//  challenge 1
// Challenge 1:
// Create a prompt and ask user for first favorite color
// Create a prompt and ask user for second favorite color
// Use a ternary operator to print out "you chose my favorite colors" if user selected blue for first favorite color AND grey for second favorite color or else print "better luck next time"
// const firstFavColor = prompt ("Enter Fav Color")
// console.log(firstFavColor) //"blue"
// const secondFavColor = prompt ("Enter Second Fav Color")
// const color = firstFavColor === "blue" && secondFavColor === "grey" ? `you chose my favorite colors`: `better luck next time`

// day 3
// challenge 2
// Declare a variable called birthday that looks like this: const birthday = new Date('August 19, 1975 23:15:30');
// Use the getDay() method to create a variable that keeps track of the day of your birthday
// Write a switch statement using the day of your birthday variable that will cover all cases from Monday thru Friday, console log the day of the week in a string
// Commit your code to github

// const birthday = new Date('August 21, 1975 23:15:30');
// const dayOfWeek = birthday.getDay()
// console.log(dayOfWeek);
// console.log(birthday)
// switch (dayOfWeek) {
//     case 0:
//         console.log("Sunday")
//         break;
//     case 1:
//         console.log("Monday")
//         break;
//     case 2:
//         console.log("Tuesday")
//         break;
//     case 3:
//         console.log("Wednesday")
//         break;
//     case 4:
//         console.log("Thursday")
//         break;
//     case 5:
//         console.log ("Friday")
//         break;
//     case 6:
//         console.log ("Saturday")
//     default:
//         console.log ("Error: Day of the week is not valid")
// }
// Challenge 1:
// Create a prompt and ask user for first favorite color
// Create a prompt and ask user for second favorite color
// Use a ternary operator to print out "you chose my favorite colors" if user selected blue for first favorite color AND grey for second favorite color or else print "better luck next time"

// const firstFavColor = prompt ("What is your fav color?")
// const secondFavColor = prompt ("whats your second fav color?")
// const answer = firstFavColor === "blue" && secondFavColor === "grey" ? "You chose my fav colors" : "better luck next time";
// console.log("🚀 ~ file: script.js ~ line 64 ~ answer", answer)

// Write a arrow function that accepts a password (string)
// Validate the password using the following rules:
// Must be 6-20 characters long
// Must start with a letter
// Alert the user if their password has been accepted or why their password was rejected

// const validatePassword =(str)=>{
// const lengthofstr = str.length
// const onlyLetters = /^[a-zA-Z]+$/;
// if (lengthofstr >=6 && lengthofstr <=20) {
//     if (onlyLetters.test(str.charAt(0))) {
//     console.log (`password has been accepted`)
// }
// else {
//     console.log (`password rejected, must start with a letter`)
// }}
// else {
//     console.log (`password was rejected`)
// }

// console.log("🚀 ~ file: script.js ~ line 74 ~ validatePassword ~ lengthofstr", lengthofstr)

// }
// console.log("🚀 ~ file: script.js ~ line 76 ~ validatePassword ~ validatePassword", validatePassword("sadsfdsafafdsaffsy"))

// Bonus:
// Your task is to create a function that does four basic mathematical operations.
// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.
// Examples(Operator, value1, value2) --> output
// ('+', 4, 7) --> 11
// ('-', 15, 18) --> -3
// ('*', 5, 5) --> 25
// ('/', 49, 7) --> 7

// const calculations = (operation, value1, value2)=> {
// if ('+' === operation ){
//     return value1 + value2
// }
// else if ('-' === operation) {
//     return value1 - value2
// }
// else if ('*' === operation) {
//     return value1 * value2
// }
// else if ('/' === operation) {
//     return value1 / value2
// }
// else (console.log ("invalid operation"))
// }
// calculations('+', 10, 10)
// console.log("🚀 ~ file: script.js ~ line 117 ~ calculations('+', 6, 10)", calculations('/', 15, 5))

// Read the Pokemon API
// Create an async function that:
// Makes a request to the Pokemon API using fetch. Fetch a specific Pokemon other than Ditto
// Stores this request into a variable
// Makes sure we use .json()
// Display the name of the Pokemon that you chose in an alert

// const getPokemon = async (pokemonName) => {
//     const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
//     const data = await response.json()
//     console.log("🚀 ~ file: script.js ~ line 128 ~ getPokemon ~ response", data)

// }
//     console.log(getPokemon(`Ditto`));

// const printHelloWorld = (firstName, lastName) => {
// const hey = `Hello World ${firstName} ${lastName}`
// if (firstName === `Mustafa`) {
// console.log(hey);
// } else {
//     console.log("Try again");
// }
// }
// console.log(printHelloWorld(`Mustafa`, `Ahmed`));

// Read the Pokemon API
// Create an async function that:
// Makes a request to the Pokemon API using fetch. Fetch a specific Pokemon other than Ditto
// Stores this request into a variable
// Makes sure we use .json()
// Display the name of the Pokemon that you chose in an alert

// const getPokemon = async (pokemonName) => {
//     const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
//     const data = await response.json()
//     console.log("🚀 ~ file: script.js ~ line 128 ~ getPokemon ~ response", data)

//     const nameOfPokemon = document.createElement("h1")
//     nameOfPokemon.innerHTML = data.name
//     const image = document.createElement("img")
//     image.src = "https://picsum.photos/id/1025/600/400"
//     document.body.appendChild(nameOfPokemon)
//     document.body.appendChild(image)
// }
// //     console.log(getPokemon(`Ditto`));

// const para = document.createElement("button");
// para.innerHTML="Test";
// para.id="test"
// console.log(para);
// document.body.appendChild(para)
// document.getElementById("Test").addEventListener("click", ()=>getPokemon(`ditto`) )

// Let's say you're a car manufacturer and need to create many cars to build your inventory
// Create a class called "car"
// Add some properties like "make", "model", "year", "color", etc
// Use your car class to construct 4 (or more) different cars
// console log your code so you can see the results!
// BONUS: Display the details for each of your cars in your HTML

// let Car = class {
//     constructor (make, model, year, color) {
//         this.make = make
//         this.model = model
//         this.year = year
//         this.color = color
//     }
// }
// const vicsCar = new Car("honda", "civic", "2004", "black")
// console.log(vicsCar.make);
// const mustafaCar = new Car("toyota", "camry", "2009", "white")
// console.log(mustafaCar.model)
// console.log(mustafaCar)
// const vicsCarMake = document.createElement("h1")
// vicsCarMake.innerHTML = vicsCar.make
//  const vicsCarModel = document.createElement("p")
// vicsCarModel.innerHTML = vicsCar.model
// const vicsCarYear = document.createElement("p")
// vicsCarYear.innerHTML = vicsCar.year
// document.body.appendChild(vicsCarMake)
// document.body.appendChild(vicsCarModel)
// document.body.appendChild(vicsCarYear)

// Write a JS function to check whether in input is in an array or not
// Write a JS function to clone an array
// Write a simple JavaScript program to join all elements of the following array into a string.
// const myColor = ["Red", "Green", "White", "Black"];
//   Sample Output : -4,-3,1,2,3,5,6,7,8.
// const arr = [3, 8, 7, 6, 5, -4, 3, 2, 1];
// Write a JS function to compute the sum and product of an array of integers. */
const array = [1, 2, 3];
const isInAnArray = (input) => {
  return array.includes(input);
};
console.log(isInAnArray(3));

const myColor1 = ["Red", 76, ["this", "that"], "Black"];

const myColor = (colors) => {
  return colors.join("");
};
console.log(myColor(myColor1));

const arr = [-3, 8, 7, 6, 5, -4, 3, 2, 1];
arr.sort();
console.log(arr);
