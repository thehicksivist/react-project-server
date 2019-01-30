import React from 'react';
import { reduxForm } from 'redux-form';

import FormComponent from './form.component';

export const FormContainer = ({ handleSubmit }) => {
	const submitForm = (formValues) => {
		console.log('submitting Form: ', formValues);
	};

	return (
		<div className="container">
			<FormComponent onSubmit={submitForm} handleSubmit={handleSubmit} />
		</div>
	);
};

const formConfiguration = {
	form: 'my-very-own-form'
};

export default reduxForm(formConfiguration)(FormContainer);
