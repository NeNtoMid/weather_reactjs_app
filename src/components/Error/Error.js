import React, { memo } from 'react';
import PropTypes from 'prop-types';

import { FormattedMessage } from 'react-intl';

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
				{
					<FormattedMessage
						id='error.title'
						description='alert-dialog-title error'
					/>
				}
			</DialogTitle>
			<DialogContent>
				<DialogContentText id='alert-dialog-description'>
					<FormattedMessage
						id='error.description'
						description='alert-dialog-description error'
					/>

					<Typography color='secondary' variant='subtitle1'>
						Error: {err}
					</Typography>
				</DialogContentText>
			</DialogContent>
			<DialogActions>
				<Button onClick={onClose} color='secondary' autoFocus>
					<FormattedMessage
						id='error.button'
						description='button for agreement error'
					/>
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
