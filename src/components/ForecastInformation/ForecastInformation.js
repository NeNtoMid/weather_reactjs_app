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
				Average temperature {weather.day.avgtemp_c}&#176;C {'  '}
			</Typography>
			<Typography color='textSecondary' gutterBottom>
				Weather condition: {weather.day.condition.text}
			</Typography>
			<Typography
				variant='button'
				display='block'
				align='left'
				color='textPrimary'
			>
				<i className='fas fa-tint'></i> {'  '}Average humidity: {'  '}
				{weather.day.avghumidity} <strong>%</strong>
			</Typography>

			<Typography
				variant='button'
				display='block'
				align='left'
				color='textPrimary'
			>
				<i className='fas fa-cloud-rain'></i>Chance to rain:{' '}
				{weather.day.daily_chance_of_rain} <strong>%</strong>
			</Typography>

			<Typography
				variant='button'
				display='block'
				align='left'
				color='textPrimary'
			>
				<i className='fas fa-snowflake'></i> Chance to snow:{' '}
				{weather.day.daily_chance_of_snow} <strong>%</strong>
			</Typography>

			<Typography
				variant='button'
				display='block'
				align='left'
				color='textPrimary'
				style={{ fontSize: '0.8rem' }}
			>
				<i className='fas fa-eye'></i> Average visibility:{' '}
				{weather.day.avgvis_km}
				<strong>km</strong>
			</Typography>

			<Typography
				variant='button'
				display='block'
				align='left'
				color='textPrimary'
			>
				<i className='fas fa-wind'></i>Max wind speed: {weather.day.maxwind_kph}{' '}
				<strong>km/h</strong>
			</Typography>
			<Typography
				variant='button'
				display='block'
				align='left'
				color='textPrimary'
			>
				<i className='fas fa-sun'></i> Sunrise: {weather.astro.sunrise}
			</Typography>
			<Typography
				variant='button'
				display='block'
				align='left'
				color='textPrimary'
			>
				<i className='fas fa-cloud-moon'></i> Sunset: {weather.astro.sunset}
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
						title={<Typography variant='subtitle1'>&#8595; Go down</Typography>}
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
							See hour version
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
