import React, { useEffect } from 'react';
import { Button } from 'react-bootstrap';

export const Portfolio = (props) =>  {
  const btnColor = props.btnColor;

  useEffect(() => {
    fetch('https://api.github.com/users/andacrew/repos')
    .then(res =>res.json())
    .then(json => console.log(json))
  }, [])

  return(
    <div className='container'>
      <h1>Portfolio</h1>
      <div>
        <Button variant={ btnColor } className='mr-2'>Register</Button>
      </div>        
    </div>
  );
}