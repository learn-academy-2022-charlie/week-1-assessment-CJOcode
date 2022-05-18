// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Pseudo coding is required.

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in any two strings and returns the string with more characters. Use the two sets of test variables provided.

// Set one:
const fruit1 = "apple"
const fruit2 = "banana"

// Set two:
const fruit3 = "cherry"
const fruit4 = "kiwi"


// --------------------1) Create a function that takes in any given number and determines if the number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below. Expected output: "42 is below boiling point", "350 is above boiling point", "212 is at boiling point"




const temp1 = 42
const temp2 = 350
const temp3 = 212

// create a function boilingPoint
 // function takes in one argument
  // arguements named: above, equal, and below
// create a condition that determines whether the tempurature is above, below, or at boiling point
 // if the temp is above 212 
  // return above 
 // is temp is equal to 212
  // return equal
 // else 
  // return below

const boilingPoint = (temp) => {
    if (temp > 212){
        return `${temp} is above boiling point`
    } else if (temp === 212){
        return `${temp} is at boiling point`
    } else {
        return `${temp} is below boiling point`
    }
}

// use function invocation in the console.log to input each tempurature

console.log(boilingPoint(temp1))
console.log(boilingPoint(temp2))
console.log(boilingPoint(temp3))

// Outputs:
// 42 is below boiling point
// 350 is above boiling point
// 212 is at boiling point




// --------------------2) Create the code that will combine the two arrays and return the length using the variables provided below. Expected output: 10




const myNumbers1 = [3, 7, 0, 36, -9]
const myNumbers2 = [8, -7, 42, 9, 13]

// create a variable numbersCombined
    // combine the two arrays with the accessor .concat
// console.log numbersCombined using the informational command .length

let numbersCombined = myNumbers1.concat(myNumbers2)

console.log(numbersCombined.length)

// output: 10




// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below. Expected output: "2202 eilrahC"




const currentCohort = "Charlie 2022"

// create a function called reverseCohort
    // inside the code block start by turning the string into an array .split
    // reverse the array using mutator .reverse
    // turn the array back into a string .join
    // return the last variable 
// console.log using function invocation

const reverseCohort = (string) => {
    
    let arrayCohort = string.split("")

    let reverseArray = arrayCohort.reverse()

    let revStringCohort = reverseArray.join("")

    return revStringCohort
}

console.log(reverseCohort(currentCohort))

// output: 2202 eilrahC




// --------------------4) Create a statement that will evaluate whether each number in an array is even or odd. Use the test variable provided below. Expected output: "odd" "even" "odd" "even" "odd" "even"




const myArray = [13, 34, 5, 10, 27, 42]

// create a for loop that stops at the end of the array using .length
// inside block create a conditional statement using an if statement 
    // if statement checks whether the index is even % 2 === 0
        // if condition is met consol.log "even"
            // else console.log "odd"

for(let i=0; i < myArray.length; i++){
    if (myArray[i] % 2 === 0){
        console.log("even") 
    } else {
        console.log("odd")
    }
}

// output: odd, even, odd, even, odd, even




// --------------------5) Create a function that takes in a set of any two numbers and subtracts the smaller number from the larger number using the sets of test variables provided below. Expected output: 42, 3




// Set one:
const number1 = 58
const number2 = 100

// Set two:
const number3 = 27
const number4 = 24

// create a function subtractor
    // if parameter1 < parameter2 return parameter2 - parameter1
    // else return parameter1 - parameter2
//console.log using function invocation

const subtractor = (num1, num2) => {
    if (num1 < num2) {
        return num2 - num1
    } else {
        return num1 - num2
    }
} 

console.log(subtractor(number1, number2))
console.log(subtractor(number3, number4))

// output: 42, 3