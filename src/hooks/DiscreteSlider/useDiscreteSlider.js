import { useState } from 'react';

import { makeStyles } from '@material-ui/core';

import { useSelector, useDispatch } from 'react-redux';

import { setForecastError } from './../../store/actions/index';

const useContainerStyles = makeStyles((theme) => ({
	root: {
		minWidth: 100,
		minHeight: 150,
	},
	margin: {
		height: theme.spacing(3),
	},
}));

const useCardStyles = makeStyles({
	root: {
		minWidth: 100,
		marginTop: 50,
		margin: '0 50 ',
	},
});

let number = -5;

const marks = [...new Array(24)].map((cur, i) => {
	number += 5;
	return {
		value: number,
		label: `${i}`,
	};
});

const valuetext = (value) => {
	return `${value} hour`;
};

const useDiscreteSlider = () => {
	const containerClass = useContainerStyles();

	const cardClass = useCardStyles();

	const forecastsinHourVersion = useSelector(
		(state) => state.forecast.forecastsinHourVersion
	);

	const forecastData = useSelector((state) => state.forecast.data);

	const [forecastHour, setForecastHour] = useState(0);

	const handleForecastHourChange = (event, value) => {
		const index = marks.findIndex((el) => el.value === value);

		if (index !== -1) {
			setForecastHour(index);
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
