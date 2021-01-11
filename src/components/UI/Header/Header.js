import React from 'react';

import { Typography } from '@material-ui/core';

import dateFormat from 'dateformat';

import { useSpring, animated, config } from 'react-spring';

import { FormattedMessage, useIntl } from 'react-intl';

const now = new Date();

const Header = () => {
	const locale = useIntl().locale;

	let time = dateFormat(now, 'dddd dS  mmmm  yyyy');

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

		time = dateFormat(now, 'dddd d   mmmm  yyyy');
	}

	const fade = useSpring({
		config: config.wobbly,
		from: { opacity: 0, transform: 'translateY(-50%)' },
		to: { opacity: 1, transform: 'translate(0)' },
	});

	return (
		<animated.header style={fade}>
			<Typography variant='h1' align='center' color='primary'>
				<FormattedMessage id='header.title' description='Header title of app' />
			</Typography>
			<Typography variant='h6' color='primary' align='center'>
				{time}
			</Typography>
		</animated.header>
	);
};

export default Header;
