import React from 'react';
import PropTypes from 'prop-types';

import { Container, Typography } from '@material-ui/core';

import CardDetails from './../CardDetails/CardDetails';

import dateFormat from 'dateformat';

import { useIntl } from 'react-intl';

const ForecastHour = ({ data }) => {
	const weather = {
		current: { ...data },
	};

	const locale = useIntl().locale;

	if (locale === 'pl') {
		dateFormat.i18n = {
			dayNames: [
				'Nie',
				'Pon',
				'Wt',
				'Śr',
				'Czw',
				'Pt',
				'Sob',
				'Niedziela',
				'Poniedziałek',
				'Wtorek',
				'Środa',
				'Czwartek',
				'Piątek',
				'Sobota',
			],
			monthNames: [
				'Sty',
				'Luty',
				'Marz',
				'Kwie',
				'Maj',
				'Czer',
				'Lip',
				'Śie',
				'Wrz',
				'Paź',
				'List',
				'Gru',
				'Styczeń',
				'Luty',
				'Marzec',
				'Kwiecień',
				'Maj',
				'Czerwiec',
				'Lipiec',
				'Śierpień',
				'Wrzesień',
				'Październik',
				'Listopad',
				'Grudzień',
			],
			timeNames: ['a', 'p', 'am', 'pm', 'A', 'P', 'AM', 'PM'],
		};
	}

	const day = dateFormat(data.time, 'dddd');
	return (
		<Container>
			<Typography
				variant='h3'
				color='primary'
				display='inline'
				align='left'
				style={{ marginBottom: 20 }}
			>
				{day}
			</Typography>
			<CardDetails weather={weather} show isInSlider shouldMathRound={false} />{' '}
		</Container>
	);
};

ForecastHour.propTypes = {
	data: PropTypes.object.isRequired,
};

export default ForecastHour;
