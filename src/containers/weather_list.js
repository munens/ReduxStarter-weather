import React, {Component} from 'react'
import { connect } from 'react-redux'

class WeatherList extends Component {

	renderWeather(data){
		let name = data.city.name
		return (
			<tr key={name}>
				<td>{name}</td>
			</tr>
		)
	}

	render() {
		return (
			<table className="table table-hover">
				<thead>
					<tr>
						<th>City</th>
						<th>Temperature</th>
						<th>Pressure</th>
						<th>Humidity</th>
					</tr>
				</thead>
				<tbody>
					{this.props.weather.map(this.renderWeather)}
				</tbody>
			</table>
		)
	}
}
// create props for our WeatherList
/*
function mapStateToProps(state) {
	return { weather: state.weather}
}
*/

//,  above same as:
function mapStateToProps({ weather }) {
	console.log(weather)
	return { weather}
}

export default connect(mapStateToProps)(WeatherList);