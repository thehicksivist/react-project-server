import React from 'react';
import { Field } from 'redux-form';
import Text from '../text';
import Select from '../select';
import Datepicker from '../datepicker';
import Multiselect from '../multiselect';
import 'react-widgets/dist/css/react-widgets.css'
import { reduxForm } from 'redux-form'

const FormComponent = ({ handleSubmit, services, formValues, change, pristine, reset }) => {
    return (
        <div className="flex flex-column justify-center items-center">
            <h1>Request a Free Quote</h1>
            <form
                className="w-80"
                onSubmit={handleSubmit}
            >

                <div class="container">
                    <div class="row">
                        <div class="col">
                            <Field
                                name="name"
                                label="Name"
                                component={Text}
                            />
                        </div>
                        <div class="col">
                            <Field
                                name="phone"
                                label="Phone Number"
                                component={Text}
                            />
                        </div>
                    </div>
                </div>

                <div class="container">
                    <div class="row">
                        <div class="col">
                            <Field
                                name="address"
                                label="Address"
                                component={Text}
                            />
                        </div>
                        <div class="col">
                            <Field
                                name="suburb"
                                label="Suburb"
                                component={Text}
                            />
                        </div>
                    </div>
                </div>
                <div class="container">
                    <div class="row">
                        <div class="col">
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
                        </div>
                        <div class="col">
                            <Field
                                name="service"
                                label="Serivces Required"
                                component={Multiselect}
                                data={services}
                            />
                        </div>
                    </div>
                </div>
                <div class="container">
                    <div class="row">
                        <div class="col">
                            <Field
                                name="dateOfServices"
                                label="Date of services"
                                showTime={false}
                                component={Datepicker}
                            />
                        </div>

                        <div class="col">
                            <Field
                                name="timeOfInspection"
                                label="Inspection Time"
                                component={Select}
                                options={{
                                    seven: "7:00am",
                                    seventhirty: "7:30am",
                                    eight: "8:00am",
                                    eightthirty: "8:30am",
                                    nine: "9:00am",
                                    ninethirty: "9:30am",
                                    ten: "10:00am",
                                    tenthirty: "10:30am",
                                    eleven: "11:00am",
                                    eleventhirty: "11:30am",
                                    twelve: "12:00pm",
                                    twelvethirty: "12:30pm",
                                    one: "1:00pm",
                                    onethirty: "1:30pm",
                                    two: "2:00pm",
                                    twothirty: "2:30pm",
                                    three: "3:00pm",
                                    threethirty: "3:30pm",
                                    four: "4:00pm",
                                    fourthirty: "4:30pm",
                                    five: "5:00pm"
                                }}
                            />
                        </div>
                    </div>
                </div>
                <div class="container">
                    <Field
                        name="message"
                        label="Message"
                        component={Text}
                    />
                </div>


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

const formConfiguration = {
    form: 'quote-form'
}

export default reduxForm(formConfiguration)(FormComponent)

// export default FormComponent;