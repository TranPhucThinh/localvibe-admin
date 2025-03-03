import { configureStore } from '@reduxjs/toolkit'
import { rootReducer } from './reducers'

export const store = configureStore({
  reducer: rootReducer,

  // Add api middleware to enable features like: catching, invalidation, polling of RTK-Query
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store
