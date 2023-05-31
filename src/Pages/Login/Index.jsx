import { Field } from "formik";
import React from "react";
import CustomForm from "../../components/CustomForm/Index";
import { loginFields, loginInitVal } from "./LoginFields";
import checkbox from "../../components/checkbox/Index";

const wait = (time) => new Promise((resolve) => setTimeout(resolve, time));

const Login = () => {
  return (
    <CustomForm
      initialValues={loginInitVal}
      fields={loginFields}
      onSubmit={async (values) => {
        await wait(2000);
        console.log(values);
      }}
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
            href="/"
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
