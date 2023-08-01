import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialState = {
  roomlist: [],
};

export const roomSlice = createSlice({
  name: 'roomlist',
  initialState,
  reducers: {
    addRoom: (state, action) => {
      state.roomlist.push(action.payload);
    },
    removeRoom: (state, action) => {
      state.roomlist = state.roomlist.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addRoom, removeRoom } = roomSlice.actions;

const store = configureStore({
  reducer: roomSlice.reducer,
});

export default store;
