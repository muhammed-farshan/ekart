import { configureStore } from "@reduxjs/toolkit";
import Wishlist from "./wishlistSlice";
import CartData from "./cartSlice"

const store = configureStore({
    reducer:{
        WishListItems: Wishlist,
        cartItems:CartData
    }
})
export default store;