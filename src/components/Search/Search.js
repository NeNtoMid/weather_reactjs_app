import React from 'react';
import PropTypes from 'prop-types';

import { TextField } from '@material-ui/core';

import { Autocomplete } from '@material-ui/lab';

import classes from './Search.module.css';

import { useSpring, animated } from 'react-spring';

const Search = (props) => {
	const animation = useSpring({
		from: { opacity: 0, width: '10%', height: '10%' },
		to: { opacity: 1, width: '100%', height: '100%' },
		delay: 800,
		overflow: 'hidden',
	});

	return (
		<animated.nav style={animation} className={classes.Search}>
			<Autocomplete
				options={props.forwardOption}
				freeSolo
				renderInput={(params) => (
					<TextField
						{...params}
						label='Search city'
						margin='normal'
						variant='outlined'
						error={props.error ? true : false}
						helperText={props.error}
						value={props.value}
						onChange={props.onChange}
					/>
				)}
			/>
		</animated.nav>
	);
};

Search.propTypes = {
	value: PropTypes.string.isRequired,
	forwardOption: PropTypes.array.isRequired,
	onChange: PropTypes.func.isRequired,
};

export default Search;
