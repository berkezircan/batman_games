import {
  GAME_LIST_FAIL,
  GAME_LIST_REQUEST,
  GAME_LIST_SUCCESS,
  SINGLE_GAME_FAIL,
  SINGLE_GAME_REQUEST,
  SINGLE_GAME_SUCCESS,
} from '../constants';

export const gameListReducer = (state = { games: [] }, action) => {
  switch (action.type) {
    case GAME_LIST_REQUEST:
      return { loading: true, games: [] };
    case GAME_LIST_SUCCESS:
      return { loading: false, games: action.payload };
    case GAME_LIST_FAIL:
      return { loading: false, error: action.errorMessage };
    default:
      return state;
  }
};

export const gameReducer = (state = { game: {} }, action) => {
  switch (action.type) {
    case SINGLE_GAME_REQUEST:
      return { loading: true, ...state };
    case SINGLE_GAME_SUCCESS:
      return { loading: false, game: { ...action.payload } };
    case SINGLE_GAME_FAIL:
      return { loading: false, error: action.errorMessage };

    default:
      return state;
  }
};
