import React from 'react';
import { Field } from 'redux-form';
import Text from '../text';
import Select from '../select';
import Datepicker from '../datepicker';
import Multiselect from '../multiselect';
import 'react-widgets/dist/css/react-widgets.css';

export const FormComponent = ({ handleSubmit, onSubmit, formValues, change, pristine, reset }) => {
	return (
		<div className="flex flex-column justify-center items-center">
			<h1>Request a Free Quote</h1>
			<form className="ui form" onSubmit={handleSubmit(onSubmit)}>
				<div class="field">
					<div class="two fields">
						<Field className="field" name="firstName" label="First Name" component={Text} />
						<Field className="field" name="lastName" label="Last Name" component={Text} />
					</div>
					<Field name="contactNumber" label="Contact Number" component={Text} />
				</div>
				<Field name="address" label="Address" component={Text} />

				<Field name="suburb" label="Suburb" component={Text} />

				<Field
					name="propertyType"
					label="Property Type"
					component={Select}
					options={{
						residential: 'Residential',
						commerical: 'Commercial',
						acerage: 'Acerage'
					}}
				/>

				<Field
					name="servicesRequired"
					label="Serivces Required"
					component={Multiselect}
					data={[ 'weed', 'cut', 'dumb data' ]}
				/>

				<Field name="Date of services" label="Date of services" showTime={false} component={Datepicker} />

				<Field
					name="timeofInspection"
					label="Inspection Time"
					component={Select}
					options={{
						seven: '7:00am',
						seventhirty: '7:30am',
						eight: '8:00am',
						eightthirty: '8:30am',
						nine: '9:00am',
						ninethirty: '9:30am',
						ten: '10:00am',
						tenthirty: '10:30am',
						eleven: '11:00am',
						eleventhirty: '11:30am',
						twelve: '12:00pm',
						twelvethirty: '12:30pm',
						one: '1:00pm',
						onethirty: '1:30pm',
						two: '2:00pm',
						twothirty: '2:30pm',
						three: '3:00pm',
						threethirty: '3:30pm',
						four: '4:00pm',
						fourthirty: '4:30pm',
						five: '5:00pm'
					}}
				/>

				<Field name="comments" label="Comments" component={Text} />

				<button type="submit" className="ui button">
					Submit
				</button>
			</form>
		</div>
	);
};

export default FormComponent;
