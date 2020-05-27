import React from 'react';
import { Container, Grid } from '@material-ui/core';
import styles from './Heading.module.css';
import cx from 'classnames';

function Heading() {
  return (
    <Container maxWidth='md'>
      <div className={styles.textCenter}>
        <h1>
          <span className={cx(styles.logoLeft, styles.logo)}>TO</span>
          <span className={cx(styles.logoright, styles.logo)}>DO</span>
        </h1>
        <p className={styles.logoText}>Manage your works here.</p>

        {/* date */}
      </div>
    </Container>
  );
}

export default Heading;
