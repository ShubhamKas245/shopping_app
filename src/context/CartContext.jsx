import React, {
  createContext,
  useCallback,
  useMemo,
  useReducer,
} from "react";
import PropTypes from "prop-types";
import axiosInstance from "../utils/axiosInstance";
import { CartReducer, initialCartState } from "../reducers/CartReducer";
import useDispatch from "../hooks/useDispatch";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(CartReducer, initialCartState);

  const { loadDispatch, successDispatch, errDispatch } = useDispatch(dispatch);

  const loadCart = useCallback(async () => {
    const actionName = "LOAD_CART";
    try {
      loadDispatch({
        type: `${actionName}_REQUEST`,
        payload: { message: "Products are loading..." },
      });
      const res = await axiosInstance.get("cart");
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

  const addToCart = useCallback(async (data) => {
    const actionName = "ADD_CART";
    try {
      loadDispatch({
        type: `${actionName}_REQUEST`,
        payload: { message: "Cart items are adding..." },
      });
      const res = await axiosInstance.post("cart", data);
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

  const updateToCart = useCallback(async (data) => {
    const actionName = "UPDATE_CART";
    try {
      loadDispatch({
        type: `${actionName}_REQUEST`,
        payload: { message: "Cart items are updating..." },
      });
      const res = await axiosInstance.put(`cart/${data.id}`, data);
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

  const deleteCartItem = useCallback(async (data) => {
    const actionName = "DELETE_CART";
    try {
      loadDispatch({
        type: `${actionName}_REQUEST`,
        payload: { message: "Cart items are Deleting..." },
      });
      await axiosInstance.delete(`cart/${data.id}`);
      successDispatch({
        type: `${actionName}_SUCCESS`,
        payload: data,
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
      loadCart,
      cart,
      
      addToCart,
      updateToCart,
      deleteCartItem,
    }),
    [loadCart, cart, addToCart, updateToCart, deleteCartItem]
  );
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
