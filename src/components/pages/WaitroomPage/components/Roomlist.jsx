import { useState, useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { addRoom, removeRoom } from '../../../../store';

const Roomlists = () => {
  // const [inputValue, setInputValue] = useState('');
  // const roomlist = useSelector((state) => state.roomlist);
  // const dispatch = useDispatch();

  // const handleAddItem = () => {
  //   if (inputValue.trim() !== '') {
  //     dispatch(addRoom({ id: Date.now(), name: inputValue }));
  //     setInputValue('');

  //   }
  // };

  // const handleRemoveItem = (id) => {
  //   dispatch(removeRoom(id));
  // };
  const [roomlist, setRoomlist] = useState([]);
  const getRoomlist = async () => {
    const json = await (await fetch('#')).json();
    setRoomlist(json);
  };
  useEffect(() => {
    getRoomlist();
  }, [setRoomlist]);
  return (
    // index는 나중에 roomid로 변경해야할듯
    <div>
      {roomlist.map((room, index) => (
        <div className='roomlist_box' key={index}>
          <div className='roomlist_leftside'>
              <div className='mode_img'></div>
              <h1 className='mode_name'></h1>
              <h1 className='room_name'></h1>
          </div>
          <div className='roomlist_rightside'>
              <h1 className='private_img'></h1>
              <h1 className='number_participants'></h1>
              <div className='enter_room_btn'></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Roomlists;
