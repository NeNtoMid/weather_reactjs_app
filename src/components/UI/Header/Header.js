import React from 'react';

import { Typography } from '@material-ui/core';

import dateFormat from 'dateformat';

import { useSpring, animated, config } from 'react-spring';

const now = new Date();

const time = dateFormat(now, 'dddd dS  mmmm  yyyy');

const Header = () => {
	const fade = useSpring({
		config: config.wobbly,
		from: { opacity: 0, transform: 'translateY(-50%)' },
		to: { opacity: 1, transform: 'translate(0)' },
	});

	return (
		<animated.header style={fade}>
			<Typography variant='h1' align='center' color='primary'>
				Weather App
			</Typography>
			<Typography variant='h6' color='primary' align='center'>
				{time}
			</Typography>
		</animated.header>
	);
};

export default Header;
