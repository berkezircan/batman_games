import React from 'react';

import { Card, Button } from 'react-bootstrap';

const Game = ({ game: { thumb, external, gameID, cheapest } }) => {
  return (
    <Card className="my-3 p-3">
      <Card.Img variant="top" style={{ height: '200px' }} src={thumb} />
      <Card.Body>
        <Card.Title>{external}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          Cheapest Price: <strong>{cheapest}</strong>
        </Card.Subtitle>
        <Button className="mt-3" variant="primary">
          See Details
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Game;
