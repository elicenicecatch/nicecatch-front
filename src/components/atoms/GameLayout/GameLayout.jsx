import Chat from '../../pages/ChatPage/ChatPage';
import Draw from '../../pages/DrawPage/DrawPage';
import Profile from './Profile';

const GameLayout = ({ socket, username, room, children }) => {
  return (
    <div className="game_container">
      <strong>Nice Catch</strong>
      <div className="participants">
        <Profile socket={socket} username={username} room={room} />
      </div>
      {children}
    </div>
  );
};

export default GameLayout;
