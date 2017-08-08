var express = require('express');
var app = express();
var port = process.env.PORT || 3310;
var router = express.Router();              // get an instance of the express Router

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });   
});
app.listen(port);
console.log('server started on port: ' + port);