import { createSlice } from "@reduxjs/toolkit";
import AsyncStorage from '@react-native-async-storage/async-storage';

const initialState = {
  cartItems: [],
};

const Addtocart = createSlice({
  name: 'cart2',
  initialState,
  reducers: {
    addCartItem(state, action) {
      state.cartItems.push(action.payload);
      AsyncStorage.setItem('cartItems', JSON.stringify(state.cartItems)); // Persist cartItems in AsyncStorage
    },
    removeCartItem(state, action) {
      state.cartItems = state.cartItems.filter((item) => item.id !== action.payload.id);
      AsyncStorage.setItem('cartItems', JSON.stringify(state.cartItems)); // Update AsyncStorage after removing item
    },
    clearCart(state, action) {
      state.cartItems = [];
      AsyncStorage.removeItem('cartItems'); // Clear cartItems from AsyncStorage
    }
  },
});

export const { addCartItem, removeCartItem, clearCart } = Addtocart.actions;
export default Addtocart.reducer;