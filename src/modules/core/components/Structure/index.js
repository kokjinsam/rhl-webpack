import React, { Component, PropTypes } from 'react';

class Structure extends Component {
  static propTypes = {
    children: PropTypes.any,
  };

  render() {
    const {
      children,
    } = this.props;

    return (
      <div>
        <h1>Structure</h1>
        {children}
      </div>
    );
  }
}

export default Structure;
