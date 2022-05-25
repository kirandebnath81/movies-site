import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  page: 1,
};

const paginationSlice = createSlice({
  name: "paginate",
  initialState,
  reducers: {
    setPaginate: (state, action) => {
      state.page = action.payload;
    },
  },
});

export const { setPaginate } = paginationSlice.actions;
export default paginationSlice.reducer;
