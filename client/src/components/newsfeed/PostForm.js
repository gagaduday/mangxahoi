import React from "react";
import { withFormik, Form, Field } from "formik";

const PostForm = () => {
  return (
    <div>
      <Form className="ui form">
        <Field type="text" name="post" placeholder="What's happening?" />
        <button className="ui button primary">Tweet</button>
      </Form>
    </div>
  );
};

const FormikPostForm = withFormik({
  mapPropsToValues({ post }) {
    return {
      post: post || ""
    };
  },
  async handleSubmit(values, { props }) {
    props.createPost(values);
  }
})(PostForm);

export default FormikPostForm;
