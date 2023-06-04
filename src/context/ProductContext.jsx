import React, {
  useCallback,
  createContext,
  useMemo,
  useReducer,
  useContext,
} from "react";
import PropTypes from "prop-types";
import axiosInstance from "../utils/axiosInstance";
import {
  ProductReducer,
  initialProductsState,
} from "../reducers/ProductReducers";
import useDispatch from "../hooks/useDispatch";

export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [products, dispatch] = useReducer(
    ProductReducer,
    initialProductsState
  );

  const { loadDispatch, successDispatch, errDispatch } = useDispatch(dispatch);

  const loadProducts = useCallback(async () => {
    const actionName = "LOAD_PRODUCTS";
    try {
      loadDispatch({
        type: `${actionName}_REQUEST`,
        payload: { message: "Products are loading..." },
      });
      const res = await axiosInstance.get("products");
      successDispatch({
        type: `${actionName}_SUCCESS`,
        payload: res.data,
      });
    } catch (err) {
      errDispatch({
        type: `${actionName}_FAIL`,
        payload: { message: err.message },
      });
    }
  }, []);

  const value = useMemo(
    () => ({
      loadProducts,
      products,
    }),
    [products]
  );
  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};

ProductsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useProducts = () => useContext(ProductsContext);
