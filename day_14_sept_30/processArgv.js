// let [a,b] = process.argv.slice(2);

// if (a && b)
// {
//     console.log(`Addition of ${a} & ${b} is ${+a + +b}`);
// }
// else{
//     console.log("Please pass the number");
// }

///////////////////////////////////////////////////////////////////////

// // Always log at the start to ensure the file is running
// console.log("Script started...");

// let [a, b] = process.argv.slice(2);

// // Check if arguments are provided
// if (!a || !b) {
//     console.log("Please pass two numbers as arguments!");
//     process.exit(1); // Exit early if arguments are missing
// }

// // Convert to numbers and check for valid numeric input
// a = Number(a);
// b = Number(b);

// if (isNaN(a) || isNaN(b)) {
//     console.log("Both arguments must be valid numbers!");
//     process.exit(1);
// }

// // Perform addition
// console.log(`Addition of ${a} & ${b} is ${a + b}`);



// Tip: Use process.exit(1) whenever you detect a problem that should stop the script immediately.


let [a,b] = process.argv.slice(2);

if(a && b)
{
    if(process.argv[4] === '+')
    {
        console.log(`Addition of ${a} & ${b} is ${+a + +b}`);
    }
    if(process.argv[4] === '*')
    {
        console.log(`Multiplication of ${a} & ${b} is ${+a * +b}`);
    }
    if(process.argv[4] === '/')
    {
        console.log(`Division of ${a} & ${b} is ${+a / +b}`);
    }
    if(process.argv[4] === '-')
    {
        console.log(`Subtraction of ${a} & ${b} is ${+a - +b}`);
    }
}
else{
    console.log("Please pass the numbers");
}


