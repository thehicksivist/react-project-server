import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import 'react-dates/initialize';

export class Datepicker extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			date: moment(),
			focused: false
		};
	}
	getValueAsString = (date) => (date ? date.toISOString() : '');

	changeActiveDateWidget = () => {
		this.setState({
			activeDateWidget: !this.state.activeDateWidget
		});
	};

	handleDateChange = (date) => {
		this.setState({ date }, () => {
			const dateStr = this.getValueAsString(this.state.date);
			this.props.input.onChange(dateStr);
		});
	};

	render() {
		return (
			<div className="container">
				<SingleDatePicker
					date={this.state.date} // momentPropTypes.momentObj or null
					onDateChange={this.handleDateChange} // PropTypes.func.isRequired
					focused={this.state.focused} // PropTypes.bool
					onFocusChange={({ focused }) => this.setState({ focused })} // PropTypes.func.isRequired
					showClearDate={true}
					numberOfMonths={1}
				/>
			</div>
		);
	}
}

export default Datepicker;
