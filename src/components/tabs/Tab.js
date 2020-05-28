import React from 'react';
import { Paper, Container } from '@material-ui/core';
import Tab from '@material-ui/core/Tab';
import TabContext from '@material-ui/lab/TabContext';

// import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import AccessTimeIcon from '@material-ui/icons/AccessTime';

import { TodoTable } from '../index';

export default function LabTabs() {
  // const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  console.log(value);

  return (
    <Container maxWidth='md'>
      <Paper>
        <TabContext value={value}>
          <Tabs
            value={value}
            onChange={handleChange}
            variant='fullWidth'
            indicatorColor='secondary'
            textColor='secondary'
            aria-label='icon label tabs example'
          >
            <Tab icon={<FormatListBulletedIcon />} label='All' />
            <Tab icon={<AccessTimeIcon />} label='PENDING' />
            <Tab icon={<CheckBoxIcon />} label='COMPLETED' />
          </Tabs>
        </TabContext>
      </Paper>
      <div hidden={value !== 0}>
        <TodoTable></TodoTable>
      </div>
      <div hidden={value !== 1}>
        <Paper style={{ height: 500 }}>
          <h1>2nd tab</h1>
        </Paper>
      </div>
      <div hidden={value !== 2}>
        <Paper style={{ height: 500 }}>
          <h1>Third tab</h1>
        </Paper>
      </div>
    </Container>
  );
}
