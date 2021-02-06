import axios from 'axios';
import {
  GAME_LIST_FAIL,
  GAME_LIST_REQUEST,
  GAME_LIST_SUCCESS,
  SINGLE_GAME_FAIL,
  SINGLE_GAME_REQUEST,
  SINGLE_GAME_SUCCESS,
} from '../constants';

export const listGames = () => async (dispatch) => {
  try {
    dispatch({ type: GAME_LIST_REQUEST });

    const { data } = await axios.get(
      'https://www.cheapshark.com/api/1.0/games?title=batman&limit=60&exact=0'
    );

    dispatch({
      type: GAME_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GAME_LIST_FAIL,
      errorMessage: 'Unable to list all games',
    });
  }
};

export const listSingleGame = (id) => async (dispatch) => {
  try {
    dispatch({ type: SINGLE_GAME_REQUEST });

    const { data } = await axios.get(
      `https://www.cheapshark.com/api/1.0/games?id=${id}`
    );
    dispatch({
      type: SINGLE_GAME_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: SINGLE_GAME_FAIL,
    });
  }
};
