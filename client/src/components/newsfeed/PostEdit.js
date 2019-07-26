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
        <div>
          <Form className="ui form">
            <Field type="text" name="post" />
            <button className="ui button primary" type="submit">
              Tweet
            </button>
          </Form>
        </div>
      </React.Fragment>
    );
  }

  render() {
    if (this.props.isFetching) return "Loading...";
    if (this.props.error) return <div>{this.props.error}</div>;
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
  mapPropsToValues: props => ({ post: props.post ? props.post.post : "" }),
  enableReinitialize: true,
  handleSubmit(values, { props }) {
    props.editPost(props.match.params.id, values);
  }
})(PostEdit);

const mapStateToProps = (state, ownProps) => {
  return {
    post: state.posts[ownProps.match.params.id],
    isFetching: state.posts.isFetching,
    error: state.posts.error
  };
};

export default connect(
  mapStateToProps,
  { fetchPost, editPost }
)(FormikPostEdit);
