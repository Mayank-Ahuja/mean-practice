var express = require("express");
var app = express();
app.use(express.static('public'));

var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

app.post('/register', function (request, response) {
    var dbOperations = require("./crudoperation");
    var data = request.body;
    console.log("DATA is      ", data);
    dbOperations.addUser(data, response);

});
app.post('/login', function (request, response) {
    var dbOperations = require("./crudoperation");
    var data = request.body;
    console.log("Data is    ", data);
    dbOperations.findUser(data, response);
});

app.listen(1234, function () {
    console.log("Server Start...");
});