import React from 'react';
import { Button } from 'react-bootstrap';

export const Contact = (props) =>  {
  const btnColor = props.btnColor;

  return(
    <div className='container'>
      <h1>Contact</h1>
      <div>
        <Button variant={ btnColor } className='mr-2'>Register</Button>
      </div>        
    </div>
  );
}