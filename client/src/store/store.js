import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { loginApi } from "./api/LoginApi";
import { voteCastApi } from "./api/VoteCastApi";
export const store = configureStore({
  reducer: {
    [loginApi.reducerPath]: loginApi.reducer,
    [voteCastApi.reducerPath]: voteCastApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware()
      .concat(loginApi.middleware)
      .concat(voteCastApi.middleware);
  },
});

setupListeners(store.dispatch);
