import { createSlice } from '@reduxjs/toolkit';
import { v4 } from 'uuid';

const initialState = {
  id: '',
  name: '',
  password: '',
  isLoggedIn: false,
  phone: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      state.id = v4();
      state.name = action.payload.name;
      state.password = action.payload.password;
      state.isLoggedIn = !state.isLoggedIn;
      state.phone = action.payload.phone;
    },
    logout: (state) => state = initialState,
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
