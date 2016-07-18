import React, { Component, PropTypes } from 'react';
import styles from './styles';
import useSheet from 'react-jss';
import { Link } from 'react-router';

class AppPage extends Component {
  static propTypes = {
    sheet: PropTypes.any.isRequired,
  };

  render() {
    const {
      sheet,
    } = this.props;

    const { classes } = sheet;

    return (
      <div className={classes.app}>
        <h1>AppPage</h1>
        <Link to="/">Go to Launch</Link>
      </div>
    );
  }
}

export default useSheet(AppPage, styles);
