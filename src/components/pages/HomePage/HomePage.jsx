import { useState } from 'react';
import io from 'socket.io-client';
import Chat from '../GamePage/ChatPage';
import './HomePage.scss';
import Game from '../GamePage/GamePage';
import sticker01 from '../../../assets/images/icons/sticker_01.png';
import sticker02 from '../../../assets/images/icons/sticker_02.png';
import sticker03 from '../../../assets/images/icons/sticker_03.png';
import sticker04 from '../../../assets/images/icons/sticker_04.png';
import sticker05 from '../../../assets/images/icons/sticker_08.png';
import sticker06 from '../../../assets/images/icons/sticker_10.png';

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
        <div className="game_container">
          <strong>Nice Catch</strong>
          <div className="participants">
            <ul>
              <li>
                <div className="profile">
                  <img src={sticker01} />
                  <em>1</em>
                </div>
                <p>yuna</p>
              </li>
              <li>
                <div className="profile">
                  <img src={sticker02} />
                  <em>3</em>
                </div>
                <p>kes</p>
              </li>
              <li>
                <div className="profile">
                  <img src={sticker03} />
                  <em>6</em>
                </div>
                <p>joy</p>
              </li>
              <li>
                <div className="profile">
                  <img src={sticker04} />
                  <em>0</em>
                </div>
                <p>hyub</p>
              </li>
              <li>
                <div className="profile">
                  <img src={sticker05} />
                  <em>8</em>
                </div>
                <p>gamja</p>
              </li>
              <li>
                <div className="profile">
                  <img src={sticker06} />
                  <em>4</em>
                </div>
                <p>ggomi</p>
              </li>
            </ul>
          </div>
          <div className="game_box">
            <Game />
            <Chat socket={socket} username={username} room={room} />
          </div>
        </div>
      )}
    </div>
  );
};
export default Home;
