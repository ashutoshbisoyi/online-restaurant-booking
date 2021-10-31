import { createSlice, current } from '@reduxjs/toolkit';

const initialState = {
  items: localStorage.getItem('itemsInPlate')
    ? JSON.parse(localStorage.getItem('itemsInPlate'))
    : [],
};

export const plateSlice = createSlice({
  name: 'plateItems',
  initialState: initialState,
  reducers: {
    addItemToPlate: (state, action) => {
      const currentItems = current(state).items;

      const itemExists = (id) => {
        return currentItems.some((el) => {
          return el.id === id;
        });
      };

      if (itemExists(action.payload)) {
        console.log('present');
      } else {
        state.items.push(action.payload);
        const currentState = localStorage.getItem('itemsInPlate')
          ? JSON.parse(localStorage.getItem('itemsInPlate'))
          : [];
        currentState.push(action.payload);
        localStorage.setItem('itemsInPlate', JSON.stringify(currentState));
      }
    },
    removeItemFromPlate: (state, action) => {
      const currentItems = current(state).items;
      const updatedItems = currentItems.filter(
        (item) => item.id !== action.payload
      );
      localStorage.setItem('itemsInPlate', JSON.stringify(updatedItems));
      return { ...state, items: updatedItems };
    },
    increaseQuantity: (state, action) => {
      const currentItems = current(state).items;
      const updatedItems = currentItems.map((item) => {
        if (item.id === action.payload) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
      localStorage.setItem('itemsInPlate', JSON.stringify(updatedItems));
      return { ...state, items: updatedItems };
    },
    decreaseQuantity: (state, action) => {
      const currentItems = current(state).items;
      const updatedItems = currentItems.map((item) => {
        if (item.id === action.payload && item.quantity > 1) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      });
      localStorage.setItem('itemsInPlate', JSON.stringify(updatedItems));

      return { ...state, items: updatedItems };
    },
  },
});

export const {
  addItemToPlate,
  increaseQuantity,
  decreaseQuantity,
  removeItemFromPlate,
} = plateSlice.actions;

export const selectPlateItems = (state) => state.plateItems.items;

export default plateSlice.reducer;
