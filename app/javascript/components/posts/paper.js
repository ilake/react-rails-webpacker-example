"use strict";

import React from 'react';

var Paperla = React.createClass({
  propTypes: {
    title: React.PropTypes.string
  },

  render: function() {
    return (
      <div>
        <div>Title: {this.props.title}</div>
      </div>
    );
  }
});

export default Paperla;
