import React, { useEffect, Fragment } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Game from './Game';

import { listGames } from '../actions/gameListActions';

const Games = (props) => {
  const dispatch = useDispatch();

  const gameList = useSelector((state) => state.gameList);
  const { loading, error, games } = gameList;

  useEffect(() => {
    dispatch(listGames());
  }, [dispatch]);

  console.log(loading);
  console.log(games);
  return (
    <Fragment>
      <h1>Batman Games</h1>
    </Fragment>
  );
};

export default Games;
