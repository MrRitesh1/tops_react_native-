const {configureStore} = require('@reduxjs/toolkit');
import ProductReduer from './slices/ProductSlices';

export const store = configureStore({
  reducer: {
    product: ProductReduer,
  },
});
