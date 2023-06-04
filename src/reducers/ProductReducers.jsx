export const initialProductsState = [];

export const ProductReducer = (state, { type, payload }) => {
  switch (type) {
  
    case "LOAD_PRODUCTS_SUCCESS":
      return payload;
   

    default:
      return state;
  }
};
