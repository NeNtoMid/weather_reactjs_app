import React from 'react';
import PropTypes from 'prop-types';

import { Container, Typography } from '@material-ui/core';

import ClimateIcon from './../../../UI/ClimateIcon/ClimateIcon';

const WeatherInfoCardDetails = ({ weather }) => {
	return (
		<Container>
			<ClimateIcon weatherIcon={weather.weather[0].icon} />

			<Typography variant='h3' display='inline' gutterBottom>
				{'  '} {Math.round(weather.main.temp)}&#176;C
			</Typography>
			<Typography color='textSecondary' gutterBottom>
				Feels like {Math.round(weather.main.feels_like)}&#176;C
				{'  '}
				Mainly {weather.weather[0].main}. {'  '}{' '}
				{weather.weather[0].description.charAt(0).toUpperCase() +
					weather.weather[0].description.slice(1)}
			</Typography>
			<Typography
				variant='button'
				display='block'
				align='left'
				color='textPrimary'
			>
				<i className='fas fa-tint'></i> Humidity:{weather.main.humidity}{' '}
				<strong>%</strong>
			</Typography>

			<Typography
				variant='button'
				display='block'
				align='left'
				color='textPrimary'
			>
				<i className='fas fa-filter'></i> Pressure:{weather.main.pressure}{' '}
				<strong>hPa</strong>
			</Typography>

			<Typography
				variant='button'
				display='block'
				align='left'
				color='textPrimary'
			>
				<i className='fas fa-location-arrow'></i> Wind:
				{weather.wind.speed} <strong>m/s</strong>
			</Typography>

			<Typography
				variant='button'
				display='block'
				align='left'
				color='textPrimary'
			>
				<i className='fas fa-eye-slash'></i> Visibility:
				{Math.round(weather.visibility / 1000)} <strong>km</strong>
			</Typography>
		</Container>
	);
};

WeatherInfoCardDetails.propTypes = {
	weather: PropTypes.object.isRequired,
};

export default WeatherInfoCardDetails;
