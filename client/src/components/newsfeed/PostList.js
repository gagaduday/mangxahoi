import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchPosts } from "../../actions";
import { Button, Popup } from "semantic-ui-react";

class PostList extends React.Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  renderAdmin(post) {
    if (post.userId === this.props.currentUserId && post.userId !== null) {
      return (
        <Popup on="click" pinned trigger={<div>...</div>}>
          <Link to={`/posts/edit/${post.id}`}>Edit</Link>
          <Link>Delete</Link>
        </Popup>
      );
    }
  }

  renderList() {
    return this.props.posts.map(post => {
      return (
        <div className="item" key={post.id}>
          <div className="content">{post.post}</div>
          {this.renderAdmin(post)}
        </div>
      );
    });
  }

  render() {
    return <div className="ui celled list">{this.renderList()}</div>;
  }
}

const mapStateToProps = state => {
  return {
    posts: Object.values(state.posts),
    currentUserId: state.auth.userId
  };
};

export default connect(
  mapStateToProps,
  { fetchPosts }
)(PostList);
