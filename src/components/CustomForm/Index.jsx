import { Field, Form, Formik } from "formik";
import React from "react";

const CustomForm = ({ fields, btnProps, children, ...props }) => {
  return (
    <Formik {...props}>
      {({ isValid, dirty, isSubmitting, errors }) => (
        <Form className="space-y-3">
          {errors.serverError && (
            <p className="text-center text-red-500 text-lg font-medium">
              {errors.serverError}
            </p>
          )}
          {fields?.map((x) => (
            <Field key={x.name} {...x} />
          ))}

          {children}

          <div>
            <button
              disabled={isSubmitting || !(dirty && isValid)}
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:bg-slate-500 disabled:cursor-wait"
              {...btnProps}
            />
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default CustomForm;
