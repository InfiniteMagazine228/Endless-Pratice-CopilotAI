const express = require("express");
const http = require("http");
const socketIo = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

io.on("connection", socket=>{
  socket.on("playerUpdate", data=>{
    socket.broadcast.emit("playerUpdate", data);
  });
});

server.listen(3000, ()=>console.log("Server running"));
