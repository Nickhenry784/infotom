import { createSlice, nanoid } from '@reduxjs/toolkit'

const shrimp = createSlice({
  name: 'shrimp',
  initialState: [],
  reducers: {
    addItems: {
      reducer: (state, action) => {
        const index = state.findIndex((e) => e.id === action.payload.id);
        state.splice(index, 1);
        state.splice(index, 0, action.payload);
      },
    },
    restoreArray: {
      reducer: (state, action) => {
        state.splice(0, state.length);
        state.push({id: 1, el1: 0 , el2: 0, el3: 0},
          {id: 2, el1: 0 , el2: 0, el3: 0},
          {id: 3, el1: 0 , el2: 0, el3: 0},
          {id: 4, el1: 0 , el2: 0, el3: 0},
          {id: 5, el1: 0 , el2: 0, el3: 0},
          {id: 6, el1: 0 , el2: 0, el3: 0},
          {id: 7, el1: 0 , el2: 0, el3: 0},
          {id: 8, el1: 0 , el2: 0, el3: 0},
          {id: 9, el1: 0 , el2: 0, el3: 0},
          {id: 10, el1: 0 , el2: 0, el3: 0},
          {id: 11, el1: 0 , el2: 0, el3: 0},
          {id: 12, el1: 0 , el2: 0, el3: 0},);
      }
    }
  },
})

export const {addItems, restoreArray} = shrimp.actions;

export default shrimp.reducer;