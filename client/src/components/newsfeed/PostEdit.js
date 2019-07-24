import React from "react";
import { connect } from "react-redux";
import { withFormik, Form, Field } from "formik";
import { fetchPost, editPost } from "../../actions";

class PostEdit extends React.Component {
  componentDidMount() {
    this.props.fetchPost(this.props.match.params.id);
  }

  render() {
    if (!this.props.post) return null;
    return (
      <div>
        <div>{this.props.post.post}</div>
        <div>
          <Form className="ui form">
            <Field type="text" name="post" />
            <button className="ui button primary">Tweet</button>
          </Form>
        </div>
      </div>
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
  return { post: state.posts[ownProps.match.params.id] };
};

export default connect(
  mapStateToProps,
  { fetchPost, editPost }
)(FormikPostEdit);
