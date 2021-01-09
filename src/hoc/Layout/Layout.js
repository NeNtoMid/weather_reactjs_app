import React from 'react';

import PropTypes from 'prop-types';

const Layout = ({ children }) => {
	return <>{children}</>;
};

Layout.propTypes = {
	children: PropTypes.node,
};

export default Layout;
