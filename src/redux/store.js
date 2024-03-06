import { configureStore } from '@reduxjs/toolkit';
import counterReducer from "./slides/counterSilde.js";
import userReducer from "./slides/userSilde.js"


export default configureStore({
  reducer: {
    counter:counterReducer,
    user: userReducer
  }

})