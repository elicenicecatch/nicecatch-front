import { useState } from 'react';
import io from 'socket.io-client';
import Chat from '../GamePage/ChatPage';
import './HomePage.scss';
import Game from '../GamePage/GamePage';

const socket = io.connect('http://localhost:3001');

const Home = () => {
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
        <div className="game_box">
          <Game />
          <Chat socket={socket} username={username} room={room} />
        </div>
      )}
    </div>
  );
};
export default Home;
