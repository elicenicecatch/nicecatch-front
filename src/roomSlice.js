import { createSlice, configureStore  } from '@reduxjs/toolkit'

const initialState = {
    roomlist: [],
}

export const roomSlice = createSlice({
    name: 'roomlist',
    initialState,
    reducers: {
        addRoom: (state, action) => {
          state.items.push(action.payload);
        },
        removeRoom: (state, action) => {
          state.items = state.items.filter((item) => item.id !== action.payload);
        },
      },
    
  })
  

  export const { addRoom, removeRoom } = counterSlice.actions
  
  const store = configureStore({
    reducer: roomSlice.reducer,
  });

  export default store;