import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mediaType: "",
};

const mediaSlice = createSlice({
  name: "media",
  initialState,
  reducers: {
    setMediaType: (state, action) => {
      state.mediaType = action.payload;
    },
  },
});

export const { setMediaType } = mediaSlice.actions;
export default mediaSlice.reducer;
