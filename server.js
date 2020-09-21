var express = require('express');
var app = express();

var db = require("./mydb.json");

const userinfo = {
    id: "123",
    name: "Isabel"
}

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.get('/api/test', function (req, res) {
    res.send("test")
})

app.post('/api/users', function (req, res) {
    const newuser = req.body.user
    res.json(newuser.name)
})

app.listen(4000, function () {
    console.log('Example app listening on port 4000!');
});