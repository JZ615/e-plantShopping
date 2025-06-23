import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CartSlice'; // Import the reducer managing the cart slice

// Create a Redux store using Redux Toolkit's configureStore
const store = configureStore({
  reducer: {
    // Define the state slices and the reducer that handles them
    cart: cartReducer, // 'cart' slice is managed by cartReducer
  },
});

// Export the store so it can be provided to the React app
export default store;