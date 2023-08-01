import { useState } from 'react';
import io from 'socket.io-client';
import GameLayout from '../../atoms/GameLayout/GameLayout';
import './LoginPage.scss';

const socket = io.connect('http://localhost:3001');

const Login = () => {
  const [username, setUsername] = useState('');
  const [room, setRoom] = useState('');
  const [showChat, setShowChat] = useState(false);

  const joinRoom = () => {
    if (username !== '' && room !== '') {
      socket.emit('join_room', room);
      setShowChat(true);
    }
  };

  return (
    <div className="home">
      {!showChat ? (
        <div className="join_chat_container">
          <h3>Nice Catch</h3>
          <input
            type="text"
            placeholder="닉네임을 입력해주세요"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder="방 아이디를 입력해주세요"
            onChange={(e) => {
              setRoom(e.target.value);
            }}
          />
          <button onClick={joinRoom}>입장하기</button>
        </div>
      ) : (
        <GameLayout socket={socket} username={username} room={room} />
      )}
    </div>
  );
};
export default Login;
