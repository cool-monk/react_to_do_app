import React, { useState, useRef } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import {
  Typography,
  TextField,
  Box,
  FormControl,
  MenuItem,
  InputLabel,
  Select,
  Grid,
  Button,
  Icon,
} from '@material-ui/core';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import SaveIcon from '@material-ui/icons/Save';
import ClearIcon from '@material-ui/icons/Clear';
import JoditEditor from 'jodit-react';

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
  const editor = useRef(null);
  const [content, setContent] = useState('');

  const handleClose = () => {
    setOpen(true);
    props.handleModalClose();
  };

  return (
    <>
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
              id='standard-full-width'
              label='Title'
              style={{ margin: 8 }}
              placeholder='Title'
              helperText='Less than 200 character'
              fullWidth
              margin='normal'
              InputLabelProps={{
                shrink: true,
              }}
            />

            <Typography variant='subtitle2'>description</Typography>
            <JoditEditor
              ref={editor}
              value={content}
              //   config={config}
              tabIndex={1} // tabIndex of textarea
              onBlur={(newContent) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
              onChange={(newContent) => {}}
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
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <Grid container justify='space-around'>
                <KeyboardDatePicker
                  disableToolbar
                  variant='inline'
                  format='MM/dd/yyyy'
                  margin='normal'
                  id='date-picker-inline'
                  label='Set Due Date'
                  value='08/18/2014'
                  //   onChange={handleDateChange}
                  KeyboardButtonProps={{
                    'aria-label': 'change date',
                  }}
                  style={{ width: '100%' }}
                />
              </Grid>
            </MuiPickersUtilsProvider>

            <div className='modalActions'>
              <Button
                variant='outlined'
                color='secondary'
                startIcon={<ClearIcon></ClearIcon>}
                style={{ marginRight: '10px' }}
              >
                Discard
              </Button>
              <Button
                variant='contained'
                color='primary'
                endIcon={<SaveIcon></SaveIcon>}
              >
                Create
              </Button>
            </div>
          </form>
        </div>
      </Modal>
    </>
  );
}
