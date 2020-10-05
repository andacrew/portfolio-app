import React from 'react';
import { Button } from 'react-bootstrap';

export const Home = (props) =>  {
  const btnColor = props.btnColor;

  return(
    <div className='container'>
      <h1>Welcome</h1>
      <h3>Thank you for visiting my personal site!</h3>
      My name is Andrew and I am a recent Graduate from
      San Francisco State University with a Bachelor of Science in Computer Science.
      I am currently looking for work here in the San Francisco Bay Area as a Full Stack Software Developer.
      <div>
        <Button href='https://www.github.com/andacrew' target='_blank' rel="noopener noreferrer" variant={ btnColor } className='mr-2' size='lg'>
          <i class="fab fa-github"></i>
        </Button>
        <Button href='https://www.linkedin.com/in/andrew-copas/' target='_blank' rel="noopener noreferrer" variant={ btnColor } className='mr-2' size='lg'>
          <i class="fab fa-linkedin-in"></i>
        </Button>
        <Button href={`mailto:andrew.t.copas@gmail.com`} variant={ btnColor } size='lg'>
          <i class="far fa-envelope"></i>
        </Button>
      </div>
    </div>
  );
}