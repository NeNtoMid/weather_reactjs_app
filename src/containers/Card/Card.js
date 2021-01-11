import React, { lazy, Suspense } from 'react';
import PropTypes from 'prop-types';

import Map from '../../components/Map/Map';

import CardWrapper from '@material-ui/core/Card';

import {
	CardContent,
	Button,
	Grid,
	Container,
	CircularProgress,
} from '@material-ui/core';

import CardDetails from './../../components/CardDetails/CardDetails';

import WbSunnyIcon from '@material-ui/icons/WbSunny';

import useCard from '../../hooks/Card/useCard';

// import VerticalTabs from '../VerticalTabs/VerticalTabs';

const VerticalTabs = lazy(() => import('../VerticalTabs/VerticalTabs'));

const Card = ({ weather }) => {
	const {
		cardStyles,
		btnClass,
		showDetails,
		showBtn,
		mapLoading,
		handleShowDetails,
		handleFetchData,
		removeMapLoading,
	} = useCard(weather);

	let verticalTabs = null;

	if (showBtn.loadComponent) {
		verticalTabs = (
			<Suspense fallback={<CircularProgress />}>
				<VerticalTabs />
			</Suspense>
		);
	}

	let btn = <CircularProgress />;

	if (!showBtn.loading) {
		btn = (
			<Button
				startIcon={<WbSunnyIcon />}
				className={btnClass.root}
				variant='contained'
				color='primary'
				onClick={handleFetchData}
				disabled={showBtn.disabled}
				style={{ marginBottom: 15 }}
			>
				Get Forecast for 3 days
			</Button>
		);
	}

	return (
		<CardWrapper className={cardStyles.root}>
			<CardContent>
				<Grid container direction='row'>
					<Grid item>
						<CardDetails
							weather={weather}
							show={showDetails}
							click={handleShowDetails}
							shouldMathRound
						/>

						<Map
							city={weather.location.name}
							country={weather.location.country}
							loading={mapLoading}
							load={removeMapLoading}
						/>

						<Container>{btn}</Container>
					</Grid>

					<Grid item>{verticalTabs}</Grid>
				</Grid>
			</CardContent>
		</CardWrapper>
	);
};

Card.propTypes = {
	weather: PropTypes.object.isRequired,
};

export default Card;
