import React, { useState } from 'react';
import { Heading, Tab, TodoDialog } from './components';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { Container, Modal } from '@material-ui/core';
import AddCircleIcon from '@material-ui/icons/AddCircle';

function App() {
  const [showModal, setShowModal] = useState(false);

  const handleModalClose = () => {
    setShowModal(!showModal);
  };

  return (
    <div className='App'>
      <Heading></Heading>
      <AddCircleIcon
        onClick={() => {
          setShowModal(true);
        }}
        color='secondary'
        style={{ fontSize: 60, position: 'fixed', bottom: '10%', right: '10%' }}
      >
        add_circle
      </AddCircleIcon>
      <Container maxWidth='md'>
        <Tab></Tab>
      </Container>
      {showModal ? (
        <TodoDialog handleModalClose={handleModalClose}></TodoDialog>
      ) : null}
    </div>
  );
}

export default App;
