import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from "./reducer";
import { contactApi } from "./contactSlice";

const store = configureStore({
  reducer: {
    [contactApi.reducerPath]: contactApi.reducer,
    contacts: contactsReducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    contactApi.middleware,
  ],
});

export default store;
