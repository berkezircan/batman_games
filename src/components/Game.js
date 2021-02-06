import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';

const Game = ({ game: { thumb, external, gameID, cheapest } }) => {
  return (
    <Fragment>
      <Card bg="dark" text="white" className="my-3">
        <Card.Img variant="top" style={{ height: '200px' }} src={thumb} />
        <Card.Body>
          <Card.Title color="white">{external}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Cheapest Price: <strong>{cheapest}</strong>
          </Card.Subtitle>
          <Link to={`/game/${gameID}`}>
            <Button className="mt-3" variant="info" block>
              See Details
            </Button>
          </Link>
        </Card.Body>
      </Card>
    </Fragment>
  );
};

export default Game;
