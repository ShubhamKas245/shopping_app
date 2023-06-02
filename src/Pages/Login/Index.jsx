import { Field } from "formik";
import React from "react";
import CustomForm from "../../components/CustomForm/Index";
import { loginFields, loginInitVal } from "./LoginFields";
import checkbox from "../../components/checkbox/Index";
import axiosInstance from "../../utils/axiosInstance";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate=useNavigate();

  const login=async(values,actions)=>{
    try {
      const {rememberMe,...rest}=values;
      const res=await axiosInstance.post('login',rest);
      localStorage.setItem('token',JSON.stringify(res.data));
      actions.resetForm();
      navigate('/',{replace:true})
      
    } catch (error) {
      actions.setErrors({
        serverError:error.message,
      })
      
    }
  }
  return (
    <CustomForm
      initialValues={loginInitVal}
      fields={loginFields}
      onSubmit={login}
      btnProps={{
        children: "Sign In",
      }}
    >
      <div className="flex items-center justify-between">
        <Field
          component={checkbox}
          id="rememberMe"
          name="rememberMe"
          label="Remember Me"
        />
        <div className="text-sm">
          <a
            href=" "
            className="font-semibold text-indigo-600 hover:text-indigo-500"
          >
            Forgot password?
          </a>
        </div>
      </div>
    </CustomForm>
  );
};

export default Login;
