import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import { TextField } from '@material-ui/core';

import { Autocomplete } from '@material-ui/lab';

import { FormattedMessage } from 'react-intl';

import gsap from 'gsap';

const Search = (props) => {
	const searchRef = useRef(null);
	useEffect(() => {
		const searchElement = searchRef.current;

		gsap.fromTo(
			searchElement,
			{ autoAlpha: 0, scaleX: 0, y: '+=250' },
			{ scaleX: 1, y: '-=250', autoAlpha: 1, duration: 1, ease: 'power3.inOut' }
		);
	}, []);
	return (
		<Autocomplete
			ref={searchRef}
			options={props.forwardOptionsHistory}
			freeSolo
			renderInput={(params) => (
				<TextField
					{...params}
					label={
						<FormattedMessage id='search.bar' description='search city bar' />
					}
					margin='normal'
					variant='outlined'
					error={props.error ? true : false}
					helperText={props.error}
					value={props.value}
					onChange={props.onChange}
				/>
			)}
		/>
	);
};

Search.propTypes = {
	value: PropTypes.string.isRequired,
	forwardOptionsHistory: PropTypes.array.isRequired,
	onChange: PropTypes.func.isRequired,
	error: PropTypes.string.isRequired,
};

export default Search;
