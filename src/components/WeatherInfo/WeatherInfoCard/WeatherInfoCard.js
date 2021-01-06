import React from 'react';
import PropTypes from 'prop-types';

import Map from './../../Map/Map';

import { CardContent, Card, makeStyles } from '@material-ui/core';

import WeatherInfoCardDetails from './WeatherInfoCardDetails/WeatherInfoCardDetails';

const useCardStyles = makeStyles({
	root: {
		minWidth: 100,
	},
	bullet: {
		display: 'inline-block',
		margin: '0 2px',
		transform: 'scale(0.8)',
	},
	title: {
		fontSize: 16,
	},
	pos: {
		marginBottom: 12,
	},
});

const WeatherInfoCard = ({ weather }) => {
	const cardStyles = useCardStyles();

	return (
		<Card className={cardStyles.root}>
			<CardContent>
				<WeatherInfoCardDetails weather={weather} />

				<Map city={weather.name} />
			</CardContent>
		</Card>
	);
};

WeatherInfoCard.propTypes = {
	weather: PropTypes.object.isRequired,
};

export default WeatherInfoCard;
