const fs = require('fs/promises');

let resp = fs.writeFile('my_file.txt', 'Hello, Node.js!', {
    encoding: 'utf8',
    mode: 0o666,
    flag: 'w'
});

console.log(resp); // undefined

console.log('File created successfully');