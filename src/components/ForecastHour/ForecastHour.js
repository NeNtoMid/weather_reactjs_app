import React from 'react';
import PropTypes from 'prop-types';

import { Container, Typography } from '@material-ui/core';

import CardDetails from './../CardDetails/CardDetails';

import dateformat from 'dateformat';

const ForecastHour = ({ data }) => {
	const weather = {
		current: { ...data },
	};

	const day = dateformat(data.time, 'dddd');
	return (
		<Container>
			<Typography
				variant='h3'
				color='primary'
				display='inline'
				align='left'
				style={{ marginBottom: 20 }}
			>
				{day}
			</Typography>
			<CardDetails weather={weather} show isInSlider shouldMathRound={false} />{' '}
		</Container>
	);
};

ForecastHour.propTypes = {
	data: PropTypes.object.isRequired,
};

export default ForecastHour;
