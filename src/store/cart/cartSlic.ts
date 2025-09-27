// store/cart/cartSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CartItem {
  id: string;
  name: string;
  size: string;
  color: string;
  price: number;
  qty: number;
  variantId: string; // For handling variants like size/color
}

interface Coupon {
  code: string;
  discountPercentage: number;
}

interface CartState {
  mainCart: CartItem[];
  wishlist: CartItem[];
  coupons: Coupon[];
  taxRate: number; // e.g., 0.1 for 10%
  discountTotal: number;
  taxTotal: number;
  grandTotal: number;
}

const initialState: CartState = {
  mainCart: [],
  wishlist: [],
  coupons: [],
  taxRate: 0.1,
  discountTotal: 0,
  taxTotal: 0,
  grandTotal: 0,
};

// Load from localStorage on init
const loadFromLocalStorage = (): CartState => {
  if (typeof window !== 'undefined') {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      return JSON.parse(savedCart);
    }
  }
  return initialState;
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: loadFromLocalStorage(),
  reducers: {
    addToMain: (state, action: PayloadAction<CartItem>) => {
      const existingItem = state.mainCart.find(
        (item) =>
          item.id === action.payload.id &&
          item.variantId === action.payload.variantId
      );
      if (existingItem) {
        existingItem.qty += action.payload.qty;
      } else {
        state.mainCart.push(action.payload);
      }
      calculateTotals(state);
      saveToLocalStorage(state);
    },
    addToWish: (state, action: PayloadAction<CartItem>) => {
      const existingItem = state.wishlist.find(
        (item) =>
          item.id === action.payload.id &&
          item.variantId === action.payload.variantId
      );
      if (!existingItem) {
        state.wishlist.push(action.payload);
      }
      saveToLocalStorage(state);
    },
    removeFromMain: (state, action: PayloadAction<string>) => {
      state.mainCart = state.mainCart.filter(
        (item) => item.variantId !== action.payload
      );
      calculateTotals(state);
      saveToLocalStorage(state);
    },
    removeFromWish: (state, action: PayloadAction<string>) => {
      state.wishlist = state.wishlist.filter(
        (item) => item.variantId !== action.payload
      );
      saveToLocalStorage(state);
    },
    updateQty: (
      state,
      action: PayloadAction<{ variantId: string; qty: number }>
    ) => {
      const item = state.mainCart.find(
        (i) => i.variantId === action.payload.variantId
      );
      if (item) {
        item.qty = action.payload.qty;
        calculateTotals(state);
        saveToLocalStorage(state);
      }
    },
    addCoupon: (state, action: PayloadAction<Coupon>) => {
      if (!state.coupons.find((c) => c.code === action.payload.code)) {
        state.coupons.push(action.payload);
        calculateTotals(state);
        saveToLocalStorage(state);
      }
    },
    removeCoupon: (state, action: PayloadAction<string>) => {
      state.coupons = state.coupons.filter(
        (c) => c.code !== action.payload
      );
      calculateTotals(state);
      saveToLocalStorage(state);
    },
    setTaxRate: (state, action: PayloadAction<number>) => {
      state.taxRate = action.payload;
      calculateTotals(state);
      saveToLocalStorage(state);
    },
    clearMain: (state) => {
      state.mainCart = [];
      state.coupons = [];
      calculateTotals(state);
      saveToLocalStorage(state);
    },
    clearWish: (state) => {
      state.wishlist = [];
      saveToLocalStorage(state);
    },
  },
});

// Helper to calculate totals
const calculateTotals = (state: CartState) => {
  const subtotal = state.mainCart.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );
  state.discountTotal = state.coupons.reduce(
    (acc, coupon) => acc + (subtotal * coupon.discountPercentage) / 100,
    0
  );
  const afterDiscount = subtotal - state.discountTotal;
  state.taxTotal = afterDiscount * state.taxRate;
  state.grandTotal = afterDiscount + state.taxTotal;
};

// Save to localStorage
const saveToLocalStorage = (state: CartState) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('cart', JSON.stringify(state));
  }
};

export const {
  addToMain,
  addToWish,
  removeFromMain,
  removeFromWish,
  updateQty,
  addCoupon,
  removeCoupon,
  setTaxRate,
  clearMain,
  clearWish,
} = cartSlice.actions;

export default cartSlice.reducer;