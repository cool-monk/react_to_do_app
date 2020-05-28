import React, { Component } from 'react';

import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';

export class TodoList extends Component {
  render() {
    return (
      <>
        <TableContainer component={Paper}>
          <Table aria-label='simple table'>
            <TableHead>
              <TableRow>
                <TableCell>Title</TableCell>
                <TableCell align='right'>Priority</TableCell>
                <TableCell align='right'>Due Date</TableCell>
                <TableCell align='right'>Created On</TableCell>
                <TableCell align='right'>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow key={1}>
                <TableCell component='th' scope='row'>
                  This is the the title just for testing the row
                </TableCell>
                <TableCell align='right'>Low</TableCell>
                <TableCell align='right'>10 May, 2020</TableCell>
                <TableCell align='right'>10 May, 2020</TableCell>
                <TableCell align='right'>
                  <MoreVertIcon></MoreVertIcon>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </>
    );
  }
}

export default TodoList;
