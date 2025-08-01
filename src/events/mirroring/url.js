export default function(socket, data) {
    socket.broadcast.emit(data);
};