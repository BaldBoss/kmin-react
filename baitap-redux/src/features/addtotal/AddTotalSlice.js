import { createSlice } from "@reduxjs/toolkit";

export const AddTotalSlice = createSlice({
    name:"addTotal",
    initialState:{
        total: 0,
    },
    reducers: {
        addTotalByAmount: (state,action) =>{
            state.total += action.payload
        },
    },
})

export const {addTotalByAmount} = AddTotalSlice.actions
export default AddTotalSlice.reducer