import React from 'react';
import PropTypes from 'prop-types';

const ClimateIcon = ({ weatherIcon }) => {
	return (
		<img
			src={`http://openweathermap.org/img/w/${weatherIcon}.png`}
			alt='weather icon'
		/>
	);
};

ClimateIcon.propTypes = {
	weatherIcon: PropTypes.string.isRequired,
};

export default ClimateIcon;
