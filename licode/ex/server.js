    var N = require('nuve');
    N.API.init("531b26113e74ee30500001", "myKey", "http://localhost:3000/");

    var express = require('express');
    var app = express.createServer();
     
    app.use(express.bodyParser());
    app.configure(function () {
        app.use(express.logger());
        app.use(express.static(__dirname + '/public'));
    });


    app.post('/createRoom/', function(req, res){
     
        N.API.createRoom('myRoom', function(roomID) {
            res.send(roomID);
        }, function (e) {
            console.log('Error: ', e);
        });
    });


    app.get('/getRooms/', function(req, res){
     
        N.API.getRooms(function(rooms) {
            res.send(rooms);
        }, function (e) {
            console.log('Error: ', e);
        });
    });



    app.get('/getUsers/:room', function(req, res){
     
        var room = req.params.room;
        N.API.getUsers(room, function(users) {
            res.send(users);
        }, function (e) {
            console.log('Error: ', e);
        });
    });



    app.post('/createToken/:room', function(req, res){
     
        var room = req.params.room;
        var username = req.body.username;
        var role = req.body.role;
        N.API.createToken(room, username, role, function(token) {
            res.send(token);
        }, function (e) {
            console.log('Error: ', e);
        });
    });

app.listen (80);


