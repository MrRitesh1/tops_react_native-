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
    deleteAddress(state, action) {
      let newArr = state.data.filter(item => {
        return item.id !== action.payload;
      });
      state.data = newArr;
    },
    updateAddress(state, action) {
      let temp = state.data;
      temp.map(item => {
        if (item.id == action.payload.id) {
          item.state = action.payload.state;
          item.pincode = action.payload.pincode;
          item.city = action.payload.city;
          item.address_1 = action.payload.address_1;
          item.country = action.payload.country;
          item.type = action.payload.type;
        }
      });
      state.data = temp;
    },
  },
});

export const {addAddress, deleteAddress, updateAddress} = AddressSlice.actions;
export default AddressSlice.reducer;
