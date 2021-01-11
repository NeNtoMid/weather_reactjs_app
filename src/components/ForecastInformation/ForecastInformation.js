import React from 'react';

import PropTypes from 'prop-types';

import {
	Container,
	Typography,
	Button,
	ClickAwayListener,
	Tooltip,
} from '@material-ui/core';

import WeatherIcon from '../UI/WeatherIcon/WeatherIcon';

import { FormattedMessage } from 'react-intl';

const ForecastInformation = ({
	weather,
	click,
	tooltipOpen,
	tooltipClose,
	isTooltipOpen,
}) => {
	return (
		<Container>
			<WeatherIcon weatherIcon={weather.day.condition.icon} />

			<Typography variant='h4' gutterBottom align='left'>
				{'  '} Maximum {weather.day.maxtemp_c}&#176;C
			</Typography>
			<Typography variant='h5' gutterBottom align='left'>
				{'  '} Minimum {weather.day.mintemp_c}&#176;C
			</Typography>

			<Typography color='textSecondary' gutterBottom>
				<FormattedMessage id='forecastInformation.avg_temp' />
				{weather.day.avgtemp_c}&#176;C {'  '}
			</Typography>
			<Typography color='textSecondary' gutterBottom>
				<FormattedMessage id='forecastInformation.weatherCondition' />:{' '}
				{weather.day.condition.text}
			</Typography>
			<Typography
				variant='button'
				display='block'
				align='left'
				color='textPrimary'
			>
				<i className='fas fa-tint'></i> {'  '}
				<FormattedMessage id='forecastInformation.avg_humidity' />: {'  '}
				{weather.day.avghumidity} <strong>%</strong>
			</Typography>

			<Typography
				variant='button'
				display='block'
				align='left'
				color='textPrimary'
			>
				<i className='fas fa-cloud-rain'></i>
				<FormattedMessage id='forecastInformation.chanceToRain' />:{' '}
				{weather.day.daily_chance_of_rain} <strong>%</strong>
			</Typography>

			<Typography
				variant='button'
				display='block'
				align='left'
				color='textPrimary'
			>
				<i className='fas fa-snowflake'></i>{' '}
				<FormattedMessage id='forecastInformation.chanceToSnow' /> :{' '}
				{weather.day.daily_chance_of_snow} <strong>%</strong>
			</Typography>

			<Typography
				variant='button'
				display='block'
				align='left'
				color='textPrimary'
				style={{ fontSize: '0.8rem' }}
			>
				<i className='fas fa-eye'></i>{' '}
				<FormattedMessage id='forecastInformation.avg_visibility' />:{' '}
				{weather.day.avgvis_km}
				<strong>km</strong>
			</Typography>

			<Typography
				variant='button'
				display='block'
				align='left'
				color='textPrimary'
			>
				<i className='fas fa-wind'></i>{' '}
				<FormattedMessage id='forecastInformation.maxWindSpeed' />:{' '}
				{weather.day.maxwind_kph} <strong>km/h</strong>
			</Typography>
			<Typography
				variant='button'
				display='block'
				align='left'
				color='textPrimary'
			>
				<i className='fas fa-sun'></i>{' '}
				<FormattedMessage id='forecastInformation.sunrise' />:{' '}
				{weather.astro.sunrise}
			</Typography>
			<Typography
				variant='button'
				display='block'
				align='left'
				color='textPrimary'
			>
				<i className='fas fa-cloud-moon'></i>{' '}
				<FormattedMessage id='forecastInformation.sunset' />:{' '}
				{weather.astro.sunset}
			</Typography>

			<ClickAwayListener onClickAway={tooltipClose}>
				<div>
					<Tooltip
						PopperProps={{
							disablePortal: true,
						}}
						onClose={tooltipClose}
						open={isTooltipOpen}
						disableFocusListener
						disableHoverListener
						disableTouchListener
						title={
							<Typography variant='subtitle1'>
								&#8595; <FormattedMessage id='forecastInformation.tooltipBtn' />{' '}
							</Typography>
						}
						arrow
						placement='bottom-end'
					>
						<Button
							variant='contained'
							color='primary'
							style={{ marginTop: 10 }}
							onClick={() => {
								click();
								tooltipOpen();
							}}
						>
							<FormattedMessage id='forecastInformation.seeHourVersionBtn' />
						
						</Button>
					</Tooltip>
				</div>
			</ClickAwayListener>
		</Container>
	);
};

ForecastInformation.propTypes = {
	click: PropTypes.func.isRequired,
	weather: PropTypes.object.isRequired,
	tooltipOpen: PropTypes.func.isRequired,
	tooltipClose: PropTypes.func.isRequired,
	isTooltipOpen: PropTypes.bool.isRequired,
};

export default ForecastInformation;
