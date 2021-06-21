import { configureStore } from '@reduxjs/toolkit'
import AddTotalReducer from "../features/addtotal/AddTotalSlice"

export default configureStore({
  reducer: {
      addTotal: AddTotalReducer,
  },
})