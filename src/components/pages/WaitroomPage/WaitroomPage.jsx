import Roomlists from './components/Roomlist';
import Navigation from './components/Navigation';
import './WaitingroomPage.scss';

const Waitingroom = () => {
  return (
    <div className='waitingroom_main'>
      <div className="contents_container">
        <div className='waitingroom_title'><p>대기실</p></div>
        <Navigation />
        <Roomlists />
      </div>
    </div>
  );
};

export default Waitingroom;
