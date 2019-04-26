const fs = require('fs');
const http = require('http');

http.get('http://localhost:3000/api/users', (response) => {
    response.pipe(fs.createWriteStream('./files/robots2.txt'));
})

//clconsole.log(request);
