import React from "react";
import Header from "../Haeder";
import { Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { ProductsProvider } from "../context/ProductContext";
import { CartProvider } from "../context/CartContext";

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);

  if (!user) {
    return <Navigate to="/auth" replace />;
  }

  return (
    <ProductsProvider>
      <CartProvider>
        <Header />
        <Outlet />
      </CartProvider>
    </ProductsProvider>
  );
};

export default DashboardLayout;
