import { combineReducers } from "redux";
import RandomReducer from "./RandomReducer";
import storage from "redux-persist/lib/storage";
import autoMergeLevel2 from "redux-persist/es/stateReconciler/autoMergeLevel2";
import { persistReducer, persistStore } from "redux-persist";

export const persistConfig = {
  key: "root",
  storage: storage,
  version: 1,
  stateReconciler: autoMergeLevel2,
};
//root reducer, currently only used to handle comment collapsing
const persistedReducer = persistReducer<RandomReducerType>(
  persistConfig,
  RandomReducer,
);
export default combineReducers({
  RandomReducer: persistedReducer,
});

export type RandomReducerType = ReturnType<typeof RandomReducer>;
