import React from 'react';
import PropTypes from 'prop-types';

import { TextField } from '@material-ui/core';

import { Autocomplete } from '@material-ui/lab';

import { useSpring, animated } from 'react-spring';

const Search = (props) => {
	const animation = useSpring({
		from: { opacity: 0, width: '10%', height: '10%' },
		to: { opacity: 1, width: '100%', height: '100%' },
		delay: 800,
		overflow: 'hidden',
	});

	return (
		<animated.nav
			style={animation}
			className={{ textAlign: 'center', marginTop: '2rem' }}
		>
			<Autocomplete
				options={props.forwardOptionsHistory}
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
	forwardOptionsHistory: PropTypes.array.isRequired,
	onChange: PropTypes.func.isRequired,
	error: PropTypes.string.isRequired,
};

export default Search;
