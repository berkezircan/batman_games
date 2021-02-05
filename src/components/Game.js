import React from 'react';

import { Card, Button } from 'react-bootstrap';

const Game = (props) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img
        variant="top"
        style={{ height: '200px' }}
        src="https://originassets.akamaized.net/origin-com-store-final-assets-prod/195763/142.0x200.0/1040463_MB_142x200_en_US_^_2017-09-08-15-21-36_d7034d41216b6dc201fb20e0cee37c1e66190a11.jpg"
      />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          Cheapest Price: $2.99
        </Card.Subtitle>
        <Button className="mt-3" variant="primary">
          See Details
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Game;
