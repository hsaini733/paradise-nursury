import { createSlice } from "@reduxjs/toolkit";

const CartSlice =  createSlice({
    name: "cart",
    initialState: {
        items: [],
    },
    reducers: {
        addItem: (state, action) => {
            const existingItem = state.items.find((item) => item.id === action.payload.id);

            if (existingItem) {
                existingItem.quantity++;
            } else {
                state.items.push({ ...action.payload, quantity: 1 });
            }
        },
        removeItem: (state, action) => {
            state.items = state.items.filter((item) => item.id !== action.payload);
        },
        increaseQuantity: (state, action) => {
            const item = state.items.find((item) => item.id === action.payload);
            if (item) {
                item.quantity++;
            }
        },
        decreaseQuantity: (state, action) => {
            const item = state.items.find((item) => item.id === action.payload);
            if (item && item.quantity > 1) {
                item.quantity--;
            } else if (item && item.quantity === 1) {
                state.items = state.items.filter(i => i.id !== action.payload);
            }
        },
        clearCart: (state) => {
            state.items = [];
        }
    },
});

export const { addItem, removeItem, increaseQuantity, decreaseQuantity, clearCart } = CartSlice.actions;

export default CartSlice.reducer;
