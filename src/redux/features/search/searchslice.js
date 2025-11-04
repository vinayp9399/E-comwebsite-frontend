import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  search: ''
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    addsearch: (state, action) => {
      state.search = action.payload;
    },
  },
});

export const { addsearch } = searchSlice.actions;
export default searchSlice.reducer;
