import {createSlice} from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState : {
        products: [],
        quantity: 0,
        total: 0
    },
    reducers :{
        addProduct: (state,action)=>{
            state.products.push(action.payload);
            state.quantity += 1;
            state.total += action.payload.price * action.payload.quantity;
        },
        reset: (state) => {
            state.products = [];
            state.quantity = 0;
            state.total = 0;
        },
        removeProduct: (state, action)=>{
            state.products.splice(
                state.products.findIndex((item)=> item._id === action.payload._id),1
                );
            state.quantity -= 1;
            state.total -= action.payload.price 
            
        }
    },
  
});

export const {addProduct} = cartSlice.actions;
export const {reset} = cartSlice.actions;
export const {removeProduct} = cartSlice.actions;
export default cartSlice.reducer;