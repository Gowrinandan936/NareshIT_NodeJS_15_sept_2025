const fs = require('fs');

fs.watch('demo_1.txt', (event, filename)=>{
    console.log(`File ${filename} has changed. Event: ${event}`);
});






