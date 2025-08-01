export default function(socket, data) {
    socket.broadcast.emit('mirroring/media', data);
};