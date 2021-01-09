import produce from 'immer';

import {
	FETCH_FORECAST_DATA_SUCCESS,
	FETCH_FORECAST_DATA_FAIL,
	SET_FORECAST_INTO_HOUR_VERSION,
	DELETE_FORECAST_DATA,
	SET_FORECAST_ERROR,
} from './../actions/actionsType';

const initialState = {
	data: {},
	forecastsinHourVersion: [],
	error: false,
};

const fetchedForecastDataSuccess = (draft, data) => {
	draft.data = data;
	draft.error = false;
};

const setForecastIntoHourVersion = (draft, id) => {
	draft.forecastsinHourVersion = [id];
};

const deletedForecastData = (draft) => {
	draft.data = {};
	draft.forecastsinHourVersion = [];
};

const setForecastError = (draft, err) => {
	draft.error = err;
};

const forecastReducer = (state = initialState, action) => {
	return produce(state, (draft) => {
		switch (action.type) {
			case FETCH_FORECAST_DATA_SUCCESS:
				fetchedForecastDataSuccess(draft, action.payload.data);
				break;

			case FETCH_FORECAST_DATA_FAIL:
				setForecastError(draft, action.payload.error);
				break;

			case SET_FORECAST_INTO_HOUR_VERSION:
				setForecastIntoHourVersion(draft, action.payload.id);
				break;

			case DELETE_FORECAST_DATA:
				deletedForecastData(draft);
				break;

			case SET_FORECAST_ERROR:
				setForecastError(draft, action.payload.err);
				break;
			default:
				break;
		}
	});
};

export default forecastReducer;
