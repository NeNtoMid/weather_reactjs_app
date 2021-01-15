import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';

import FormControl from '@material-ui/core/FormControl';
import SelectWrapper from '@material-ui/core/Select';

import { FormattedMessage } from 'react-intl';

const useStyles = makeStyles((theme) => ({
	formControl: {
		margin: theme.spacing(1),
		minWidth: 120,
	},
	selectEmpty: {
		marginTop: theme.spacing(2),
	},
}));

const Select = (props) => {
	const classes = useStyles();

	return (
		<div>
			<FormControl className={classes.formControl}>
				<InputLabel>
					<FormattedMessage id='select.selectLabel' />
				</InputLabel>
				<SelectWrapper value={props.hour} onChange={props.change}>
					{[...new Array(24)].map((el, i) => (
						<MenuItem key={i} value={i}>
							{i}
						</MenuItem>
					))}
				</SelectWrapper>
			</FormControl>
		</div>
	);
};

export default Select;
