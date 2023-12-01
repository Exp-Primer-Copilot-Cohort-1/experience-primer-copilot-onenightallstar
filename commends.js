// Create web server

var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){
    console.log('Requesting: ' + req.url);
    if(req.url === '/home' || req.url === '/'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        fs.createReadStream(__dirname + '/index.html').pipe(res);
    } else if(req.url === '/contact'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        fs.createReadStream(__dirname + '/contact.html').pipe(res);
    } else if(req.url === '/api/ninjas'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        var ninjas = [{name: 'ryu', age: 29}, {name: 'yoshi', age: 32}];
        res.end(JSON.stringify(ninjas));
    } else {
        res.writeHead(404, {'Content-Type': 'text/html'});
        fs.createReadStream(__dirname + '/404.html').pipe(res);
    }
});

server.listen(3000, '

