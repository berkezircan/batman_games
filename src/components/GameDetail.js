import React, { useEffect, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Table, Button } from 'react-bootstrap';

import { listSingleGame } from '../actions/gameListActions';

import timeConverter from '../utilsFunctions/timeConverter';

import Loader from './Loader';

const GameDetail = ({ match }) => {
  const dispatch = useDispatch();

  const currentGame = useSelector((state) => state.gameDetail);

  useEffect(() => {
    dispatch(listSingleGame(match.params.id));
  }, [dispatch, match]);

  const { game } = currentGame;

  return (
    <Fragment>
      {currentGame.loading ? (
        <Loader />
      ) : (
        <div className="mt-3">
          <div style={{ display: 'flex' }}>
            <img
              style={{
                height: '100px',
                marginRight: '20px',
                marginBottom: '10px',
              }}
              src={game.info.thumb}
              alt="info"
            />
            <div>
              <h1>{game.info.title.toUpperCase()}</h1>
              <h5 className="text-muted">
                Cheapest Price Ever: ${game.cheapestPriceEver.price}
              </h5>
              <h5 className="text-muted">
                Cheapest Date: {timeConverter(game.cheapestPriceEver.date)}
              </h5>
            </div>
          </div>
          <Table striped bordered hover size="sm" className="text-muted">
            <thead>
              <tr>
                <th>Price</th>
                <th>Retail Price</th>
                <th>Check Deal</th>
              </tr>
            </thead>
            <tbody>
              {game.deals.map((deal) => (
                <tr key={deal.dealID}>
                  <td>{deal.price}</td>
                  <td>{deal.retailPrice}</td>
                  <td>
                    <a
                      href={`https://www.cheapshark.com/redirect?dealID=${deal.dealID}`}
                    >
                      <Button block variant="info">
                        Discover The Deal
                      </Button>
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      )}
    </Fragment>
  );
};

export default GameDetail;
