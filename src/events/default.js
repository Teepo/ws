export default function defaultHandler(socket, eventName, data) {
    
    console.log(`Unhandled event: ${eventName}`, data);

    socket.broadcast.emit(eventName, data);
}