import React from 'react';
import PropTypes from 'prop-types';

import { Container, Typography, Button } from '@material-ui/core';

import WeatherIcon from './../UI/WeatherIcon/WeatherIcon';

const CardDetails = ({ weather, click, show, isInSlider, shouldMathRound }) => {
	let details = null;

	if (!show) {
		details = (
			<Button
				style={{ marginTop: 10 }}
				variant='contained'
				color='primary'
				onClick={click}
			>
				Details
			</Button>
		);
	} else if (show && !isInSlider) {
		details = (
			<>
				<Typography
					variant='button'
					display='block'
					align='left'
					color='textPrimary'
				>
					<i className='fas fa-wind'></i> Wind degree:{' '}
					{Math.round(weather.current.wind_degree)} <strong>&#176;:</strong>
				</Typography>
				<Typography
					variant='button'
					display='block'
					align='left'
					color='textPrimary'
				>
					<i className='fas fa-cloud'></i> Clouds: {weather.current.cloud}
				</Typography>
				<Typography
					variant='button'
					display='block'
					align='left'
					color='textPrimary'
				>
					<i className='fas fa-arrow-right'></i> Gust of wind:{'  '}
					{weather.current.gust_kph} <strong>km/h</strong>
				</Typography>
				<Typography
					variant='button'
					display='block'
					align='left'
					color='textPrimary'
				>
					<i className='fas fa-flag'></i> Timezone:{'  '}
					<strong>{weather.location.tz_id}</strong>
				</Typography>
				<Typography
					variant='button'
					display='block'
					align='left'
					color='textPrimary'
				>
					<i className='fas fa-arrows-alt-h'></i> {'  '}Latitude:{'  '}
					<strong>{weather.location.lat}</strong>
				</Typography>
				<Typography
					variant='button'
					display='block'
					align='left'
					color='textPrimary'
				>
					<i className='fas fa-arrows-alt-v'></i>
					{'  '}Longitude:{'  '}
					<strong>{weather.location.lon}</strong>
				</Typography>
				<Typography
					variant='button'
					display='block'
					align='left'
					color='textPrimary'
				>
					<i className='fas fa-clock'></i>
					{'  '}Time in this city:{'  '}
					<strong>{weather.location.localtime}</strong>
				</Typography>
			</>
		);
	}

	return (
		<Container>
			<WeatherIcon weatherIcon={weather.current.condition.icon} />

			<Typography variant='h3' display='inline' gutterBottom>
				{'  '}{' '}
				{shouldMathRound
					? Math.round(weather.current.temp_c)
					: weather.current.temp_c}
				&#176;C
			</Typography>
			<Typography color='textSecondary' gutterBottom>
				Feels like{' '}
				{shouldMathRound
					? Math.round(weather.current.feelslike_c)
					: weather.current.feelslike_c}
				&#176;C {'  '}
				Weather condition: {weather.current.condition.text}
			</Typography>
			<Typography
				variant='button'
				display='block'
				align='left'
				color='textPrimary'
			>
				<i className='fas fa-tint'></i> Humidity: {'  '}
				{weather.current.humidity} <strong>%</strong>
			</Typography>

			<Typography
				variant='button'
				display='block'
				align='left'
				color='textPrimary'
			>
				<i className='fas fa-filter'></i> Pressure:{' '}
				{weather.current.pressure_mb} <strong>hPa</strong>
			</Typography>

			<Typography
				variant='button'
				display='block'
				align='left'
				color='textPrimary'
			>
				<i className='fas fa-location-arrow'></i> Wind:{' '}
				{weather.current.wind_kph} <strong>km/h</strong>
			</Typography>

			<Typography
				variant='button'
				display='block'
				align='left'
				color='textPrimary'
			>
				<i className='fas fa-eye'></i> Visibility:{' '}
				{Math.round(weather.current.vis_km)} <strong>km</strong>
			</Typography>
			<Typography
				variant='button'
				display='block'
				align='left'
				color='textPrimary'
			>
				{' '}
				{weather.current.is_day === 0 ? (
					<i className='fas fa-moon'></i>
				) : (
					<i className='fas fa-sun'></i>
				)}{' '}
				It's a {weather.current.is_day === 0 ? 'night' : 'day'}
			</Typography>
			{details}
		</Container>
	);
};

CardDetails.propTypes = {
	weather: PropTypes.object.isRequired,
	click: PropTypes.any,
	show: PropTypes.bool.isRequired,
	shouldMathRound: PropTypes.bool.isRequired,
};

export default CardDetails;
