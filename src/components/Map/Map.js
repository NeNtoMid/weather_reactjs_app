import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Container } from '@material-ui/core';

import classes from './Map.module.css';

import Spinner from './../UI/Spinner/Spinner';

const Map = ({ city }) => {
	const [loading, setLoading] = useState(true);

	const map = loading && <Spinner spinnerInMap />;

	return (
		<Container maxWidth='sm'>
			<div className={classes.mapouter}>
				<div className={classes.gmap_canvas}>
					{map}
					<iframe
						title='Weather Map'
						width='300'
						height='200'
						id='gmap_canvas'
						src={`https://maps.google.com/maps?q=${city}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
						frameBorder='0'
						scrolling='no'
						marginHeight='0'
						marginWidth='0'
						onLoad={() => setLoading(false)}
					></iframe>
				</div>
			</div>
		</Container>
	);
};

Map.propTypes = {
	city: PropTypes.string.isRequired,
};

export default Map;
