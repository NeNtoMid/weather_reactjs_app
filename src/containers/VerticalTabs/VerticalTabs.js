import React from 'react';

import { Container } from '@material-ui/core';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import TabPanel from './../../components/TabPanel/TabPanel';

import useVerticalTabs from './../../hooks/VerticalTabs/useVerticalTabs';

import ForecastInformation from '../../components/ForecastInformation/ForecastInformation';

const VerticalTabs = () => {
	const {
		dayName,
		classes,
		value,
		a11yProps,
		days,
		forecast,
		isTooltipOpen,
		handleChange,
		handleBtnClick,
		handleTooltipOpen,
		handleTooltipClose,
	} = useVerticalTabs();

	let render = null;

	if (Object.keys(forecast).length > 0) {
		render = (
			<Container className={classes.root}>
				<Tabs
					orientation='vertical'
					variant='scrollable'
					value={value}
					onChange={handleChange}
					aria-label='Vertical tabs example'
					className={classes.tabs}
					indicatorColor='primary'
				>
					<Tab label='Today' {...a11yProps(0)} />
					<Tab label={`${days[dayName + 1]}`} {...a11yProps(1)} />
					<Tab label={`${days[dayName + 2]}`} {...a11yProps(2)} />
				</Tabs>

				{[...new Array(3)].map((cur, i) => {
					return (
						<TabPanel value={value} index={i} key={i}>
							<ForecastInformation
								weather={forecast.forecast.forecastday[i]}
								click={() => handleBtnClick(i)}
								tooltipOpen={handleTooltipOpen}
								tooltipClose={handleTooltipClose}
								isTooltipOpen={isTooltipOpen}
							/>
						</TabPanel>
					);
				})}
			</Container>
		);
	}

	return render;
};

export default VerticalTabs;
