import React from "react";
import { withFormik, Form, Field } from "formik";
import Yup from "yup";

const UserRegister = ({ values }) => {
  return (
    <Form>
      <Field type="email" name="email" placeholder="Email" />
      <Field type="password" name="password" placeholder="Password" />
      <button>Submit</button>
    </Form>
  );
};

const Register = withFormik({
  mapPropsToValues({ email, password }) {
    return {
      email: email || "",
      password: password || ""
    };
  },
  handleSubmit(values) {
    console.log(values);
  }
})(UserRegister);

export default Register;
