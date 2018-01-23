import React, { Component } from 'react';
import EditorsBox from './EditorsBox.js';
import ChartsBox from './ChartsBox.js';
import GaugesBox from './GaugesBox.js';
import TotalBox from './TotalBox.js';

// Ignite UI Required Combined JavaScript Files
import "@infragistics/ignite-ui-full/en/js/infragistics.core.js";
import "@infragistics/ignite-ui-full/en/js/infragistics.lob.js";
import "@infragistics/ignite-ui-full/en/js/infragistics.dv.js";

// CSS files
import "@infragistics/ignite-ui-full/en/css/structure/infragistics.css";
import "@infragistics/ignite-ui-full/en/css/themes/infragistics/infragistics.theme.css";
import '../sample.css';

var MainComponent = React.createClass({

	getInitialState: function () {
		return {
			month: this.getRandomInt(12),
			data: this.generateData(),
			update: null,
			months: this.getMonths()
		}
	},
	generateData: function() {
		var num = 12, data = [], rand1, rand2, rand3,
			mnths = this.getShortMonthNames();


		for (var i = 0; i < num; i++) {
			rand1 = Math.random() * 50.0;
			rand2 = Math.random() * 40.0;
			rand3 = rand1 - rand2;
			data[i] = {
				index: i,
				month: mnths[i],
				revenue: rand1,
				expenses: rand2,
				profit: rand3
			};
		}
		return { data: data };
	},
	changeMonth: function(index) {
		this.setState({ month: index, update: "month" });
	},
	changeRevenue: function(value) {
		var data = this.state.data;
		data.data[this.state.month].revenue = value;
		data.data[this.state.month].profit = value - data.data[this.state.month].expenses;
		this.setState({ data: data, update: "revenue" });
	},
	changeExpenses: function(value) {
		var data = this.state.data;
		data.data[this.state.month].expenses = value;
		data.data[this.state.month].profit = data.data[this.state.month].revenue - value;
		this.setState({ data: data, update: "expenses" });
	},
	changeProfit: function(value) {
		var data = this.state.data;
		data.data[this.state.month].profit = value;
		data.data[this.state.month].revenue = value + data.data[this.state.month].expenses;
		this.setState({ data: data, update: "profit" });
	},
	getMonths: function() {
		return {
			months: [
				{ value: 0, text: "January"}, { value: 1, text: "February"}, { value: 2, text: "March"},
				{ value: 3, text: "April"}, { value: 4, text: "May"}, { value: 5, text: "June"},
				{ value: 6, text: "July"}, { value: 7, text: "August"}, { value: 8, text: "September"},
				{ value: 9, text: "October"}, { value: 10, text: "November"}, { value: 11, text: "December"}
			]};
	},
	getRandomInt: function(max) {
		return Math.floor(Math.random() * Math.floor(max));
	},
	getShortMonthNames: function() {
		return ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
	},
	render: function () {
		return (
			<div className="container">
				<EditorsBox
					data={this.state.data}
					month={this.state.month}
					months={this.state.months}
					changeMonth={this.changeMonth}
					changeRevenue={this.changeRevenue}
					changeExpenses={this.changeExpenses}
					changeProfit={this.changeProfit} />
				<div className="row">
					<TotalBox
						data={this.state.data} />
					<GaugesBox
						data={this.state.data}
						month={this.state.month}
						changeRevenue={this.changeRevenue}
						changeExpenses={this.changeExpenses}
						changeProfit={this.changeProfit} />
				</div>
				<ChartsBox
					month={this.state.month}
					data={this.state.data}
					update={this.state.update} />
			</div>
		);
	}
});

export default MainComponent;