import io from 'socket.io-client';

const socketio = io("http://localhost:8080");

export default socketio;