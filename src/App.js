import React from 'react';
import { Heading } from './components';
import AddCircleIcon from '@material-ui/icons/AddCircle';

function App() {
  return (
    <div className='App'>
      <Heading></Heading>
      <AddCircleIcon
        color='secondary'
        style={{ fontSize: 60, position: 'fixed', bottom: '10%', right: '10%' }}
      >
        add_circle
      </AddCircleIcon>
    </div>
  );
}

export default App;
