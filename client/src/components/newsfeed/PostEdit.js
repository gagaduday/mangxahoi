import React from "react";
import { connect } from "react-redux";
import { withFormik, Form, Field } from "formik";
import { fetchPost, editPost } from "../../actions";
import history from "../../history";
import Modal from "../Modal";

class PostEdit extends React.Component {
  componentDidMount() {
    this.props.fetchPost(this.props.match.params.id);
  }

  renderContent() {
    return (
      <React.Fragment>
        <div>{this.props.post.post}</div>
        <div>
          <Form className="ui form">
            <Field
              type="text"
              name="post"
              // initialValues={{ post: this.props.post.post }}
              // enableReinitialize
            />
            <button className="ui button primary">Tweet</button>
          </Form>
        </div>
      </React.Fragment>
    );
  }

  render() {
    if (!this.props.post) return null;
    return (
      <Modal
        content={this.renderContent()}
        onDismiss={() => history.push("/")}
      />
    );
  }
}

const FormikPostEdit = withFormik({
  mapPropsToValues(props) {
    console.log(props);
    if (!props.post) return null;
    return {
      post: props.post.post
    };
  },
  handleSubmit(values, { props }) {
    props.editPost(props.match.params.id, values);
  }
})(PostEdit);

const mapStateToProps = (state, ownProps) => {
  return { post: state.posts[ownProps.match.params.id], isFetching: true };
};

export default connect(
  mapStateToProps,
  { fetchPost, editPost }
)(FormikPostEdit);
