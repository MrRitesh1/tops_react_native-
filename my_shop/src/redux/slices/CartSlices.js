const {createSlice} = require('@reduxjs/toolkit');

const CartSlices = createSlice({
  name: 'cart',
  initialState: {
    data: [],
  },
  reducers: {
    addItemToCart(state, action) {
      let tempData = state.data;
      let isItemExist = false;
      tempData.map(item => {
        if (item.id == action.payload.id) {
          isItemExist = true;
          item.qty = item.qty + 1;
        }
      });
      if (!isItemExist) {
        tempData.push(action.payload);
      }
      state.data = tempData;
    },
  },
});

export const {addItemToCart} = CartSlices.actions;
export default CartSlices.reducer;
