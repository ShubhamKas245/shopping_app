import React from "react";

const Input = ({
  field, // { name, value, onChange, onBlur }
  form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  meta,
  ...props
}) => {
  return (
    <div>
      <label
        htmlFor={props.id}
        className=" block text-sm font-medium leading-6 text-gray-900"
      >
        {props.placeholder}
      </label>
      <div>
        <input
          type="name"
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-3"
          {...props}
          {...field}
        />
        {errors[field.name] && touched[field.name] && (
          <p className="text-sm text-red-500 my-1 font-semibold">
            {errors[field.name]}
          </p>
        )}
      </div>
    </div>
  );
};

export default Input;
