import React from "react";
import { RegisterInitVal, registerField } from "./RegisterFields";
import CustomForm from "../../components/CustomForm/Index";

const wait = (time) => new Promise((resolve) => setTimeout(resolve, time));

const Register = () => {
  return (
    <CustomForm
      initialValues={RegisterInitVal}
      fields={registerField}
      onSubmit={async (values) => {
        await wait(2000);
        console.log(values);
      }}
      btnProps={{
        children: "Sign Up",
      }}
    />
  );
};

export default Register;
