import rootReducer from "./reducers/rootReducers";
import { createStore, applyMiddleware  } from 'redux';
import { persistStore } from 'redux-persist';
import {thunk} from 'redux-thunk'

export const store = createStore(rootReducer, applyMiddleware(thunk)); // sau cai th create store con middleware
export const persistor = persistStore(store);
