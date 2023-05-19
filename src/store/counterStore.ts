import { createSlice } from '@reduxjs/toolkit';

export interface ICounterSlice {
  value: number
}

const initialState: ICounterSlice = {
  value: 0,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    incremented: (state) => ({ value: state.value + 1 }),
    decremented: (state) => {
      if (!state.value) return state;
      return { value: state.value - 1 };
    },
  },
});

export const { incremented, decremented } = counterSlice.actions;
export default counterSlice.reducer;
