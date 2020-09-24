import React, { useEffect } from 'react';
import { Button } from 'react-bootstrap';

export const Portfolio = (props) =>  {
  const btnColor = props.btnColor;

  return(
    <div className='container'>
      <h1>Portfolio</h1>
      <div>
        <Button variant={ btnColor } className='mr-2'>Register</Button>
      </div>        
    </div>
  );
}