import { configureStore } from "@reduxjs/toolkit";
import { combineReducers, configureStore} from "@reduxjs/toolkit";
import userReducers from './userSlice';

import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist'
  import storage from 'redux-persist/lib/storage';

  
  // Use blacklist to set a specific state from persisting
  const persistConfig = {
    key: 'ez',
    version: 1,
    // blacklist: ['loading'],
    storage,
  }

  const rootReducers = combineReducers({
        user: userReducers
  })

    const persistedReducer = persistReducer(persistConfig, rootReducers)

    const store = configureStore({
            reducer: persistedReducer,
            middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
        }),
    })


    export let persistor = persistStore(store)

    export default store;

