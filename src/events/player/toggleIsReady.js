import { rooms } from '../../store/index.js';

export default function(socket, data, callback) {

    const { playerId, roomId, value } = data;

    const room = rooms.get(roomId);

    console.log('toggleIsReady', room);

    if (!room) {
        const response = { error : new RoomNotExistError };
        socket.emit('player/toggleIsReady', response);
        return callback(response);
    }

    const player = room.getPlayerById(playerId);

    console.log('toggleIsReady', player);

    try {
        player.isReady = value ?? !player.isReady;
    }
    catch(e) {
        console.error('Try to update ready status', player);
    }

    const response = { player };

    socket.emit('player/toggleIsReady', response);
    socket.broadcast.emit('player/toggleIsReady', response);
    return callback(response);
};