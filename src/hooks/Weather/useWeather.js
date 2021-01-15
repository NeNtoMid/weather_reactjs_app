import { useState, useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import {
	fetchWeatherData,
	setWeatherError,
	addCityToHistory,
	deleteForecastData,
} from './../../store/actions/index';

import { useIntl } from 'react-intl';

const useWeather = () => {
	const dispatch = useDispatch();

	const weatherData = useSelector((state) => state.wth.data);

	const history = useSelector((state) => state.wth.history);

	let error = useSelector((state) => state.wth.error);

	const [input, setInput] = useState({
		value: '',
		inputError: '',
	});

	const language = useIntl().locale;

	if (language === 'pl' && error) {
		error = 'Nie można znaleźć takiego miasta';
	} else if (language === 'en' && error) {
		error = `Can't find city`;
	}

	const handleInputUpdate = ({ target: { value } }) => {
		let err = '';

		clearError();

		if (error) {
			err = 'Nie można znaleźć takiego miasta';
		}

		if (
			value !== '' &&
			value.search(
				/^([a-zA-Z\u0080-\u024F]+(?:. |-| |'))*[a-zA-Z\u0080-\u024F]*$/
			) === -1
		) {
			err =
				language === 'en'
					? `You can't use ! @ # $ % ^ & * ( ) + - = etc.`
					: `Nie możesz używać ! @ # $ % ^ & * ( ) + - = etc.`;
		}

		setInput((prevState) => ({
			...prevState,
			value,
			inputError: err,
		}));
	};

	const clearError = () => {
		dispatch(setWeatherError(false));
	};

	useEffect(() => {
		let timer;

		const handleFetchWeatherData = () => {
			timer = setTimeout(() => {
				dispatch(fetchWeatherData(input.value, language));

				dispatch(deleteForecastData());
			}, 1000);
		};

		if (!input.inputError) {
			handleFetchWeatherData();
		}

		return () => {
			clearTimeout(timer);
		};
	}, [input.value, input.inputError, dispatch, language]);

	useEffect(() => {
		dispatch(addCityToHistory());
	}, [weatherData, dispatch]);

	return {
		weatherData,
		input,
		error,
		history,
		handleInputUpdate,
		clearError,
	};
};

export default useWeather;
