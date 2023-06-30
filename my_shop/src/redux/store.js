const {configureStore} = require('@reduxjs/toolkit');
import ProductReduer from './slices/ProductSlices';
import WishlstReduer from './slices/WishlstSlices';
export const store = configureStore({
  reducer: {
    product: ProductReduer,
    wishlist: WishlstReduer,
  },
});
