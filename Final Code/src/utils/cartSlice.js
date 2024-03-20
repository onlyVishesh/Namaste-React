import { createSlice } from "@reduxjs/toolkit";

const loadState = () => {
  try {
    const serializedState = localStorage.getItem("cartState");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("cartState", serializedState);
  } catch (err) {
    // Handle errors here
  }
};

const initialState = loadState() || {
  resName: "",
  items: [],
  resMenu: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    changeResName: (state, action) => {
      state.resName = action.payload;
      saveState(state);
    },
    addItem: (state, action) => {
      state.items.push(action.payload);
      saveState(state);
    },
    clearCart: (state) => {
      state.items.length = 0;
      state.resMenu.length = 0;
      state.resName = "";
      saveState(state);
    },
    changeResMenu: (state, action) => {
      state.resMenu = action.payload;
      saveState(state);
    },
    removeItem: (state, action) => {
      const itemIdToRemove = action.payload;
      state.items = state.items.filter(
        (item) => item.card.info.id !== itemIdToRemove
      );
      saveState(state);
    },
    increaseItemQuantity: (state, action) => {
      const id = action.payload;
      const itemToUpdate = state.items.find((item) => item.card.info.id === id);
      if (itemToUpdate) {
        itemToUpdate.quantity += 1;
        saveState(state);
      }
    },
    decreaseItemQuantity: (state, action) => {
      const id = action.payload;
      const itemToUpdate = state.items.find((item) => item.card.info.id === id);
      if (itemToUpdate) {
        itemToUpdate.quantity -= 1;
        if (itemToUpdate.quantity === 0) {
          const itemIdToRemove = itemToUpdate.card.info.id;
          state.items = state.items.filter(
            (item) => item.card.info.id !== itemIdToRemove
          );
        }
        saveState(state);
      }
    },
  },
});

export const {
  changeResName,
  addItem,
  removeItem,
  clearCart,
  changeResMenu,
  increaseItemQuantity,
  decreaseItemQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
