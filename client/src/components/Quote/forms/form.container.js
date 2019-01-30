import React from 'react';
import { reduxForm } from 'redux-form';

import FormComponent from './form.component';
import axios from 'axios';

class FormContainer extends React.Component {

    state = {
        services: []
    }

    submitForm(formValues) {
        console.log('submitting Form: ', formValues);
    }

    componentDidMount() {
        axios.get('http://localhost:5000/services')
            .then(response => {
                this.setState({ services: response.data.map(x => x.name) })
            })
        // axios get list from API

        // set local state
    }

    render() {
        return (
            <FormComponent
                handleSubmit={this.submitForm}
                services={this.state.services}
            />
        )
    }
}

const formConfiguration = {
    form: 'my-very-own-form'
}

export default reduxForm(formConfiguration)(FormContainer);