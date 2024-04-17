import { Server } from "socket.io";

const io = new Server({ /* options */ });

console.log('NO')
io.on("connection", (socket) => {
  // ...
});

io.listen(3000);