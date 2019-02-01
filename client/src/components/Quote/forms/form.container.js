import React from 'react';
import FormComponent from './form.component';
import axios from 'axios';
import { connect } from 'react-redux'

const server = "http://localhost:5000/freequote"

class FormContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            services: [],
            firstName: '',
            contactNumber: ''
        };
    
        this.handleInputChange = this.handleInputChange.bind(this);
      }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        console.log(name)
    
        this.setState({
          [name]: value
        });
    }

    submitForm = (event) => {
        event.preventDefault()
        let formState = this.props.store.getState()
        let formFields = formState.form['quote-form'].values
        console.log('submitting Form:', formFields);
           
        // axios post from the client to the server/freequote
        axios({
            method: 'post',
            url: `${server}`,
            data: formFields,
            config: { headers: {'Content-Type': 'application/json' }}
            })
            .then(function (response) {
                //handle success
                console.log('axios post success', response);
            })
            .catch(function (response) {
                //handle error
                console.log('axios post catch', formFields, response);
            });
      }

    componentDidMount() {
        axios.get('http://localhost:5000/services')
        .then(response => {
            this.setState({ services: response.data.map(x => x.name) })
        })
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

export default FormContainer