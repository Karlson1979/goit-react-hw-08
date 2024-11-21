// src/redux/contacts/slice.js

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  filter: "",
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    setContacts(state, action) {
      state.items = action.payload;
    },
    setFilter(state, action) {
      state.filter = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
    setLoading(state, action) {
      state.isLoading = action.payload;
    },
  },
});

// Селектор для фільтрованих контактів
export const selectFilteredContacts = (state) => {
  const filter = state.contacts.filter.toLowerCase();
  return state.contacts.items.filter(
    (contact) =>
      contact.name.toLowerCase().includes(filter) ||
      contact.phone.includes(filter)
  );
};

// Експортуємо екшени та редуктор
export const { setContacts, setFilter, setError, setLoading } =
  contactsSlice.actions;

export default contactsSlice.reducer;
