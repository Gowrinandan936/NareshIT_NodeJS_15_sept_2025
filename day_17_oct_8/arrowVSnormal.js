console.log('Module level :', this);

function f1()
{
	console.log(' I am f1.......');
	console.log(this); // this = global
	console.log(globalThis); 	// globalThis = global
}

let f2 = () => {
	console.log('I am f2......');
	console.log(this);	// this = { }
	console.log(globalThis);	// globalThis = global
}

f1();
f2();
