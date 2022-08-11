import { configureStore } from "@reduxjs/toolkit";

import reducers from './reducers/gameSlice';

export const store = configureStore({
    reducer:reducers
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;