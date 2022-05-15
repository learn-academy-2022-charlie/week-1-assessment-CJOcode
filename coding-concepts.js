// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
const colors = ["tangerine", "magenta", "lilac", "daffodil"]
// console.log(colors.push("indigo"))

// a) Your answer:
// b) Verify and explain:


// --------------------1) What will this log?

const cohort = "LEARN 2022"
 //console.log(cohort.length)

// a) Your answer: This will log the length of the string: 10
// b) Verify and explain: I was correct, .length is an informational command that will give back the number of characters in a string, the space 
// also counts as a character.


// --------------------2) What will this log?

const greeting = "Hello World!"
 //console.log(greeting[4])

// a) Your answer: This will log the letter o
// b) Verify and explain: I was correct, this logged o becuase [4] is looking for the character that is at index number 4 with H starting as number 0


// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
 //console.log(languages[index])

// a) Your answer: this will log "Ruby".
// b) Verify and explain: This is similar to the code above but instead of placing a number in the [] a variable was used that equaled the index 1. 
// However, Instead of counting the letters as the index's this time, it counted each string individualy as a single index becuase they are seperated 
// by the commas inside of an array.


// --------------------4) What will this log?

const weekendDays = ["saturday", "sunday"]
 //console.log(weekendDays.toUpperCase())

// a) Your answer: This will capitalize each string.
// b) Verify and explain: I was wrong, becuase the strings where inside of an array it did not upper case anything and created an error.


// --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean"]
 console.log(typeof dataTypes.length)

// a) Your answer: This should not log anything and output an error becuase of the typeof inside of the parantheses
// b) Verify and explain: I was wrong, typeof is an operator that returns the type of data being outputed. So, as .length would normally 
// have an output of 3, typeof reconizes that and changes the output, displaying what type of data 3 is.
