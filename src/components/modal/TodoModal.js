import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
// import  from '@material-ui/core/TextField';
import {
  Typography,
  TextField,
  Box,
  FormControl,
  MenuItem,
  InputLabel,
  Select,
} from '@material-ui/core';
import { red } from '@material-ui/core/colors';

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      position: 'absolute',
      width: 500,
      backgroundColor: theme.palette.background.paper,
      border: '1px solid grey',
      borderRadius: 10,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  })
);

export default function SimpleModal(props) {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(true);
    props.handleModalClose();
  };

  return (
    <>
      <p>this is it</p>
      <Modal
        open={!open}
        onClose={handleClose}
        aria-labelledby='simple-modal-title'
        aria-describedby='simple-modal-description'
      >
        <div style={modalStyle} className={classes.paper}>
          <Box>
            <div>
              <Typography
                variant='h5'
                display='inline'
                style={{ color: 'red' }}
              >
                TO
              </Typography>
              <Typography
                variant='h5'
                display='inline'
                style={{ color: '#000' }}
              >
                DO
              </Typography>
            </div>
            <Typography variant='subtitle1'>CREATE NEW</Typography>
          </Box>
          <form className={classes.root} noValidate autoComplete='off'>
            <TextField
              id='outlined-full-width'
              label='Title'
              style={{ margin: 8 }}
              placeholder='Title'
              helperText='Full width!'
              fullWidth
              margin='normal'
              InputLabelProps={{
                shrink: true,
              }}
              variant='outlined'
            />

            <FormControl style={{ width: '100%' }}>
              <InputLabel id='demo-simple-select-label'>Priority</InputLabel>
              <Select
                labelId='demo-simple-select-label'
                id='demo-simple-select'
                value='Low'
              >
                <MenuItem value={'Low'}>Low</MenuItem>
                <MenuItem value={'Medium'}>Medium</MenuItem>
                <MenuItem value={'High'}>High</MenuItem>
              </Select>
            </FormControl>
          </form>
        </div>
      </Modal>
    </>
  );
}
