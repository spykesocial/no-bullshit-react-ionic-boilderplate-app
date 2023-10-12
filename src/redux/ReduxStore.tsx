import { configureStore } from "@reduxjs/toolkit";

import { composeWithDevTools } from "redux-devtools-extension";
import { TypedUseSelectorHook, useSelector, useDispatch } from "react-redux";
import { persistReducer, persistStore } from "redux-persist";
import autoMergeLevel2 from "redux-persist/es/stateReconciler/autoMergeLevel2";
import storage from "redux-persist/lib/storage";
import loggerMiddleware from "./middleware/LoggerMiddleware";
import RootReducer from "./reducers/RootReducer";

export const persistConfig = {
  key: "root",
  storage: storage,
  version: 1,
  stateReconciler: autoMergeLevel2,
};

//persisted reducer used to persist the root reducer. interally we will then use a similar persistor to persist various setting reducers
const persistedReducer = persistReducer<RootReducerType>(
  persistConfig,
  RootReducer,
);

//redux store entrypoint
const store = configureStore({
  reducer: RootReducer,
  middleware: [loggerMiddleware],
  //redux store tools hidden in production
  devTools: true,
  // devTools: process.env.NODE_ENV !== "production",
});

export const persistedStore = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type RootReducerType = ReturnType<typeof RootReducer>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
