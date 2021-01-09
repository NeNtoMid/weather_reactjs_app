import React from 'react';
import PropTypes from 'prop-types';

import { Box } from '@material-ui/core';

const Tab = ({ children, value, index, ...other }) => {
	return (
		<div
			role='tabpanel'
			hidden={value !== index}
			id={`vertical-tabpanel-${index}`}
			aria-labelledby={`vertical-tab-${index}`}
			{...other}
		>
			{value === index && <Box div={3}>{children}</Box>}
		</div>
	);
};

Tab.propTypes = {
	children: PropTypes.node,
	index: PropTypes.number.isRequired,
	value: PropTypes.number.isRequired,
};

export default Tab;
