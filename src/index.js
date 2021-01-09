import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import reduxThunk from 'redux-thunk';

import { Provider } from 'react-redux';

import { applyMiddleware, createStore, compose, combineReducers } from 'redux';

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

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
