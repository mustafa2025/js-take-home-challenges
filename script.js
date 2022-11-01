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

const birthday = new Date('August 21, 1975 23:15:30');
const dayOfWeek = birthday.getDay() 
console.log(dayOfWeek);
console.log(birthday)
switch (dayOfWeek) {
    case 0:
        console.log("Sunday")
        break;
    case 1:
        console.log("Monday")
        break;
    case 2: 
        console.log("Tuesday")
        break;
    case 3:
        console.log("Wednesday")
        break;
    case 4:
        console.log("Thursday")
        break;
    case 5:
        console.log ("Friday")
        break;
    case 6:
        console.log ("Saturday")
    default:
        console.log ("Error: Day of the week is not valid")
}

