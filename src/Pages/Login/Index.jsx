import { Field } from "formik";
import React, { useContext } from "react";
import CustomForm from "../../components/CustomForm/Index";
import { loginFields, loginInitVal } from "./LoginFields";
import checkbox from "../../components/checkbox/Index";
import { AuthContext} from "../../context/AuthContext";

const Login = () => {
  
  const {login}=useContext(AuthContext)
  
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
