import Chat from '../../pages/ChatPage/ChatPage';
import Draw from '../../pages/DrawPage/DrawPage';

import sticker01 from '../../../assets/images/icons/sticker_01.png';
import sticker02 from '../../../assets/images/icons/sticker_02.png';
import sticker03 from '../../../assets/images/icons/sticker_03.png';
import sticker04 from '../../../assets/images/icons/sticker_04.png';
import sticker05 from '../../../assets/images/icons/sticker_08.png';
import sticker06 from '../../../assets/images/icons/sticker_10.png';

const GameLayout = ({ socket, username, room }) => {
  return (
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
        <Draw />
        <Chat socket={socket} username={username} room={room} />
      </div>
    </div>
  );
};

export default GameLayout;
