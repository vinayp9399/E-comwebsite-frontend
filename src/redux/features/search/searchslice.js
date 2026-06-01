import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  search: '',
  aiMode: false,   // ← ADDED: tracks whether AI search is active
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    addsearch: (state, action) => {
      state.search = action.payload.text;     // ← now receives { text, aiMode }
      state.aiMode = action.payload.aiMode;
    },
  },
});

export const { addsearch } = searchSlice.actions;
export default searchSlice.reducer;
