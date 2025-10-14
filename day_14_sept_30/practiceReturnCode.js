function checkNumber() {
    let a = Number(process.argv[2]);
    let b = Number(process.argv[3]);

    if (!a || isNaN(a)) {
        console.log("Invalid input");
        return; // stops here. So return will stops the execution of current function immediately.
    }

    console.log("Valid input, proceed with addition");
}

checkNumber();
