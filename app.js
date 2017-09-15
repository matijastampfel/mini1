const express = require('express');
const app = express();
const pug = require('pug');
const routes = require('./routes.js');
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.set('view engine', 'pug');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/javascript'));
app.use(express.static(__dirname + '/public'));
app.use('/', routes);

//step 1 connects the server to the client
io.on('connection', (socket) => {
    console.log("A user connected");
    socket.on('disconnect',() => {
        console.log("Now disconnected.");
    });
// end of step 1 
    // step 2. We print out the event in the browser and in the console
    socket.on('submit', function(votes) {
        console.log(votes);
        // we emit the 'vote' event 
        io.emit('submit', votes);
    });
    // end of step 2
});

http.listen(3001, () => {
    console.log ("Up and running at 3001");
});