import {configureStore} from '@reduxjs/toolkit';
// import storage from 'redux-persist/lib/storage';
// import {combineReducers} from 'redux';
// import {FLUSH, PAUSE, PERSIST, persistReducer, PURGE, REGISTER, REHYDRATE,} from 'redux-persist';
import sliderReducer from '../features/slices/sliderSlice'
import productsReducer from '../features/slices/productsSlice'
import cartReducer from '../features/slices/cartSlice'
//
// const persistConfig = {
//   key: 'counter',
//   storage,
// };
// const reducers = combineReducers({
//   slider: sliderReducer,
//   products: productsReducer,
//   cart: cartReducer
// });
//
// const persistedReducer = persistReducer(persistConfig, reducers);
//
// export default configureStore({
//   reducer: persistedReducer,
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
// });


export const store = configureStore({
  reducer: {
    slider: sliderReducer,
    products: productsReducer,
    cart: cartReducer
  },
});
