import React from "react";
import { withFormik, Form, Field } from "formik";
import { connect } from "react-redux";
import { createPost } from "../../actions";

const PostShare = props => {
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
  async handleSubmit(values, { props }) {
    props.createPost(values);
  }
})(PostShare);

export default connect(
  null,
  { createPost }
)(FormikPostShare);
