import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

// Reducers
import { gameListReducer, gameReducer } from './reducers/gameListReducer';

const reducer = combineReducers({
  gameList: gameListReducer,
  gameDetail: gameReducer,
});

const middleware = [thunk];

const initialState = {
  games: [],
};

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
