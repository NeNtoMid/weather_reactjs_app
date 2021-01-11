import React from 'react';

import { CardContent, Container } from '@material-ui/core';

import Card from '@material-ui/core/Card';

import Slider from '@material-ui/core/Slider';

import useDiscreteSlider from './../../hooks/DiscreteSlider/useDiscreteSlider';

import ForecastHour from './../../components/ForecastHour/ForecastHour';

import Error from './../../components/Error/Error';

const DiscreteSlider = () => {
	const {
		containerClass,
		marks,
		forecastsinHourVersion,
		forecastData,
		forecastHour,
		cardClass,
		error,
		valuetext,
		handleForecastHourChange,
		clearError,
	} = useDiscreteSlider();

	let render = null;

	if (forecastsinHourVersion.length > 0) {
		render = [...new Set(forecastsinHourVersion)].map((day) => (
			<Container key={day} fixed style={{ width: '170%' }}>
				<Card className={cardClass.root} variant='outlined'>
					<CardContent>
						<Container>
							<ForecastHour
								data={forecastData.forecast.forecastday[day].hour[forecastHour]}
							/>
						</Container>
						<Container className={containerClass.root}>
							<Slider
								style={{ marginTop: 50, fontSize: '3rem' }}
								defaultValue={0}
								getAriaValueText={valuetext}
								aria-labelledby='discrete-slider-always'
								step={5}
								max={115}
								marks={marks}
								onChangeCommitted={handleForecastHourChange}
							/>
						</Container>
					</CardContent>
				</Card>
			</Container>
		));
	}

	return (
		<>
			{render}
			<Error err={error} onClose={clearError} />
		</>
	);
};

export default DiscreteSlider;
