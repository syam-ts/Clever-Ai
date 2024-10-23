import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import userSlice from "./slice";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};

const persistedUserReducer = persistReducer(persistConfig, userSlice);

const store = configureStore({
  reducer: {
    user: persistedUserReducer,
  },
});

const persistor = persistStore(store);

export { store, persistor };
