import React from 'react';
import { Paper, Grid } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tab from '@material-ui/core/Tab';
import TabContext from '@material-ui/lab/TabContext';
import TabList from '@material-ui/lab/TabList';
import TabPanel from '@material-ui/lab/TabPanel';

// import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import PhoneIcon from '@material-ui/icons/Phone';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonPinIcon from '@material-ui/icons/PersonPin';

export default function LabTabs() {
  // const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  console.log(value);

  return (
    <>
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
            <Tab icon={<PhoneIcon />} label='RECENTS' />
            <Tab icon={<FavoriteIcon />} label='FAVORITES' />
            <Tab icon={<PersonPinIcon />} label='NEARBY' />
          </Tabs>
        </TabContext>
      </Paper>
      <div hidden={value !== 0}>
        <Paper style={{ minHeight: 500, padding: 20 }}>
          <h1>this is it</h1>
        </Paper>
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
    </>
  );
}
