import React, { Component } from 'react';
import logo from '../../../assets/img/logo.png';
import styles from '../styles/Common.scss';

class Common extends Component {
  render() {
    return (
      <div className={styles.container}>
        <div>
          <img className={styles.logo} src={logo} />
          <p className={styles.yo}>timeout</p>
        </div>
      </div>
    );
  }
}

export default Common;
