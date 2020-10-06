import React from 'react';
import { Button, Card, CardDeck } from 'react-bootstrap';

export const Portfolio = (props) =>  {
  const btnColor = props.btnColor;
  const theme = props.theme;

  return(
    <div className='container'>
      <h1>Portfolio</h1>
      <br />
      <div>
        <CardDeck className='mb-4'>
          <Card bg={ theme }>
            <Card.Img variant="top" src="portfolio-img.png" />
            <Card.Body>
              <Card.Title>Portfolio App</Card.Title>
              <Card.Text>
                A portfolio website designed to display some of the projects that I have worked on in the past.
                The front-end is ReactJS and bootstrapped by Create-React-App while the back-end is Express (a minimal and flexible Node.js web application framework).
              </Card.Text>
              <Button href='https://www.github.com/andacrew/portfolio-app' target='_blank' rel="noopener noreferrer" variant={ btnColor }>
                Portfolio App <i className="fab fa-github"></i>
              </Button>
            </Card.Body>
          </Card>
          <Card bg={ theme }>
            <Card.Img variant="top" src="fg-img.png" />
            <Card.Body>
              <Card.Title>Flooded Grounds</Card.Title>
              <Card.Text>
                As the Team Lead of a group of 6, we developed a First Person Shooter using Unity 2019.4.18LTS and using Unity Collaborate for version control. 
                This project was written in C# during Spring 2020 for Multiplayer Game Development at San Francisco State University.
              </Card.Text>
              <Button href='https://www.github.com/andacrew/flooded-grounds-2.0' target='_blank' rel="noopener noreferrer" variant={ btnColor }>
                Flooded Grounds <i className="fab fa-github"></i>
              </Button>
            </Card.Body>
          </Card>
          <Card bg={ theme }>
            <Card.Img variant="top" src="rm-tasks.png" />
            <Card.Body>
              <Card.Title>Roommate Tasks</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <Button href='https://www.github.com/andacrew/roommatetasks' target='_blank' rel="noopener noreferrer" variant={ btnColor }>
                Roommate Tasks <i className="fab fa-github"></i>
              </Button>
            </Card.Body>
          </Card>
        </CardDeck>
      </div>        
    </div>
  );
}