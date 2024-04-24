import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface CounterState {
  logged: boolean;
  data: IUser;
}

const initialState: CounterState = {
  logged: false,
  data: {},
};

export const counterSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<IUser>) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.logged = true;
      state.data = action.payload;
    },
    logout: (state) => {
      state.logged = false;
      state.data = {};
    },
    updateUser: (state, action: PayloadAction<Object>) => {
      state.data = { ...state.data, ...action.payload };
    },
  },
});

// Action creators are generated for each case reducer function
export const { login, logout, updateUser } = counterSlice.actions;

const userReducer = counterSlice.reducer;

export default userReducer;
