import {configureStore} from '@reduxjs/toolkit';
import authSlice from './slices/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const authSlicesReducer = persistReducer(
  {
    key: 'auth',
    storage: AsyncStorage,
    whitelist: ['users'],
    blacklist: [''],
  },
  authSlice,
);

export const store = configureStore({
  reducer: {
    auth: authSlicesReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
