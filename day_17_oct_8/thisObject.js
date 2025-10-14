let user = {
	firstName : 'Virat',
	lastName : 'Kohli',
	
	fullName1 : function () {
        console.log("In a normal function :- ",this);
		console.log(this.firstName, this.lastName); // this = user
	},

	fullName2 : () => {
        console.log("In an arrow function :- ",this);
		console.log(this.firstName, this.lastName); // this = {}
	}
}

user.fullName1();
user.fullName2();
