import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles, Typography, Container } from '@material-ui/core';

const useContainerStyles = makeStyles({
	root: {
		marginBottom: 15,
	},
});

const WeatherInfoDetails = ({ name, country }) => {
	const container = useContainerStyles();

	return (
		<Container className={container.root}>
			<Typography display='inline' color='primary' variant='h3'>
				{name}
			</Typography>
			<Typography display='inline' color='primary' variant='subtitle1'>
				{country}
			</Typography>
		</Container>
	);
};

WeatherInfoDetails.propTypes = {
	name: PropTypes.string.isRequired,
	country: PropTypes.string.isRequired,
};

export default WeatherInfoDetails;
