import React, { PropTypes } from 'react';
import { Modal, Glyphicon } from 'react-bootstrap';
import './LoginModal.css';

const LoginModal = ({title, children, ...params}) => (
	<Modal
		{...params}
		aria-labelledby="contained-modal-title-lg"
		dialogClassName="LoginModal">
		<Modal.Header closeButton>
			<Modal.Title className="LoginModal-Title text-center">
				<Glyphicon glyph="fire" className="LoginModal-Logo" />
				{title}
			</Modal.Title>
		</Modal.Header>
		<Modal.Body className="text-center">
			{children}
		</Modal.Body>
	</Modal>
); 


LoginModal.propTypes = {
	title: PropTypes.string,
	show: PropTypes.bool.isRequired,
	onHide: PropTypes.func.isRequired
};

LoginModal.defaultProps = {
	title: "login",
	show: false
};

export default LoginModal;