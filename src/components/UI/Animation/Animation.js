import React from 'react';
import PropTypes from 'prop-types';

import { useSpring, animated } from 'react-spring';

import classes from './Animations.module.css';

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];

const trans1 = (x, y) => `translate3d(${x / 8 + 200}px,${y / 8 - 300}px,0)`;
const trans2 = (x, y) => `translate3d(${x / 6 + 180}px,${y / 6 - 200}px,0)`;

const Animation = ({ type }) => {
	const [props, set] = useSpring(() => ({
		xy: [0, 0],
		config: { mass: 10, tension: 550, friction: 140 },
	}));

	let weatherIcons;

	switch (type.toLowerCase()) {
		case 'clear':
			weatherIcons = (
				<animated.div
					className={classes.card2}
					style={{ transform: props.xy.interpolate(trans1) }}
				/>
			);
			break;

		case 'clouds':
			weatherIcons = (
				<animated.div
					className={classes.card3}
					style={{ transform: props.xy.interpolate(trans2) }}
				/>
			);
			break;

		case 'rain':
			weatherIcons = (
				<animated.div
					className={classes.card4}
					style={{ transform: props.xy.interpolate(trans2) }}
				/>
			);
			break;
		default:
			weatherIcons = null;
			break;
	}

	return (
		<div
			className={classes.container}
			onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
		>
			{weatherIcons}
		</div>
	);
};

Animation.propTypes = {
	type: PropTypes.string.isRequired,
};

export default Animation;
