import { createSlice } from "@reduxjs/toolkit";
const StatusLogin = createSlice({
  name: "Status",
  initialState: { checkStatus: false, checkapi: [] },
  reducers: {
    getReducers: (state, action) => {
      state.checkStatus = action.payload;
    },
    getapi: (state, action) => {
      state.checkapi = action.payload;
    },
  },
});
export const { getReducers, getapi } = StatusLogin.actions;
export default StatusLogin.reducer;
