#!/usr/bin/env node

// server.js
//===========

/*
 * This is where all the magic happens.
 * The xway dashboard calls this script as is
 * `node server.js --port <free port number>`
 * after that everyline here will be executed.
 *
 * You can install extra modules thanks to the work
 * of npm. Also you can create a shell script to
 * install any missing system package.
 */

/* Requires node.js libraries */
var express = require('express');
var beast = require('netbeast')
var app = express();

// xyos apps can accept the port to be launched by parameters
var argv = require('minimist')(process.argv.slice(2));
port = argv.port || 31416;

if (isNaN(port)) {
    console.log("Port \"%s\" is not a number.", port);
    process.kill(1);
}

var gameState;

app.use(express.static(__dirname));
var bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

var beastResource = beast.resource;


function isRestart(request) {
    return true;
}

function restartGame() {
    return {
        roundNo: 1,
        points: 0,
        steps: 1
    }
}

function garbagePost(response, request) {
    response.send("You pushed" + request.body.color);
    var colorHue = 10000 % 65535;
    beastResource('lights').set({on: 1, bri: 255, hue: colorHue, sat: 255})
}

function nextStep() {
    gameState.steps++;
}
app.post("/",
    function (request, response) {
        if (isRestart(request)) {
            gameState = restartGame();
            response.send("you have restarted");
        } else {
            nextStep(request);
        }
        response.send("you have " + gameState);
    }
)

var server = app.listen(port, function () {
    console.log('Example app listening at http://%s:%s',
        server.address().address,
        server.address().port);
});





