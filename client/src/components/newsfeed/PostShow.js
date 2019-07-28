import React from "react";
import { connect } from "react-redux";
import { fetchPost } from "../../actions";
import "./post.css";

class PostShow extends React.Component {
  componentDidMount() {
    this.props.fetchPost(this.props.match.params.id);
  }

  render() {
    if (!this.props.post) {
      return <div>Loading...</div>;
    }
    return (
      <div className="ui container postshow-content-div">
        <p className="postshow-content-text">{this.props.post.post}</p>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    post: state.posts[ownProps.match.params.id]
  };
};

export default connect(
  mapStateToProps,
  { fetchPost }
)(PostShow);
