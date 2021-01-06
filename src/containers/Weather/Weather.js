import React from 'react';

import useWeather from './../../hooks/Weather/useWeather';

import Search from './../../components/Search/Search';

import { Container } from '@material-ui/core';

import WeatherInfo from './../../components/WeatherInfo/WeatherInfo';

import Spinner from './../../components/UI/Spinner/Spinner';

import Error from './../../components/Error/Error';

import { useSpring, animated, config } from 'react-spring';

const Weather = () => {
	const {
		weather,
		input,
		error,
		loading,
		handleInputUpdate,
		clearError,
	} = useWeather();

	const fade = useSpring({
		config: config.stiff,
		from: { opacity: 0, transform: 'scale(0.2) translate(50px, 500px)' },
		to: { opacity: 1, transform: 'scale(1) translate(0,0)' },
		delay: 400,
	});

	let results = (
		<animated.div style={fade}>
			<Spinner spinnerInWeather />
		</animated.div>
	);

	if (weather.option.cod && weather.option.cod.toString() === '200') {
		results = (
			<animated.div style={fade}>
				<WeatherInfo weather={weather.option} />
			</animated.div>
		);
	}

	return (
		<Container component='main' maxWidth='lg'>
			<Search
				value={input.value}
				error={input.inputError}
				forwardOption={weather.history}
				onChange={handleInputUpdate}
				loading={loading}
			/>
			{results}
			<Error err={error} onClose={clearError} />
		</Container>
	);
};

export default Weather;
