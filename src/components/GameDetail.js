import React, { useEffect, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Table } from 'react-bootstrap';

import { listSingleGame } from '../actions/gameListActions';

import timeConverter from '../utilsFunctions/timeConverter';

const GameDetail = ({
  match: {
    params: { id },
  },
}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listSingleGame(id));
  }, [dispatch, id]);

  const currentGame = useSelector((state) => state.gameDetail);

  // const {
  //   loading,
  //   game: { deals, info },
  // } = currentGame;

  if (!currentGame.loading) {
    console.log(currentGame);
  }

  return (
    <Fragment>
      {!currentGame.loading ? (
        <Fragment>
          <h1>{currentGame.game.info.title}</h1>
          <h4 className="text-muted">
            Cheapest Price: ${currentGame.game.cheapestPriceEver.price}
          </h4>
          <h4 className="text-muted">
            Cheapest Price Date:
            {timeConverter(currentGame.game.cheapestPriceEver.date)}
          </h4>
          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Username</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <td>3</td>
                <td colSpan="2">Larry the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </Table>
        </Fragment>
      ) : (
        <h1>Loading</h1>
      )}
    </Fragment>
  );
};

export default GameDetail;
