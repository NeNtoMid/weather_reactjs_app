import React from 'react';
import PropTypes from 'prop-types';

const ClimateIcon = ({ weatherIcon }) => {
	return <img src={`https:${weatherIcon}`} alt='weather icon' />;
};

ClimateIcon.propTypes = {
	weatherIcon: PropTypes.string.isRequired,
};

export default ClimateIcon;
