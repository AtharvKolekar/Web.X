const express = require('express');
const app = express();

const http = require('http').createServer(app);
const io = require('socket.io')(http);
const path = require('path');

app.use(express.static(__dirname));

io.on('connection', (socket)=> {
    let username = "";

    socket.on('new user', (name) => {
        username = name;
    });

    socket.on('chat msg', (msg) => {
        io.emit('chat msg', {
            user : msg.user,
            text : msg.text
        });
    });

    socket.on('dissconect', () => {
        console.log(`${username} disconnected`);
    })
});

const PORT = 3000;
http.listen(PORT, () => {
    console.log("server is woring on port 3000");
});
