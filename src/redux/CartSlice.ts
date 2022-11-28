import { createSlice, PayloadAction} from "@reduxjs/toolkit";

type cartType = {
   id: number;
   name: string;
   sku?: string;
   images: {
     date_created:string;
     date_modified:string;
     src:string;
   }[];
   regular_price: string;
   sale_price: string;
   stock_status?: string;
   quantity: number;
};

type CartsState = { 
   CartList: cartType[],
};


const initialState : CartsState = {
   CartList : [], 
};

const cartslice = createSlice({
   name: "cart",
   initialState,
   reducers: {
      AddCart: (state, action:PayloadAction<cartType>) => {
         const itemInCart = state.CartList.find((item) => item.id === action.payload.id);
         if (itemInCart) {
           itemInCart.quantity++;
         } else {
           state.CartList.push({ ...action.payload, quantity: 1});
         }
      },
      RemoveCart: (state, action:PayloadAction<number>) => {
         state.CartList = state.CartList.filter(cart => cart.id !== action.payload)
      },
       incrementQuantity: (state, action:PayloadAction<number>) => {
         const item = state.CartList?.find((item) => item.id === action.payload);
         if(item) {
            item.quantity++;
         }
       },
       decrementQuantity: (state, action:PayloadAction<number>) => {
         const item = state.CartList?.find((item) => item.id === action.payload);
         if(item) {
           item.quantity--;
         }
       },
   }
});

export const { AddCart, RemoveCart, incrementQuantity, decrementQuantity } = cartslice.actions;
export default cartslice.reducer;
