import React from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../../actions";

class PostList extends React.Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  renderList() {
    return this.props.posts.map(post => {
      return (
        <div className="item" key={post.id}>
          <div className="content">{post.post}</div>
        </div>
      );
    });
  }

  render() {
    console.log(this.props.posts);
    return <div className="ui celled list">{this.renderList()}</div>;
  }
}

const mapStateToProps = state => {
  return { posts: Object.values(state.posts) };
};

export default connect(
  mapStateToProps,
  { fetchPosts }
)(PostList);
