import { useState, useEffect } from 'react';

import { makeStyles } from '@material-ui/core';

import { useDispatch, useSelector } from 'react-redux';

import { fetchForecastData } from './../../store/actions/index';

const useCardStyles = makeStyles({
	root: {
		minWidth: 100,
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
	});

	const handleShowDetails = () => {
		setShowDetails(true);
	};

	const dispatch = useDispatch();

	const handleFetchData = async () => {
		setShowBtn({ disabled: false, loading: true });
		await dispatch(fetchForecastData(weather.location.name));

		setShowBtn({
			loading: false,
			disabled: true,
		});
	};

	const weatherData = useSelector((state) => state.wth.data);

	useEffect(() => {
		setShowBtn({ loading: false, disabled: false });
	}, [weatherData]);

	const [mapLoading, setMapLoading] = useState(true);

	const removeMapLoading = () => {
		setMapLoading(false);
	};

	return {
		cardStyles,
		btnClass,
		showDetails,
		showBtn,
		mapLoading,
		handleShowDetails,
		handleFetchData,
		removeMapLoading,
	};
};

export default useCard;
