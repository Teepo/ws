export default function(socket, data, callback) {

    const { } = data;

    socket.broadcast.emit(eventType, data);

    callback(data);
};