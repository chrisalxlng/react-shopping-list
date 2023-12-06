import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { getRandomId } from '../util';

export type ShoppingListItem = {
  id: string;
  name: string;
  isChecked: boolean;
};

export type ShoppingListState = {
  items: ShoppingListItem[];
};

const initialState: ShoppingListState = {
  items: [],
};

const sortItems = (items: ShoppingListItem[]) =>
  items.sort((a, b) => {
    if (a.isChecked === b.isChecked) return 0;
    else if (a.isChecked) return 1;
    return -1;
  });

export const shoppingListSlice = createSlice({
  name: 'shoppingList',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<string>) => {
      const { items } = state;
      items.push({
        id: getRandomId(),
        name: action.payload,
        isChecked: false,
      });
      const sortedItems = sortItems(items);
      state.items = sortedItems;
    },
    toggle: (state, action: PayloadAction<string>) => {
      const { items } = state;
      const updatedItemId = action.payload;

      const updatedItem = items.find((item) => item.id === updatedItemId);
      if (updatedItem == null) throw Error('Updated item could not be found.');
      const updatedItems: ShoppingListItem[] = [
        ...items.filter((item) => item.id !== updatedItemId),
        { ...updatedItem, isChecked: !updatedItem.isChecked },
      ];

      const sortedItems = sortItems(updatedItems);
      state.items = sortedItems;
    },
    remove: (state, action: PayloadAction<string>) => {
      const removedItemId = action.payload;
      state.items = state.items.filter((item) => item.id !== removedItemId);
    },
  },
});

export const { add, toggle, remove } = shoppingListSlice.actions;

export default shoppingListSlice.reducer;
