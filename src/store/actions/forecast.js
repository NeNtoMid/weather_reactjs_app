import axios from 'axios';

import {
	FETCH_FORECAST_DATA_SUCCESS,
	FETCH_FORECAST_DATA_FAIL,
	SET_FORECAST_INTO_HOUR_VERSION,
	DELETE_FORECAST_DATA,
	SET_FORECAST_ERROR,
} from './actionsType';

export const fetchForecastData = (city) => {
	return async (dispatch) => {
		try {
			const result = await axios.get(
				`https://api.weatherapi.com/v1/forecast.json?key=28ac7d653988484ab6c101044210701&q=${city}&days=5`
			);

			dispatch({
				type: FETCH_FORECAST_DATA_SUCCESS,
				payload: {
					data: result.data,
				},
			});
		} catch ({ message }) {
			dispatch({
				type: FETCH_FORECAST_DATA_FAIL,
				payload: {
					error: message,
				},
			});
			console.log(message);
		}
	};
};

export const setForecastIntoHourVersion = (whichDay) => {
	return {
		type: SET_FORECAST_INTO_HOUR_VERSION,
		payload: {
			id: whichDay,
		},
	};
};

export const deleteForecastData = () => {
	return {
		type: DELETE_FORECAST_DATA,
	};
};

export const setForecastError = (error) => {
	return {
		type: SET_FORECAST_ERROR,
		payload: {
			err: error,
		},
	};
};
