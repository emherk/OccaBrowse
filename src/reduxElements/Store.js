import { configureStore } from "@reduxjs/toolkit";
import queryReducer from "./querySlice.js";

/**
 * The redux store.
 */
export default configureStore({
  reducer: {
    queryReducer,
  },
});
