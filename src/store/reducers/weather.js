import produce from 'immer';

import {
	FETCH_WEATHER_DATA_SUCCESS,
	FETCH_WEATHER_DATA_FAIL,
	SET_WEATHER_ERROR,
	ADD_CITY_TO_HISTORY,
} from './../actions/actionsType';

const initialState = {
	data: {},
	history: [],
	error: false,
};

const fetchedWeatherDataSuccess = (draft, data) => {
	draft.data = data;
};

const setWeatherError = (draft, err) => {
	draft.error = err;
};

const addedCityToHistory = (draft) => {
	const searchedCity =
		Object.keys(draft.data).length > 0 &&
		`${draft.data.location.name} , ${draft.data.location.country}`;

	if (searchedCity && draft.history.every((el) => el !== searchedCity)) {
		draft.history.push(searchedCity);
	}
};

const weatherReducer = (state = initialState, action) => {
	return produce(state, (draft) => {
		switch (action.type) {
			case FETCH_WEATHER_DATA_SUCCESS:
				fetchedWeatherDataSuccess(draft, action.payload.data);
				break;

			case FETCH_WEATHER_DATA_FAIL:
				setWeatherError(draft, action.payload.error);

				break;

			case SET_WEATHER_ERROR:
				setWeatherError(draft, action.payload.error);
				break;

			case ADD_CITY_TO_HISTORY:
				addedCityToHistory(draft);
				break;
			default:
				break;
		}
	});
};

export default weatherReducer;
