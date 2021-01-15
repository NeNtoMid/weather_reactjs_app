import React from 'react';

import useWeather from './../../hooks/Weather/useWeather';

import Search from './../../components/Search/Search';

import { Container } from '@material-ui/core';

import WeatherInformation from './../../components/WeatherInformation/WeatherInformation';

import Spinner from './../../components/UI/Spinner/Spinner';

import Error from './../../components/Error/Error';

const Weather = () => {
	const {
		weatherData,
		input,
		error,
		history,
		handleInputUpdate,

		clearError,
	} = useWeather();

	let results = <Spinner spinnerInWeather />;

	if (Object.keys(weatherData).length > 0) {
		results = <WeatherInformation weather={weatherData} />;
	}

	return (
		<Container component='main' maxWidth='lg'>
			<Search
				value={input.value}
				error={input.inputError}
				cityNotFoundErr={error}
				forwardOptionsHistory={history}
				onInputChange={handleInputUpdate}
			/>
			{results}
			<Error err={error} onClose={clearError} />
		</Container>
	);
};

export default Weather;
