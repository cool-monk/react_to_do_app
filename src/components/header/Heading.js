import React from 'react';
import { Container, Grid, Typography } from '@material-ui/core';
import styles from './Heading.module.css';
import cx from 'classnames';
import TodayIcon from '@material-ui/icons/Today';

function Heading() {
  return (
    <Container maxWidth='md'>
      <Container className={styles.bgImage}>
        <Typography variant='h4' className={styles.logo}>
          CM-TODO
        </Typography>
        <Typography variant='subtitle1'>
          <TodayIcon
            style={{ color: '#fff', marginBottom: '-6px' }}
          ></TodayIcon>
          <span style={{ color: '#fff' }}>Today</span>
        </Typography>
        <Typography variant='caption' style={{ color: '#fff' }}>
          Manage Your ToDos on your finger tips.
        </Typography>
        {/* <div className={styles.textCenter}>
        <h1>
          <span className={cx(styles.logoLeft, styles.logo)}>TO</span>
          <span className={cx(styles.logoright, styles.logo)}>DO</span>
        </h1>
        <p className={styles.logoText}>Manage your works here.</p>

      </div> */}
      </Container>
    </Container>
  );
}

export default Heading;
