import { configureStore} from '@reduxjs/toolkit'
import counterReducer from './slices/CounterSlice'

export const store=configureStore({
    reducer:{
        // Define your reducers here
        counter:counterReducer,
    }
})