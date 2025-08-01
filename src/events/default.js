export default function defaultHandler(socket, event, data) {
    
    console.log(`Unhandled event: ${event}`, data);

    socket.broadcast.emit(data);
}