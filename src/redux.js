import { applyMiddleware, createStore, compose, combineReducers } from 'redux';

import reduxThunk from 'redux-thunk';

import weatherReducer from './store/reducers/weather';

import forecastReducer from './store/reducers/forecast';

const rootReducer = combineReducers({
	wth: weatherReducer,
	forecast: forecastReducer,
});

const composeEnhancers =
	process.env.NODE_ENV === 'development'
		? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
		: compose;

const store = createStore(
	rootReducer,
	composeEnhancers(applyMiddleware(reduxThunk))
);

export default store;
