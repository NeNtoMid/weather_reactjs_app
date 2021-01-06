import { useState, useEffect } from 'react';

import axios from 'axios';

const useWeather = () => {
	const [weather, setWeather] = useState({
		option: [],
		input: '',
		history: [],
	});

	const [input, setInput] = useState({
		value: '',
		inputError: '',
	});

	const handleInputUpdate = ({ target: { value } }) => {
		let err = '';

		if (value !== '' && value.search(/^[a-zA-Z\d\-_.,\s]+$/g) === -1) {
			err = `You can't use ! @ # $ % ^ & * ( ) + - =`;
		}

		setInput((prevState) => ({
			...prevState,
			value,
			inputError: err,
		}));
	};

	const [error, setError] = useState(false);

	const clearError = () => {
		setError(false);
	};

	useEffect(() => {
		let timer;

		const handleFetchingWeather = () => {
			timer = setTimeout(async () => {
				try {
					const results = await axios.get(
						`https://api.openweathermap.org/data/2.5/weather?q=${
							input.value ? input.value : 'Warsaw'
						}&appid=b87335950c8c62d9aac7b3d0ff68a1e8&units=imperial`
					);

					setWeather((prevState) => ({
						...prevState,
						option: results.data,
						error: false,
					}));
				} catch ({ message }) {
					if (message === 'Network Error') {
						setError(message);
					}
					console.log(message);
				}
			}, 1000);
		};

		if (!input.inputError) {
			handleFetchingWeather();
		}

		return () => {
			clearTimeout(timer);
		};
	}, [input.value, input.inputError]);

	useEffect(() => {
		const searchedOption =
			Object.keys(weather.option).length > 0 &&
			`${weather.option.name} , ${weather.option.sys.country}`;

		if (
			searchedOption &&
			weather.history.every((el) => el !== searchedOption)
		) {
			setWeather((prevState) => ({
				...prevState,
				history: [...prevState.history, searchedOption],
			}));
		}
	}, [input.value, weather.option, weather.history]);

	return {
		weather,
		input,
		error,
		handleInputUpdate,
		clearError,
	};
};

export default useWeather;
