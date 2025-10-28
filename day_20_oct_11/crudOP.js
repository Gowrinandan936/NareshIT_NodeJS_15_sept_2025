const http = require('http');

let employees = [
    {"eId": 101, "name": "John Doe", "salary": 5000, "gender": "Male"},
    {"eId": 102, "name": "Jane Smith", "salary": 8000, "gender": "Female"  },
    {"eId": 103, "name": "Michael Johnson", "salary": 7000, "gender": "Male"  },
    {"eId": 104, "name": "Sarah Brown", "salary": 9000, "gender": "Female"   },
    {"eId": 105, "name": "David Garcia", "salary": 8000, "gender": "Male"   },
]


let server = http.createServer((req, res) => {

    console.log("API that I called now :-",req.url);
    
    res.setHeader('Content-Type', 'application/json');
    if(req.url === '/users' && req.method === 'GET')
    {
	    res.end(JSON.stringify(employees));
    }
    else if(req.url.startsWith('/users/') && req.method === 'GET'){
        let empID = parseInt(req.url.split('/')[2]);
        const employee = employees.find(emp => emp.eId === empID);

        if(employee){
            res.end(JSON.stringify(employee))
        }
        else{
            res.writeHead(404);
            res.end(JSON.stringify({message : 'Employee not found'}));
        }
    }
    else if(req.url === '/users' && req.method === 'POST')
    {
        res.end('This is the POST API');
    }
});

server.listen(8080, () => {
    console.log('Server started at port 8080');
});

