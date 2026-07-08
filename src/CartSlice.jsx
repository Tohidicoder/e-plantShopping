// import { createSlice } from '@reduxjs/toolkit';

// export const CartSlice = createSlice({
//   name: 'cart',
//   initialState: {
//     items: [], // Initialize items as an empty array
//   },
//   reducers: {
//     addItem: (state, action) => {
    
//     },
//     removeItem: (state, action) => {
//     },
//     updateQuantity: (state, action) => {

    
//     },
//   },
// });

// export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

// export default CartSlice.reducer;




import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',

  initialState: {
    items: [], // Initialize items as an empty array
  },

  reducers: {

    // Add item to cart
    addItem: (state, action) => {
      const { name, image, cost } = action.payload;

      // Check if item already exists
      const existingItem = state.items.find(
        item => item.name === name
      );

      if (existingItem) {
        // Increase quantity if item exists
        existingItem.quantity++;
      } else {
        // Add new item with quantity 1
        state.items.push({
          name,
          image,
          cost,
          quantity: 1,
        });
      }
    },


    // Remove item from cart
    removeItem: (state, action) => {
      state.items = state.items.filter(
        item => item.name !== action.payload
      );
    },


    // Update item quantity
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;

      const itemToUpdate = state.items.find(
        item => item.name === name
      );

      if (itemToUpdate) {
        itemToUpdate.quantity = quantity;
      }
    },

  },
});


// Export actions
export const {
  addItem,
  removeItem,
  updateQuantity
} = CartSlice.actions;


// Export reducer
export default CartSlice.reducer;

