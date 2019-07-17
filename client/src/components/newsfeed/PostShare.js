import React from "react";
import { withFormik, Form, Field } from "formik";

const PostShare = () => {
  return (
    <div>
      <Form className="ui form">
        <Field type="text" name="post" placeholder="What's happening?" />
        <button className="ui button primary">Tweet</button>
      </Form>
    </div>
  );
};

const FormikPostShare = withFormik({
  mapPropsToValues({ post }) {
    return {
      post: post || ""
    };
  },
  handleSubmit(values) {
    console.log(values);
  }
})(PostShare);

export default FormikPostShare;
