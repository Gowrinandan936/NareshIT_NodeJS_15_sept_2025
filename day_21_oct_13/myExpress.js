const express = require('express');

const server = express();

let employees = [
    { "eId": 101, "name": "sanjay", "sal": 5000, "gender": "male" },
    { "eId": 104, "name": "geeta", "sal": 8000, "gender": "female" },
    { "eId": 103, "name": "sameer", "sal": 7000, "gender": "male" },
    { "eId": 102, "name": "sita", "sal": 9000, "gender": "female" },
    { "eId": 105, "name": "deepak", "sal": 8000, "gender": "male" }
];


server.get('/employees', (req,res)=>{
	res.json(employees);
});

server.get('/employees/:id', (req, res) => {
	const empID = parseInt(req.params.id);
	const employee = employees.find(emp => emp.eID === empID);

	if(employee)
	{
		res.json(employee);
	}
	else
	{
		res.status(404).json({ message : 'Employee not found' });
	}

});

server.listen(8000, ()=>{
	console.log("Server is running at port 8000");
});
