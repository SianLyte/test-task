import { configureStore } from '@reduxjs/toolkit';
import ticketsReducer from './slices/ticketsSlice';
import currencyReducer from "./slices/currencySlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

export const store = configureStore({
  reducer: {
    tickets: ticketsReducer,
    currency: currencyReducer
  },
});


type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;