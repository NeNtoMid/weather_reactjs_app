import React, { useEffect, useRef } from 'react';

import { Typography, Container } from '@material-ui/core';

import dateFormat from 'dateformat';

import { FormattedMessage, useIntl } from 'react-intl';

import gsap from 'gsap';

import { ReactComponent as WeatherSvg } from './../../../images/weather.svg';

import classes from './Header.module.css';

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

	const svgRef = useRef(null);

	const titleRef = useRef(null);

	useEffect(() => {
		const [elements] = svgRef.current.children;

		const floor = elements.getElementById('floor');
		const board = elements.getElementById('board');
		const character = elements.getElementById('character');

		gsap.set([floor, board, character], {
			autoAlpha: 0,
			ease: 'power3.inOut',
		});

		const tl = gsap.timeline({ defaults: { duration: 0.8 } });

		tl.fromTo(floor, { scale: 0 }, { scale: 1, autoAlpha: 1 }, '-=1.5')
			.fromTo(
				character,
				{ x: '+=150', y: '-=150' },
				{ x: '-=150', y: '+=150', duration: 0.7, autoAlpha: 1 }
			)
			.fromTo(
				board,
				{ x: '-=200', y: '+=200' },
				{ x: '+=200', y: '-=200', autoAlpha: 1, duration: 0.6 }
			);
	}, []);

	return (
		<Container component='header'>
			<Container ref={svgRef} className={classes.svgWrapper}>
				<WeatherSvg className={classes.weatherSvg} />
			</Container>
			<Container>
				<Typography
					variant='h1'
					align='center'
					color='primary'
					className={classes.headerTitle}
				>
					<FormattedMessage
						id='header.title'
						description='Header title of app'
					/>
				</Typography>
				<Typography
					variant='h6'
					color='primary'
					align='center'
					className={classes.headerTime}
				>
					{time}
				</Typography>
			</Container>
		</Container>
	);
};

export default Header;
