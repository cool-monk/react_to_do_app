import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodos } from '../../redux';
import { withStyles } from '@material-ui/core/styles';
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
} from '@material-ui/core';
import {
  MuiPickersUtilsProvider,
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

const styles = (theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
});

export class TodoModal extends Component {
  constructor(props) {
    super(props);

    this.editor = null;

    this.state = {
      modalStyle: getModalStyle(),
      open: false,
      title: 'this is the title',
      description: 'this is description',
      priority: 'Low',
      dueDate: '02/13/2020',
      createdOn: new Date(),
    };
  }

  handlClose = () => {
    this.setState({
      open: true,
    });
    this.props.handleModalClose();
  };

  handleInputChange = (e, date) => {
    if (e.target.name === 'dueDate') {
      this.setState({ dueDate: date });
    } else {
      this.setState({ [e.target.name]: e.target.value });
    }
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    // const todo =  {

    // }
    console.log(this.props);
    await this.props.addTodos(this.state);
    await this.props.handleModalClose();
  };

  render() {
    const { classes } = this.props;
    console.log(this.state);

    return (
      <>
        <Modal
          open={!this.state.open}
          onClose={this.props.handleModalClose}
          aria-labelledby='simple-modal-title'
          aria-describedby='simple-modal-description'
        >
          <div style={this.state.modalStyle} className={classes.paper}>
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
            <form
              className={classes.root}
              noValidate
              autoComplete='off'
              onSubmit={this.handleSubmit}
            >
              <TextField
                id='standard-full-width'
                name='title'
                value={this.state.title}
                label='Title'
                onChange={this.handleInputChange}
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
                ref={this.editor}
                value={this.state.description}
                //   config={config}
                tabIndex={1} // tabIndex of textarea
                onBlur={(newContent) => {}} // preferred to use only this option to update the content for performance reasons
                onChange={(newContent) => {
                  this.setState({ description: newContent });
                }}
              />

              <FormControl style={{ width: '100%' }}>
                <InputLabel id='demo-simple-select-label'>Priority</InputLabel>
                <Select
                  labelId='demo-simple-select-label'
                  id='demo-simple-select'
                  value={this.state.priority}
                  name='priority'
                  onChange={this.handleInputChange}
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
                    value={this.state.dueDate}
                    name='dueDate'
                    autoOk
                    onChange={(value) => {
                      this.setState({ dueDate: value });
                    }}
                    animateYearScrolling='true'
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
                  onClick={this.handlClose}
                >
                  Discard
                </Button>
                <Button
                  variant='contained'
                  color='primary'
                  endIcon={<SaveIcon></SaveIcon>}
                  type='submit'
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
}

const mapDispatchToProps = (dispatch) => {
  return {
    addTodos: (todo) => {
      dispatch(addTodos(todo));
    },
  };
};

export default connect(null, mapDispatchToProps)(withStyles(styles)(TodoModal));
