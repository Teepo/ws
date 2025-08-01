export default function(socket) {
    socket.broadcast.emit('mirroring/clear');
};