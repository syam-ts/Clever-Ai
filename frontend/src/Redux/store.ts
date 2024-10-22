import { configureStore } from '@reduxjs/toolkit'
import userSlice from './slice'

const store = configureStore({
    reducer: {
        userSlice: userSlice
    }
});


export default store;