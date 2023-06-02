import React from "react";
import { RegisterInitVal, registerField } from "./RegisterFields";
import CustomForm from "../../components/CustomForm/Index";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../utils/axiosInstance";

const Register = () => {
  const navigate = useNavigate();

  const register = async (values, actions) => {
    try {
      console.log(actions);
      const { confirmPassword, ...rest } = values;
      const res = await axiosInstance.post('register', rest);
      localStorage.setItem('token',JSON.stringify(res.data))
      actions.resetForm();
      navigate('/', { replace: true });
    } catch (error) {
      actions.setErrors({
        serverError: error.message,
      });
    }
  };
  return (
    <CustomForm
      initialValues={RegisterInitVal}
      fields={registerField}
      onSubmit={register}
      btnProps={{
        children: "Sign Up",
      }}
    />
  );
};

export default Register;
