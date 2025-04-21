import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedItems: [], // Store multiple items
};

const textSlice = createSlice({
  name: "text",
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.selectedItems.push(action.payload); // Adding the new item
    },
  },
});

export const { addItem } = textSlice.actions;
export default textSlice.reducer;
