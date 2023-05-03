import { configureStore } from "@reduxjs/toolkit";
import StatusLogin from "./reducer/StatusLogin";
export const store = configureStore({
  reducer: {
    status: StatusLogin,
  },
});
