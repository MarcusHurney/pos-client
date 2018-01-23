import React, { Component } from 'react';
import Routes from '../routes';
import styles from './App.scss';

export default () => (
  <div className={styles.root_flexbox}>
    <div className={styles.app_container}>
      <Routes />
    </div>
  </div>
);
