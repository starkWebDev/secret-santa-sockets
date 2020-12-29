const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http, {
    cors: {
        origin: false
    }
});

io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('message', ({name, message}) => {
        io.emit('message', {name, message});
    });
  });

http.listen(4000, () => {
  console.log('listening on *:4000');
});