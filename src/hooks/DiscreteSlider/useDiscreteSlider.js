import { useState } from 'react';

import { makeStyles } from '@material-ui/core';

import { useSelector, useDispatch } from 'react-redux';

import { setForecastError } from './../../store/actions/index';

import { isMobile } from 'mobile-device-detect';

const useContainerStyles = makeStyles((theme) => ({
	root: {
		minWidth: !isMobile ? 480 : 0,
	},
	margin: {
		height: theme.spacing(3),
	},
}));

const useCardStyles = makeStyles({
	root: {
		minWidth: !isMobile ? 470 : 0,
		marginTop: 50,
		margin: '0 50 ',
	},
});

let number;

let marks;

let valuetext;

if (!isMobile) {
	number = -5;

	marks = [...new Array(24)].map((cur, i) => {
		number += 5;
		return {
			value: number,
			label: `${i}`,
		};
	});

	valuetext = (value) => {
		return `${value} hour`;
	};
}

const useDiscreteSlider = () => {
	const containerClass = useContainerStyles();

	const cardClass = useCardStyles();

	const forecastsinHourVersion = useSelector(
		(state) => state.forecast.forecastsinHourVersion
	);

	const forecastData = useSelector((state) => state.forecast.data);

	const [forecastHour, setForecastHour] = useState(0);

	const handleForecastHourChange = (event, value) => {
		if (isMobile) {
			setForecastHour(event.target.value);
		} else {
			const index = marks.findIndex((el) => el.value === value);

			if (index !== -1) {
				setForecastHour(index);
			}
		}
	};

	const error = useSelector((state) => state.forecast.error);

	const dispatch = useDispatch();

	const clearError = () => {
		dispatch(setForecastError(false));
	};

	return {
		containerClass,
		cardClass,
		marks,
		forecastsinHourVersion,
		forecastData,
		forecastHour,
		error,
		handleForecastHourChange,
		clearError,
		valuetext,
	};
};

export default useDiscreteSlider;
