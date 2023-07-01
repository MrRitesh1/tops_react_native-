const {configureStore} = require('@reduxjs/toolkit');
import ProductReduer from './slices/ProductSlices';
import WishlstReduer from './slices/WishlstSlices';
import CartReduer from './slices/CartSlices';

export const store = configureStore({
  reducer: {
    product: ProductReduer,
    wishlist: WishlstReduer,
    cart: CartReduer,
  },
});
