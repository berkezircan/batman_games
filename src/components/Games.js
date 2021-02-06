import React, { useEffect, Fragment } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Game from './Game';

import { listGames } from '../actions/gameListActions';

export const Games = () => {
  const dispatch = useDispatch();

  const gameList = useSelector((state) => state.gameList);
  const { loading, error, games } = gameList;

  useEffect(() => {
    dispatch(listGames());
  }, [dispatch]);

  return (
    <Fragment>
      {loading ? (
        <h2>Loader</h2>
      ) : error ? (
        <p variant="danger">{error}</p>
      ) : (
        <Row>
          {games.map((game) => (
            <Col key={game.gameID} sm={12} md={6} lg={4} xl={3}>
              <Game game={game} />
            </Col>
          ))}
        </Row>
      )}
    </Fragment>
  );
};

export default Games;
