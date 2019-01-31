import React from 'react';
import { reduxForm } from 'redux-form';

import FormComponent from './form.component';
import axios from 'axios';

const server = "http://localhost:5000/freequote"

class FormContainer extends React.Component {

    state = {
        services: []
    }

    submitForm = (event) => {
        event.preventDefault()
        console.log('submitting Form: ');
        // axios post from the client to the server/freequote
        axios({
            method: 'post',
            url: `${server}`,
            // form fields to be stored in state, then passed through from there
            data: this.data,
            config: { headers: {'Content-Type': 'multipart/form-data' }}
            })
            .then(function (response) {
                //handle success
                console.log(response);
            })
            .catch(function (response) {
                //handle error
                console.log(response);
            });
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

export default reduxForm(formConfiguration)(FormContainer)

