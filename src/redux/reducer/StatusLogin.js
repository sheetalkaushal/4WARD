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
    // postDummy:(state,action)=>{
    //     state.postapi=action.payload
    //     console.log(postapi)
    // }
  },
});
export const { getReducers, dummyReducers } = StatusLogin.actions;
export default StatusLogin.reducer;
