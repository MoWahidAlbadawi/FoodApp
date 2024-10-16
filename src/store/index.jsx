import { createStore , createSlice } from '@reduxjs/toolkit'


const initialState = {items : [] , totalAmount : 0};

const CartSlice = createSlice({
    name : 'cart',
    initialState,
    reducers : {
        addItem (state , action)  {
            state.totalAmount = state.totalAmount + action.payload.price * action.payload.amount;
            const cartItemIndex = state.items.findIndex((item) => item.id === action.payload.id);
            const cartItem = state.items[cartItemIndex];
            if(cartItem){
                const updateItem = {...cartItem , amount : cartItem.amount + action.payload.amount};
                state.items[cartItemIndex]=updateItem;
            }
            else {
            state.items = state.items.concat(action.payload);
            }
        },
        removeItem  (state , action)  {
            const cartItemIndex = state.items.findIndex((item) => item.id === action.payload);
            const cartItem = state.items[cartItemIndex];
            if(cartItem.amount>1) {
                const updatedItem = {...cartItem , amount : cartItem.amount -1};
                state.items[cartItemIndex] = updatedItem;
            }
            else {
            state.items = state.items.filter((item) => (item.id !== action.payload));
    1        }
            state.totalAmount = state.totalAmount - cartItem.price;
        },
        clearCart (state) {
            state.items = [];
            state.totalAmount = 0;
        }
    },
})
export const cartActions = CartSlice.actions;
export const store = createStore(CartSlice.reducer);