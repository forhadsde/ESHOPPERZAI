import { configureStore } from '@reduxjs/toolkit';

import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { basketSlice } from '../../features/basket/basketSlice';
import { homeSlice } from '../../features/home/homeSlice';
import { accountSlice } from '../../features/account/accountSlice';

export const store = configureStore({
    reducer: {
        basket: basketSlice.reducer,
        home: homeSlice.reducer,
        account: accountSlice.reducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;