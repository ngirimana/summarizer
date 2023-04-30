import { configureStore } from "@reduxjs/toolkit";
import { articleAPi } from "./article";

export const store = configureStore({
  reducer: {
    [articleAPi.reducerPath]: articleAPi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(articleAPi.middleware),
});
