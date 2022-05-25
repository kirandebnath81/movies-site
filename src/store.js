import { configureStore } from "@reduxjs/toolkit";

import PaginationReducer from "./features/pagination/PaginationSlice";
import genresReducer from "./features/genres/genresSlice";
import mediaReducer from "./features/media/mediaSlice";
import wishListReducer from "./features/wishList/wishListSlice";
import authReducer from "./features/auth/authSlice";

//MIDDLEWARE
const wishListMiddleware = ({ getState }) => {
  return (next) => {
    return (action) => {
      const result = next(action);
      localStorage.setItem("wishList", JSON.stringify(getState().wishList));
      return result;
    };
  };
};

export const store = configureStore({
  reducer: {
    paginate: PaginationReducer,
    genres: genresReducer,
    media: mediaReducer,
    wishList: wishListReducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleWare) =>
    getDefaultMiddleWare().concat(wishListMiddleware),
});
