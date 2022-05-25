import { toast } from "react-toastify";

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  watchList: JSON.parse(localStorage.getItem("wishList"))?.watchList || [],
  watchedList: JSON.parse(localStorage.getItem("wishList"))?.watchedList || [],
  favouriteList:
    JSON.parse(localStorage.getItem("wishList"))?.favouriteList || [],
};

const wishListSlice = createSlice({
  name: "wishList",
  initialState,
  reducers: {
    addMedia: (state, { payload }) => {
      if (payload.listType === "watch") {
        if (state.watchList.every((media) => media.id !== payload.media.id)) {
          state.watchList.push({
            ...payload.media,
            mediaType: payload.mediaType,
          });
          toast.success("Added to the watchList", { theme: "dark" });
        } else {
          toast.warning("Already exist in the watchList", { theme: "dark" });
        }
      } else if (payload.listType === "watched") {
        if (state.watchedList.every((media) => media.id !== payload.media.id)) {
          state.watchList = state.watchList.filter(
            (media) => media.id !== payload.media.id
          );

          state.watchedList.push(payload.media);
          toast.success("Added to the watchedList", { theme: "dark" });
        } else {
          toast.warning("Already exist in the watchedList", { theme: "dark" });
        }
      } else if (payload.listType === "favourite") {
        if (
          state.favouriteList.every((media) => media.id !== payload.media.id)
        ) {
          state.favouriteList.push(payload.media);
          toast.success("Added to the favouriteList", { theme: "dark" });
        } else {
          toast.warning("Already exist in the favouriteList", {
            theme: "dark",
          });
        }
      }
    },
    deleteMedia: (state, { payload }) => {
      if (payload.listType === "watch") {
        state.watchList = state.watchList.filter(
          (media) => media.id !== payload.id
        );
        toast.success("Deleted from watchList", { theme: "dark" });
      } else if (payload.listType === "watched") {
        state.watchedList = state.watchedList.filter(
          (media) => media.id !== payload.id
        );
        toast.success("Deleted from watchedList", { theme: "dark" });
      } else if (payload.listType === "favourite") {
        state.favouriteList = state.favouriteList.filter(
          (media) => media.id !== payload.id
        );
        toast.success("Deleted from favouriteList", { theme: "dark" });
      }
    },
  },
});

export const { addMedia, deleteMedia } = wishListSlice.actions;
export default wishListSlice.reducer;
