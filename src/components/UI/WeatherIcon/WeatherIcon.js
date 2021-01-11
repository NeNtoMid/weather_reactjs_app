import React from 'react';
import PropTypes from 'prop-types';

const ClimateIcon = ({ weatherIcon }) => {
	return (
		<img
			src={`https:${weatherIcon}`}
			style={{ width: 64, height: 64 }}
			alt='weather icon'
		/>
	);
};

ClimateIcon.propTypes = {
	weatherIcon: PropTypes.string.isRequired,
};

export default ClimateIcon;
