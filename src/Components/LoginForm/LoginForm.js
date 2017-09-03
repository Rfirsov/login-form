import React, { Component, PropTypes } from 'react';
import { Form, FormGroup, FormControl, Col, Button, Glyphicon } from 'react-bootstrap';
import './LoginForm.css';

class LoginForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			Username: '',
			Password: '',
			validationState: props.validationState
		};
	}

	componentWillReceiveProps(nextProps) {
		this.setState({ validationState: nextProps.validationState });
	}

	handleChange = (event) => {
		this.setState({
			[event.target.id]: event.target.value,
			validationState: null
		});
	}

	handleSubmit = (event) => {
		event.preventDefault();
		this.props.onSubmit({
			Username: this.state.Username,
			Password: this.state.Password
		});
	}

	render() {
		let { isLoading } = this.props;
		let { validationState } = this.state;

		const form = (
			<Form horizontal className="LoginForm">
				<FormGroup
					controlId="Username"
					validationState={validationState}>
					<Col sm={12}>
						<FormControl
							type="text"
							placeholder="Login"
							value={this.state.login}
							onChange={this.handleChange} 
						/>
					</Col>
				</FormGroup>
				<FormGroup
					controlId="Password"
				>
					<Col sm={12}>
						<FormControl
							type="password"
							placeholder="Password"
							value={this.state.password}
							onChange={this.handleChange} 
						/>
					</Col>
				</FormGroup>
				<FormGroup>
					<Col sm={12} className="text-center">
					<Button
						className="LoginForm-Submit"
						type="submit"
						disabled={isLoading}
						onClick={!isLoading ? this.handleSubmit : null}>
						{isLoading ? <Glyphicon glyph="cog" className="LoginForm-Cog" /> : 'Login →'}
					</Button>
					</Col>
				</FormGroup>
			</Form>
		);

		const success = (
			<span className="LoginForm-success">
				<Glyphicon 
					glyph="ok" 
					className="LoginForm-Ok" 
				/>
				Successful logged
			</span>
		);

		return (validationState === 'success' ? success : form);
	}
}


LoginForm.PropTypes = {
	isLoading: PropTypes.bool,
	validationState: PropTypes.oneOf(['success', 'warning', 'error']),
	onSubmit: PropTypes.func.isRequired
};

LoginForm.defaultProps = {
	isLoading: false
};

export default LoginForm;