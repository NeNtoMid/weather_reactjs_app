import React, { memo, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import { Container, Typography } from '@material-ui/core';

import Card from './../../containers/Card/Card';

import gsap from 'gsap';

const WeatherInformation = (props) => {
	const weatherInformationRef = useRef(null);

	useEffect(() => {
		const weatherElements = weatherInformationRef.current;

		gsap.fromTo(
			weatherElements.children,
			{ autoAlpha: 0, y: '+=250' },
			{ autoAlpha: 1, y: '-=250', duration: 1, delay: 0.5, stagger: 2 }
		);
	}, []);
	return (
		<Container
			style={{
				marginTop: 35,
				paddingLeft: 0,
				paddingRight: 0,
			}}
			ref={weatherInformationRef}
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
