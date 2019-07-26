import React from "react";
import { withFormik, Form, Field } from "formik";
import { connect } from "react-redux";
import { createPost } from "../../actions";
import history from "../../history";
import Modal from "../Modal";
import "./post.css";

const PostShare = () => {
  const renderContent = () => {
    return (
      <React.Fragment>
        <Form className="ui form">
          <Field
            type="text"
            name="post"
            placeholder="What's happening?"
            autocomplete="off"
          />
          <button type="submit" className="button-postshare">
            Tweet
          </button>
        </Form>
      </React.Fragment>
    );
  };

  return (
    <Modal content={renderContent()} onDismiss={() => history.push("/")} />
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
