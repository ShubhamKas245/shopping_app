import React, { useCallback,createContext,useMemo,useState  } from "react";
import axiosInstance from "../utils/axiosInstance";

export const ProductsContext=createContext();

export const ProductsProvider=({children})=>{
    const [products,setProducts]=useState([]);
    const [loading,setLoading]=useState(false);
    const [error,setError]=useState(null);

    const loadProducts=useCallback(async()=>{
       try {
        setLoading(true);
        const res=await axiosInstance.get('products');
        setProducts(res.data);
       } catch (err) {
        setError(err);
       } finally {
        setLoading(false);
       }
    },[])

    const value=useMemo(()=>({
        loadProducts,
        products,
        productsLoading:loading,
        productsError:error,
    }),[loadProducts,products,loading,error])
    return (
        <ProductsContext.Provider value={value}>
            {children}
        </ProductsContext.Provider>
    )
}