const express = require('express');

const server = express();

server.use(express.json());

let employees = [
    { "eId": 101, "name": "sanjay", "sal": 5000, "gender": "male" },
    { "eId": 104, "name": "geeta", "sal": 8000, "gender": "female" },
    { "eId": 103, "name": "sameer", "sal": 7000, "gender": "male" },
    { "eId": 102, "name": "sita", "sal": 9000, "gender": "female" },
    { "eId": 105, "name": "deepak", "sal": 8000, "gender": "male" }
];


server.get('/emp', (req,res)=>{
    res.json(employees);
});

server.get('/emp/:id', (req,res)=>{
    const empID = parseInt(req.params.id);
    const employee = employees.find(emp=>emp.eId === empID);
    if(!employee)
    {
        res.status(404).json({message :'Employee not found'});
    }
    else{
        res.json(employee);
    }
});

server.get('/emp', (req,res)=>{
    const empID = parseInt(req.query.id);
    const employee = employees.find(emp=>emp.eId === empID);
    if(!employee)
    {
        res.status(404).json({message :'Employee not found'});
    }
    else{
        res.json(employee);
    }
});

// server.get('/emp', (req, res) => {
//     const empId = parseInt(req.query.id);
//     const empName = req.query.name; // ?name=sanjay
//     const employeeID = employees.find(emp => emp.eId === empId);
//     const employee = employees.find(emp => emp.name === empName);

//     if (employee) {
//         res.json(employee);
//     } 
//     else if(employeeID){
//         res.json(employeeID);
//     }
//     else {
//         res.status(404).json({ message: 'Employee not found' });
//     }
// });

server.post("/data",(req,res)=>{
    const {method, ip, body} = req;

    console.log(`Method :- ${req.method}, ip ${req.ip}, body :- ${JSON.stringify(req.body)}`);

    res.json({method, ip, body});

});



server.listen(5500, ()=>{
    console.log('Server started at port 5500');
});



