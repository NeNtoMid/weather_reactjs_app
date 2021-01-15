import React from 'react';

import { CardContent, Container } from '@material-ui/core';

import Card from '@material-ui/core/Card';

import Slider from '@material-ui/core/Slider';

import useDiscreteSlider from './../../hooks/DiscreteSlider/useDiscreteSlider';

import ForecastHour from './../../components/ForecastHour/ForecastHour';

import Error from './../../components/Error/Error';

import Select from './../../components/Select/Select';

import { isMobile } from 'mobile-device-detect';

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
		let slider = (
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
		);

		if (isMobile) {
			slider = <Select change={handleForecastHourChange} hour={forecastHour} />;
		}
		render = [...new Set(forecastsinHourVersion)].map((day) => (
			<Container key={day} style={{ width: !isMobile ? '170%' : '100%' }}>
				<Card className={cardClass.root} variant='outlined'>
					<CardContent>
						<Container>
							<ForecastHour
								data={forecastData.forecast.forecastday[day].hour[forecastHour]}
							/>
						</Container>
						<Container className={containerClass.root}>{slider}</Container>
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
