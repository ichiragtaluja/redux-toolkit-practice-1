import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import StatusCode from "../utils/StatusCode";

const productSlice = createSlice({
  name: "products",
  initialState: { data: [], status: StatusCode.IDLE },
  reducers: {
    fetchProducts(state, action) {
      state.data = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getProducts.pending, (state, action) => {
      state.status = StatusCode.LOADING;
    });
    builder.addCase(getProducts.rejected, (state, action) => {
      state.status = StatusCode.ERROR;
    });
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.data = action.payload;
      state.status = StatusCode.IDLE;
    });
  },
});

export const { fetchProducts } = productSlice.actions;
export default productSlice.reducer;

export const getProducts = createAsyncThunk("products/get", async () => {
  const data = await fetch("https://fakestoreapi.com/products");
  const result = await data.json();
  return result;
});
