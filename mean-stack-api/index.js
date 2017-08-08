var express = require('express');
var app = express();

app.get('/', function(req, res) {
    res.send('Hello There');
})

var server = app.listen(3000, function() {
console.log('Server running at http://127.0.0.1:3000');
});