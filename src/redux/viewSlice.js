import { createSlice, nanoid } from '@reduxjs/toolkit'

const view = createSlice({
  name: 'view',
  initialState: [],
  reducers: {
    addArray: {
      reducer: (state, action) => {
        action.payload.map((e) => {
          state.push(e);
        });
        console.log("HELO", state);
      },
    },
    restore: {
      reducer: (state, action) => {
        state.splice(0, state.length);
      }
    }
  },
})

export const {addArray, restore} = view.actions;

export default view.reducer;