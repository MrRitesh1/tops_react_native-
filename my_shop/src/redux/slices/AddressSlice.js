const {createSlice} = require('@reduxjs/toolkit');

const AddressSlice = createSlice({
  name: 'address',
  initialState: {
    data: [],
  },
  reducers: {
    addAddress(state, action) {
      state.data.push(action.payload);
      //   let tempData = state.data;
      //   tempData.push(action.payload);
      //   state.data = tempData;
    },
  },
});

export const {addAddress} = AddressSlice.actions;
export default AddressSlice.reducer;
