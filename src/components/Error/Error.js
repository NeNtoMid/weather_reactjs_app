import React, { memo } from 'react';
import PropTypes from 'prop-types';

import {
	Dialog,
	DialogTitle,
	DialogActions,
	Button,
	DialogContentText,
	DialogContent,
	Typography,
} from '@material-ui/core';

const Error = ({ err, onClose }) => {
	return (
		<Dialog
			open={err ? true : false}
			onClose={onClose}
			aria-labelledby='alert-dialog-title'
			aria-describedby='alert-dialog-description'
		>
			<DialogTitle id='alert-dialog-title'>
				{'We occured some error'}
			</DialogTitle>
			<DialogContent>
				<DialogContentText id='alert-dialog-description'>
					Unfortunately, there occured some error. We do the best to fix it.
					Please try again another time
					<Typography color='secondary' variant='subtitle1'>
						Error: {err}
					</Typography>
				</DialogContentText>
			</DialogContent>
			<DialogActions>
				<Button onClick={onClose} color='secondary' autoFocus>
					Agree
				</Button>
			</DialogActions>
		</Dialog>
	);
};

Error.propTypes = {
	err: PropTypes.any.isRequired,
	onClose: PropTypes.func.isRequired,
};

export default memo(
	Error,
	(prevProps, nextProps) => prevProps.err === nextProps.err
);
