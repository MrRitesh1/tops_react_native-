const {createSlice} = require('@reduxjs/toolkit');

const WishlistSlices = createSlice({
  name: 'wishlist',
  initialState: {
    data: [],
  },
  reducers: {
    addItemToWishList(state, action) {
      let tempData = state.data;
      tempData.push(action.payload);
      state.data = tempData;
    },
  },
});

export const {addItemToWishList} = WishlistSlices.actions;
export default WishlistSlices.reducer;
