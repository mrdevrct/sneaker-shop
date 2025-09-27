// store/user/userSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface User {
  id: string;
  email: string;
  name: string;
  // Add more fields as needed
}

interface UserState {
  user: User | null;
  isLoggedIn: boolean;
  token: string | null;
}

const initialState: UserState = {
  user: null,
  isLoggedIn: false,
  token: null,
};

// Load from localStorage on init (for persistence across refresh)
const loadFromLocalStorage = (): UserState => {
  if (typeof window !== 'undefined') {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      return JSON.parse(savedUser);
    }
  }
  return initialState;
};

const userSlice = createSlice({
  name: 'user',
  initialState: loadFromLocalStorage(),
  reducers: {
    setUser: (state, action: PayloadAction<{ user: User; token: string }>) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      saveToLocalStorage(state);
    },
    updateUser: (state, action: PayloadAction<Partial<User>>) => {
      if (state.user) {
        state.user = { ...state.user, ...action.payload };
        saveToLocalStorage(state);
      }
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.isLoggedIn = false;
      saveToLocalStorage(state);
    },
  },
});

// Save to localStorage
const saveToLocalStorage = (state: UserState) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('user', JSON.stringify(state));
  }
};

export const { setUser, updateUser, logout } = userSlice.actions;

export default userSlice.reducer;