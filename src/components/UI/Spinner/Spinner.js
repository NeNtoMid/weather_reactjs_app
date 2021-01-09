import React from 'react';

import PropTypes from 'prop-types';

import { PropagateLoader } from 'react-spinners';

import clsx from 'clsx';

import classes from './Spinner.module.css';

const Spinner = (props) => {
	const spinnerClasses = clsx(
		props.spinnerInWeather && classes.spinnerInWeather,
		props.spinnerInMap && classes.spinnerInMap,
		props.spinnerInForecast && classes.spinnerInForecast
	);

	return (
		<div className={spinnerClasses}>
			<PropagateLoader loading={true} size={20} color='#3F51B5' />
		</div>
	);
};

Spinner.propTypes = {
	spinnerInMap: PropTypes.bool,
	spinnerInWeather: PropTypes.bool,
};

export default Spinner;
