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

		const titleElement = titleRef.current;

		gsap.set([floor, board, character, ...titleElement.children], {
			autoAlpha: 0,
			ease: 'power3.inOut',
		});

		const tl = gsap.timeline({ defaults: { duration: 0.8 } });

		tl.fromTo(floor, { scale: 0 }, { scale: 1, autoAlpha: 1 })
			.fromTo(
				character,
				{ x: '+=150', y: '-=150' },
				{ x: '-=150', y: '+=150', duration: 1.2, autoAlpha: 1 }
			)
			.fromTo(
				board,
				{ x: '-=200', y: '+=200' },
				{ x: '+=200', y: '-=200', autoAlpha: 1 }
			)
			.fromTo(
				titleElement.children,
				{ scaleY: 0, x: '-=150' },
				{ scaleY: 1, x: '+=150', stagger: 0.6, autoAlpha: 1 }
			);
	}, []);

	return (
		<Container component='header'>
			<Container ref={svgRef} className={classes.svgWrapper}>
				<WeatherSvg className={classes.weatherSvg} />
			</Container>
			<Container ref={titleRef}>
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

// useEffect(() => {
// 	const [elements] = sceneWrapper.current.children;
// 	console.log(elements);

// 	const board = elements.getElementById('board');

// 	const character = elements.getElementById('character');
// 	const floor = elements.getElementById('floor');

// 	gsap.set([board, character, floor], { autoAlpha: 0 });

// 	const tl = gsap.timeline({
// 		defaults: { duration: 1, ease: 'power3.inOut' },
// 	});

// 	tl.fromTo(
// 		floor,
// 		{ x: '+=250', y: '+=250', scaleX: 0 },
// 		{ autoAlpha: 1, x: '-=250', y: '-=250', duration: 1.5, scaleX: 1 }
// 	)
// 		.fromTo(
// 			character,
// 			{ x: '+=250', scaleY: 0, scaleX: 0 },
// 			{ autoAlpha: 1, x: '-=250', scaleY: 1, scaleX: 1 }
// 		)
// 		.fromTo(
// 			board,
// 			{ x: '-=150', y: '+=150' },
// 			{ x: '+=150', y: '-=150', autoAlpha: 1, duration: 0.7 }
// 		);
// }, []);
