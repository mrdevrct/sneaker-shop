import { createSlice } from "@reduxjs/toolkit";

interface ProductState {
  name: string | null;
}

const initialState: ProductState = {
  name: null,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProductName: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const { setProductName } = productSlice.actions;
export default productSlice.reducer;