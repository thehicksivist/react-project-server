import React from 'react';
import { Field } from 'redux-form';
import Text from '../text';
import Select from '../select';
import Datepicker from '../datepicker';
import Multiselect from '../multiselect';
import 'react-widgets/dist/css/react-widgets.css'



export const FormComponent = ({ handleSubmit, onSubmit, formValues, change, pristine, reset }) => {
    return (
        <div className="flex flex-column justify-center items-center">
            <h1>Request a Free Quote</h1>
            <form
                className="w-80"
                onSubmit={handleSubmit(onSubmit)}
            >

                <Field
                    name="firstName"
                    label="First Name"
                    component={Text}
                />

                <Field
                    name="lastName"
                    label="Last Name"
                    component={Text}
                />

                <Field
                    name="contactNumber"
                    label="Contact Number"
                    component={Text}
                />

                <Field
                    name="address"
                    label="Address"
                    component={Text}
                />

                <Field
                    name="propertyType"
                    label="Property Type"
                    component={Select}
                    options={{
                        residential: "Residential",
                        commerical: "Commercial",
                        acerage: "Acerage"
                    }}
                />

                <Field
                    name="servicesRequired"
                    label="Serivces Required"
                    component={Multiselect}
                    data={['weed', 'cut', 'dumb data']}
                />

                <Field
                    name="Date of services"
                    label="Date of services"
                    showTime={false}
                    component={Datepicker}
                />

                <Field
                    name="timeofInspection"
                    label="Inspection Time"
                    component={Select}
                    options={{
                        sevenam: "7:00am",
                        seven30am: "7:30am",
                        eightam: "8:00am",
                        eight30am: "8:30am",
                        nineam: "9:00am",
                        nineam: "9:30am",
                        tenam: "10:00am",
                        tenam: "10:30am",
                        elevenam: "11:00am",
                        eleven: "11:30am",
                        elvenam: "12:00pm",
                        twelve: "12:30pm",
                        onepm: "1:00pm",
                        one: "1:30pm",
                        twopm: "2:00pm",
                        two: "2:30pm",
                        threepm: "3:00pm",
                        three: "3:30pm",
                        four: "4:00pm",
                        four30: "4:30pm",
                        fivepm: "5:00pm"
                    }}
                />



                <button
                    type="submit"
                    className="link br2 bg-blue white dim pa3 f6 sans-serif b--blue ba"
                >
                    Submit
        </button>
            </form>
        </div>
    );
}

export default FormComponent;