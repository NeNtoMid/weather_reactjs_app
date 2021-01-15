import axios from 'axios';

import {
	FETCH_WEATHER_DATA_SUCCESS,
	FETCH_WEATHER_DATA_FAIL,
	SET_WEATHER_ERROR,
	ADD_CITY_TO_HISTORY,
} from './actionsType';

import converter from './../../utils/converter';

export const fetchWeatherData = (input, language) => {
	return async (dispatch) => {
		try {
			const inputWithoutDiacritics = converter(input);

			const result = await axios.get(
				`https://api.weatherapi.com/v1/current.json?key=28ac7d653988484ab6c101044210701&q=${
					inputWithoutDiacritics ? inputWithoutDiacritics : 'Warsaw'
				}&lang=${language}`
			);

			dispatch({
				type: FETCH_WEATHER_DATA_SUCCESS,
				payload: {
					data: result.data,
				},
			});
		} catch ({ message }) {
			dispatch({
				type: FETCH_WEATHER_DATA_FAIL,
				payload: {
					error: message,
				},
			});

			console.log(message);
		}
	};
};

export const setWeatherError = (err) => {
	return {
		type: SET_WEATHER_ERROR,
		payload: {
			error: err,
		},
	};
};

export const addCityToHistory = () => {
	return {
		type: ADD_CITY_TO_HISTORY,
	};
};
