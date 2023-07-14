const {createSlice} = require('@reduxjs/toolkit');

const OrderSlices = createSlice({
  name: 'order',
  initialState: {
    data: [],
  },
  reducers: {
    orderItem(state, action) {
      state.data.push(action.payload);
    },
  },
});

export const {orderItem} = OrderSlices.actions;
export default OrderSlices.reducer;
