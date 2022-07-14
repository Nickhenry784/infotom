import { createSlice, nanoid } from '@reduxjs/toolkit'

const shrimp = createSlice({
  name: 'shrimp',
  initialState: [],
  reducers: {
    addItems: {
      reducer: (state, action) => {
        state.splice(0,state.length);
        for (let index = 0; index < action.payload.length; index++) {
          const element = action.payload[index];
          state.push(element);
        }
      },
    },
  },
})

export const {addItems} = shrimp.actions;

export default shrimp.reducer;