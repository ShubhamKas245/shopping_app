import React, { createContext, useCallback, useEffect, useMemo, useState } from "react";
import axiosInstance from "../utils/axiosInstance";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(()=>{
    const token=localStorage.getItem('token');
    if(token){
      setUser(JSON.parse(token))
    }
  },[])

  const login = useCallback(async (values, actions) => {
    try {
      const { rememberMe, ...rest } = values;
      const res = await axiosInstance.post("login", rest);
      localStorage.setItem("token", JSON.stringify(res.data));
      setUser(res.data);
      actions.resetForm();
    } catch (error) {
      actions.setErrors({
        serverError: error.message,
      });
    }
  }, []);

  const register = useCallback(async (values, actions) => {
    try {
      console.log(actions);
      const { confirmPassword, ...rest } = values;
      const res = await axiosInstance.post("register", rest);
      localStorage.setItem("token", JSON.stringify(res.data));
      setUser(res.data);
      actions.resetForm();
    } catch (error) {
      actions.setErrors({
        serverError: error.message,
      });
    }
  }, []);

  const logout=useCallback(()=>{
    localStorage.clear();
    setUser(null);
  },[])

  const value = useMemo(
    () => ({ register, login, user,logout }),
    [register, login, user,logout]
  );
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
