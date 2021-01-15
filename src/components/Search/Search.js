import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import { TextField } from '@material-ui/core';

import { Autocomplete } from '@material-ui/lab';

import { FormattedMessage } from 'react-intl';

import gsap from 'gsap';

import { isMobile } from 'mobile-device-detect';

const Search = (props) => {
	const searchRef = useRef(null);
	useEffect(() => {
		const searchElement = searchRef.current;

		gsap.fromTo(
			searchElement,
			{ autoAlpha: 0, scaleX: 0, y: '+=250' },
			{
				scaleX: 1,
				y: '-=250',
				autoAlpha: 1,
				duration: 1,
				ease: 'power3.inOut',
				delay: 1,
			}
		);
	}, []);

	useEffect(() => {
		if (isMobile) {
			const inputElement =
				searchRef.current.children[0].children[1].children[0];
			inputElement.blur();
		}
	}, [props.forwardOptionsHistory]);
	return (
		<Autocomplete
			ref={searchRef}
			options={props.forwardOptionsHistory}
			freeSolo
			autoSelect
			onInputChange={props.onInputChange}
			renderInput={(params) => (
				<TextField
					{...params}
					label={
						<FormattedMessage id='search.bar' description='search city bar' />
					}
					margin='normal'
					variant='outlined'
					error={props.error || props.cityNotFoundErr ? true : false}
					helperText={`${props.error}${
						props.cityNotFoundErr ? props.cityNotFoundErr : ''
					}`}
					value={props.value}
				/>
			)}
		/>
	);
};

Search.propTypes = {
	value: PropTypes.string.isRequired,
	forwardOptionsHistory: PropTypes.array.isRequired,
	onInputChange: PropTypes.func.isRequired,
	error: PropTypes.string.isRequired,
	cityNotFoundErr: PropTypes.any.isRequired,
};

export default Search;
