import React, { Suspense, lazy } from 'react';

import { CardContent, Container, CircularProgress } from '@material-ui/core';

import Card from '@material-ui/core/Card';

import useDiscreteSlider from './../../hooks/DiscreteSlider/useDiscreteSlider';

import ForecastHour from './../../components/ForecastHour/ForecastHour';

import Error from './../../components/Error/Error';

import Select from './../../components/Select/Select';

import { isMobile } from 'mobile-device-detect';

const Slider = lazy(() => import('@material-ui/core/Slider'));

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
			<Select change={handleForecastHourChange} hour={forecastHour} />
		);

		if (!isMobile) {
			slider = (
				<Suspense fallback={<CircularProgress />}>
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
				</Suspense>
			);
		}
		render = [...new Set(forecastsinHourVersion)].map((day) => (
			<Container key={day}>
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
