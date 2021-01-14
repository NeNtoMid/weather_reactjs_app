import { useState } from 'react';

import { makeStyles } from '@material-ui/core';

import { useSelector, useDispatch } from 'react-redux';

import { setForecastIntoHourVersion } from './../../store/actions/index';

import { useIntl } from 'react-intl';

const a11yProps = (index) => {
	return {
		id: `vertical-tab-${index}`,
		'aria-controls': `vertical-tabpanel-${index}`,
	};
};

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		backgroundColor: theme.palette.background.paper,
		display: 'flex',
		height: '100%',
	},
	tabs: {
		borderRight: `1px solid ${theme.palette.divider}`,
	},
}));

let days = [
	'Sunday',
	'Monday',
	'Tuesday',
	'Wednesday',
	'Thursday',
	'Friday',
	'Saturday',
	'Sunday',
	'Monday',
	'Tuesday',
	'Wednesday',
	'Thursday',
	'Friday',
	'Saturday',
];
const d = new Date();

const useVerticalTabs = () => {
	const forecastData = useSelector((state) => state.forecast.data);

	const classes = useStyles();
	const [value, setValue] = useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	const dispatch = useDispatch();

	const handleBtnClick = (numOfDay) => {
		dispatch(setForecastIntoHourVersion(numOfDay));
	};

	const [isTooltipOpen, setTooltipOpen] = useState(false);

	const handleTooltipOpen = () => {
		setTooltipOpen(true);
	};

	const handleTooltipClose = () => {
		setTooltipOpen(false);
	};

	const language = useIntl().locale;

	if (language === 'pl') {
		days = [
			'Poniedziałek',
			'Wtorek',
			'Środa',
			'Czwartek',
			'Piątek',
			'Sobota',
			'Niedziela',
			'Poniedziałek',
			'Wtorek',
			'Środa',
			'Czwartek',
			'Piątek',
			'Sobota',
			'Niedziela',
		];
	}

	return {
		dayName: d.getDay(),
		forecast: forecastData,
		classes,
		value,
		a11yProps,
		days,
		isTooltipOpen,
		handleBtnClick,
		handleTooltipOpen,
		handleTooltipClose,
		handleChange,
	};
};

export default useVerticalTabs;
