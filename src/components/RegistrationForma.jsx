import React from "react";
import { useDispatch } from "react-redux";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { register } from "../redux/auth/operations"; // операція для реєстрації користувача

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    dispatch(register(values))
      .then(() => {
        resetForm();
      })
      .catch((error) => {
        console.error("Registration failed: ", error);
      })
      .finally(() => {
        setSubmitting(false);
      });
  };

  return (
    <div>
      <h2>Register</h2>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
        }}
        validate={(values) => {
          const errors = {};
          if (!values.name) {
            errors.name = "Name is required";
          }
          if (!values.email) {
            errors.email = "Email is required";
          } else if (!/\S+@\S+\.\S+/.test(values.email)) {
            errors.email = "Invalid email address";
          }
          if (!values.password) {
            errors.password = "Password is required";
          }
          return errors;
        }}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <div>
              <label htmlFor="name">Name</label>
              <Field
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
              />
              <ErrorMessage name="name" component="div" />
            </div>

            <div>
              <label htmlFor="email">Email</label>
              <Field
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
              />
              <ErrorMessage name="email" component="div" />
            </div>

            <div>
              <label htmlFor="password">Password</label>
              <Field
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
              />
              <ErrorMessage name="password" component="div" />
            </div>

            <button type="submit" disabled={isSubmitting}>
              Register
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RegistrationForm;
