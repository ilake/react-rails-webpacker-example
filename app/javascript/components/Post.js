import Paper from "./posts/paper.js"
import React from 'react';

class Post extends React.Component {
  render () {
    return (
      <div>
        <div><Paper title={this.props.title} /></div>
      </div>
    );
  }
}

export default Post;
