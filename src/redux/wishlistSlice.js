import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
    name:'whislist',
    initialState:[],
    reducers:{
        addToWishlist:(state,action)=>{
            state.push(action.payload)
        },
        removeItemFromWishlist:(state,action)=>{
            return state.filter(item=> item.id !== action.payload  )
        }
    }
})
export const {addToWishlist,removeItemFromWishlist} = wishlistSlice.actions;
export default wishlistSlice.reducer;