// Import readline-sync
const readline = require("readline-sync");

// Ask for the user's name
let userName = readline.question("What is your name? ");

// Greet the user
console.log(`\nHello, ${userName}! Let's test your knowledge of Values, Data Types, and Operations.\n`);

// Ask 5 questions
let favoriteDataType = readline.question(
  "1. What is your favorite JavaScript data type? "
);

let numberValue = Number(
  readline.question(
    "2. Enter a number: "
  )
);

let booleanValue = readline.question(
  "3. What value represents 'true' or 'false' in JavaScript? "
);

let additionOperator = readline.question(
  "4. Which operator is used for addition in JavaScript? "
);

let stringValue = readline.question(
  "5. What data type is used to store text? "
);

// Print the user's answers
console.log("\n----- Your Answers -----");
console.log(`Name: ${userName}`);
console.log(`Favorite Data Type: ${favoriteDataType}`);
console.log(`Number Entered: ${numberValue}`);
console.log(`Boolean Answer: ${booleanValue}`);
console.log(`Addition Operator: ${additionOperator}`);
console.log(`Text Data Type: ${stringValue}`);
