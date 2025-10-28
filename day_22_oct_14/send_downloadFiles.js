const express = require('express');

const path = require('path');

const server = express();

let employees = [];


server.get('/',(req,res)=>{

    res.send(`
        <p>Click the below two links to see the differences between sendFile & downloadFile :-</p>

        <a href="sendFileDemo">sendFile</a> <br>
        <a href="downloadFileDemo">downloadFile</a>

        `);
});

server.get('/sendFileDemo',(req,res)=>{

    res.sendFile(path.resolve(__dirname,'../assests/node.js-mage.jpg')); // to open and see the file 

});

server.get('/downloadFileDemo',(req,res)=>{

    res.download(path.resolve(__dirname,'../assests/node.js-mage.jpg')); // to download the file

});

server.get('/emp',(req,res)=>{

    res.json(employees);

});

server.post('/empPOST',express.json(), (req,res)=>{

    const newEmp = req.body;

    employees.unshift(newEmp);

    // res.status(201).json({data:newEmp, message : 'Employee created successfully'});

     res.status(201).json(newEmp);

    //res.status(201);

    console.log(newEmp);

})

server.listen(45000, (req,res)=>{

    console.log("Server starts at port 45000");

})
