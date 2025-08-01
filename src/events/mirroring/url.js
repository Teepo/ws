export default function(socket, data, callback) {

    socket.broadcast.emit(data);

    callback(data);
};