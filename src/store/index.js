import {
  configureStore,
  getDefaultMiddleware,
  createEntityAdapter,
} from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import itemsReducer from "./slices/itemsSlice";
import itemsSlice from "./slices/itemsSlice";
import { itemsAdapter } from "./slices/itemsSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    items: itemsSlice,
  },

  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export const itemsSelectors = itemsAdapter.getSelectors((state) => {
  return state.items.items;
});

export const allItems = itemsSelectors.selectAll(store.getState());
