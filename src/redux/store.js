import rootReducer from "./reducers/rootReducers";
import { createStore } from 'redux';
import { persistStore } from 'redux-persist';
export const store = createStore(rootReducer); // sau cai th create store con middleware
export const persistor = persistStore(store);
