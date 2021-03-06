import React, { memo } from 'react';
import PropTypes from 'prop-types';

import { Container, Typography } from '@material-ui/core';

import Card from './../../containers/Card/Card';

const WeatherInformation = (props) => {
	return (
		<Container
			style={{
				marginTop: 35,
				paddingLeft: 0,
				paddingRight: 0,
			}}
		>
			<Typography display='inline' color='primary' variant='h3'>
				{props.weather.location.name}
			</Typography>
			<Typography display='inline' color='primary' variant='subtitle1'>
				{props.weather.location.country}
			</Typography>

			<Card weather={props.weather} />
		</Container>
	);
};

WeatherInformation.propTypes = {
	weather: PropTypes.object.isRequired,
};

export default memo(
	WeatherInformation,
	(prevProps, nextProps) => prevProps.weather === nextProps.weather
);
