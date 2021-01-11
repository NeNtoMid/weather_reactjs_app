import React from 'react';
import PropTypes from 'prop-types';

import { Container, Typography, Button } from '@material-ui/core';

import WeatherIcon from './../UI/WeatherIcon/WeatherIcon';

import { FormattedMessage, useIntl } from 'react-intl';

const CardDetails = ({ weather, click, show, isInSlider, shouldMathRound }) => {
	let details = null;

	const language = useIntl().locale;

	if (!show) {
		details = (
			<Button
				style={{ marginTop: 10 }}
				variant='contained'
				color='primary'
				onClick={click}
			>
				<FormattedMessage id='cardDetails.showDetailsBtn' />
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
					<i className='fas fa-wind'></i>
					<FormattedMessage id='cardDetails.windDegree' />:{' '}
					{Math.round(weather.current.wind_degree)} <strong>&#176;:</strong>
				</Typography>
				<Typography
					variant='button'
					display='block'
					align='left'
					color='textPrimary'
				>
					<i className='fas fa-cloud'></i>{' '}
					<FormattedMessage id='cardDetails.clouds' />: {weather.current.cloud}
				</Typography>
				<Typography
					variant='button'
					display='block'
					align='left'
					color='textPrimary'
				>
					<i className='fas fa-arrow-right'></i>{' '}
					<FormattedMessage id='cardDetails.gustOfWind' />:{'  '}
					{weather.current.gust_kph} <strong>km/h</strong>
				</Typography>
				<Typography
					variant='button'
					display='block'
					align='left'
					color='textPrimary'
				>
					<i className='fas fa-flag'></i>{' '}
					<FormattedMessage id='cardDetails.timezone' />:{'  '}
					<strong>{weather.location.tz_id}</strong>
				</Typography>
				<Typography
					variant='button'
					display='block'
					align='left'
					color='textPrimary'
				>
					<i className='fas fa-arrows-alt-h'></i> {'  '}
					<FormattedMessage id='cardDetails.latitude' />:{'  '}
					<strong>{weather.location.lat}</strong>
				</Typography>
				<Typography
					variant='button'
					display='block'
					align='left'
					color='textPrimary'
				>
					<i className='fas fa-arrows-alt-v'></i>
					{'  '}
					<FormattedMessage id='cardDetails.longitude' />:{'  '}
					<strong>{weather.location.lon}</strong>
				</Typography>
				<Typography
					variant='button'
					display='block'
					align='left'
					color='textPrimary'
				>
					<i className='fas fa-clock'></i>
					{'  '}
					<FormattedMessage id='cardDetails.localTimeInCity' />:{'  '}
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
				<FormattedMessage id='cardDetails.feels_like' />{' '}
				{shouldMathRound
					? Math.round(weather.current.feelslike_c)
					: weather.current.feelslike_c}
				&#176;C {'  '}
				<FormattedMessage id='cardDetails.weather_condition' />:{' '}
				{weather.current.condition.text}
			</Typography>
			<Typography
				variant='button'
				display='block'
				align='left'
				color='textPrimary'
			>
				<i className='fas fa-tint'></i>{' '}
				<FormattedMessage id='cardDetails.humidity' />: {'  '}
				{weather.current.humidity} <strong>%</strong>
			</Typography>

			<Typography
				variant='button'
				display='block'
				align='left'
				color='textPrimary'
			>
				<i className='fas fa-filter'></i>{' '}
				<FormattedMessage id='cardDetails.pressure' />:{' '}
				{weather.current.pressure_mb} <strong>hPa</strong>
			</Typography>

			<Typography
				variant='button'
				display='block'
				align='left'
				color='textPrimary'
			>
				<i className='fas fa-location-arrow'></i>{' '}
				<FormattedMessage id='cardDetails.wind' />: {weather.current.wind_kph}{' '}
				<strong>km/h</strong>
			</Typography>

			<Typography
				variant='button'
				display='block'
				align='left'
				color='textPrimary'
			>
				<i className='fas fa-eye'></i>{' '}
				<FormattedMessage id='cardDetails.visibility' />:{' '}
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
				<FormattedMessage id='cardDetails.itIsDayOrNigth' />{' '}
				{weather.current.is_day === 0 && language === 'en'
					? 'night'
					: weather.current.is_day !== 0 && language === 'en'
					? 'day'
					: weather.current.is_day === 0 && language === 'pl'
					? 'noc'
					: weather.current.is_day !== 0 && language === 'pl'
					? 'dzień'
					: null}
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
