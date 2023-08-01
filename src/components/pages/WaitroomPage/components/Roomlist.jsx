import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addRoom, removeRoom } from '../../../../store';

const Roomlists = () => {
  const [inputValue, setInputValue] = useState('');
  const roomlist = useSelector((state) => state.roomlist);
  const dispatch = useDispatch();

  const handleAddItem = () => {
    if (inputValue.trim() !== '') {
      dispatch(addRoom({ id: Date.now(), name: inputValue }));
      setInputValue('');
      
    }
  };

  const handleRemoveItem = (id) => {
    dispatch(removeRoom(id));
  };
  console.log(roomlist);
  return (
    <div>
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={handleAddItem}>Add Item</button>
      </div>
      <ul>
       
      </ul>
    </div>
  );
};

export default Roomlists;
