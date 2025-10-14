const minimist = require('minimist');

let args = minimist(process.argv.slice(2));

let a = Number(args.a);
let b = Number(args.b);
let op = args.op;


function checkNumber()
{

    if(!a || !b || isNaN(a) || isNaN(b))
    {
        console.log("Please keep numbers.....");
        
    }

    switch(op) {

        case '+' :
            console.log(`Addition of ${a} & ${b} is ${a + b}`);
            break;

        case '-' :
            console.log(`Subtraction of ${a} & ${b} is ${a - b}`);
            break;

         case '*' :
            console.log(`Multiplication of ${a} & ${b} is ${a * b}`);
            break;

         case '/' :

            if( b === 0)
            {
                console.log("Division by zero is not allowed");
            }
            else
            {
                console.log(`Division of ${a} & ${b} is ${a / b}`);
            }
            break;
            
        default :
            console.log("Please provide valid the operations..");
    }
}


checkNumber();