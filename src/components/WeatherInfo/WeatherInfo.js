import React, { memo } from 'react';
import PropTypes from 'prop-types';

import { Container, makeStyles } from '@material-ui/core';

import WeatherInfoCard from './WeatherInfoCard/WeatherInfoCard';

import WeatherInfoDetails from './WeatherInfoDetails/WeatherInfoDetails';

import Animation from './../UI/Animation/Animation';

import { isMobile } from 'mobile-device-detect';

const useContainerStyles = makeStyles({
	root: {
		marginTop: 35,
	},
});

const WeatherInfo = ({ weather }) => {
	const container = useContainerStyles();

	return (
		<Container className={container.root}>
			<WeatherInfoDetails name={weather.name} country={weather.sys.country} />
			<WeatherInfoCard weather={weather} />
			{!isMobile && <Animation type={weather.weather[0].main} />}
		</Container>
	);
};

WeatherInfo.propTypes = {
	weather: PropTypes.object.isRequired,
};

export default memo(
	WeatherInfo,
	(prevProps, nextProps) => prevProps.weather === nextProps.weather
);
