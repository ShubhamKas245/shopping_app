import React, { createContext, useCallback, useMemo, useState } from "react";
import axiosInstance from "../utils/axiosInstance";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [cart, setCart] = useState([]);
  const [error, setError] = useState(null);

  const loadCart = useCallback(async () => {
    try {
      setLoading(true);
      const res = await axiosInstance.get("cart");
      setCart(res.data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }, []);

  const addToCart = useCallback(async (data) => {
    try {
      setLoading(true);
      const res = await axiosInstance.post("cart", data);
      setCart((val) => [...val, res.data]);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }, []);

  const updateToCart = useCallback(async (data) => {
    try {
      setLoading(true);
      const res = await axiosInstance.put(`cart/${data.id}`, data);
      setCart((val) => {
        const index = val.findIndex((x) => x.id === data.id);
        return [...val.slice(0, index), res.data, ...val.slice(index + 1)];
      });
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }, []);

  const deleteCartItem = useCallback(async (data) => {
    try {
      setLoading(true);
      await axiosInstance.delete(`cart/${data.id}`);
      setCart((val) => {
        const index = val.findIndex((x) => x.id === data.id);
        return [...val.slice(0, index), ...val.slice(index + 1)];
      });
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }, []);

  const value = useMemo(
    () => ({
      loadCart,
      cart,
      cartLoading: loading,
      cartError: error,
      addToCart,
      updateToCart,
      deleteCartItem,
    }),
    [loadCart, cart, loading, error, addToCart, updateToCart, deleteCartItem]
  );
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
