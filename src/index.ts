import { Server } from "socket.io";

const io = new Server({ /* options */ });

console.log('Lobby server ready')
io.on("connection", (socket) => {
  console.log("Connected to:", socket.id); // x8WIv7-mJelg7on_ALbx
  
  socket.emit("handshake", socket.id)
  
  socket.on("broadcastMessage", (message) => {
    socket.emit("broadcastMessage", socket.id, message)
  })
})



io.listen(3000);