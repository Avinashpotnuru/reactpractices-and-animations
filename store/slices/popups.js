import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
  displayName: "",
  backEndData: null,
};

const popupSlice = createSlice({
  name: "popups",
  initialState: initialState,
  reducers: {
    addNumber: (state, action) => {
      state.count += 1;
    },
    minusNumber: (state, action) => {
      state.count -= 1;
    },

    displayNameHandler: (state, action) => {
      state.displayName = action.payload;
    },
    backEndDataHandler: (state, action) => {
      state.backEndData = action.payload;
    },
  },
});

export const {
  addNumber,
  minusNumber,
  displayNameHandler,
  backEndDataHandler,
} = popupSlice.actions;

export default popupSlice.reducer;
