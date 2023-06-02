import React, { useContext } from "react";
import { RegisterInitVal, registerField } from "./RegisterFields";
import CustomForm from "../../components/CustomForm/Index";
import { AuthContext } from "../../context/AuthContext";


const Register = () => {

  const {register}=useContext(AuthContext);

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
