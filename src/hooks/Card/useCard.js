import { useState, useEffect, useRef } from 'react';

import { makeStyles } from '@material-ui/core';

import { useDispatch, useSelector } from 'react-redux';

import { fetchForecastData } from './../../store/actions/index';

import { useIntl } from 'react-intl';

import gsap from 'gsap';

const useCardStyles = makeStyles({
	root: {
		minWidth: 350,
	},
});

const useBtnStyles = makeStyles({
	root: {
		marginTop: 20,
		marginLeft: 1,
	},
});

const useCard = (weather) => {
	const cardStyles = useCardStyles();

	const btnClass = useBtnStyles();

	const [showDetails, setShowDetails] = useState(false);

	const [showBtn, setShowBtn] = useState({
		loading: false,
		disabled: false,
		loadComponent: false,
	});

	const handleShowDetails = () => {
		setShowDetails(true);
	};

	const dispatch = useDispatch();

	const language = useIntl().locale;

	const handleFetchData = async () => {
		setShowBtn({ disabled: false, loading: true, loadComponent: true });
		await dispatch(fetchForecastData(weather.location.name, language));

		setShowBtn((prevState) => ({
			...prevState,
			loading: false,
			disabled: true,
		}));
	};

	const weatherData = useSelector((state) => state.wth.data);

	useEffect(() => {
		setShowBtn({ loading: false, disabled: false });
	}, [weatherData]);

	const [mapLoading, setMapLoading] = useState(true);

	const removeMapLoading = () => {
		setMapLoading(false);
	};

	const cardRef = useRef(null);

	useEffect(() => {
		const cardElements = cardRef.current.children;

		gsap.fromTo(
			cardElements,
			{ autoAlpha: 0, y: '+=300' },
			{ autoAlpha: 1, y: '-=300', duration: 1, stagger: 1, delay: 6 }
		);
	}, []);

	return {
		cardStyles,
		btnClass,
		showDetails,
		showBtn,
		mapLoading,
		cardRef,
		handleShowDetails,
		handleFetchData,
		removeMapLoading,
	};
};

export default useCard;
