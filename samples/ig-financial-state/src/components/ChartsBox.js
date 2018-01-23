import IgDataChart from 'igniteui-react/ui/igDataChart.js';
import React, { Component } from 'react';

var ChartsBox = React.createClass({
	chartThickness: 2,
	transitionDuration: 800,
	chartIntervalX: 1,
	revenueColor: "#a4ba29",
	expensesColor: "#d3404b",
	profitColor: "#216EDD",
	outlineColor: "black",
	updateCharts: function() {
		switch(this.props.update) {
			case "revenue": this.updateRevenue(); break;
			case "expenses": this.updateExpenses(); break;
			case "profit": this.updateProfit(); break;
			default: break;
		}
	},
	updateRevenue: function() {
		var data = this.props.data.data, index = this.props.month;

		this.updateNonSplineCharts();
		this.refs.polarSplineChartRevenue.igControl.notifySetItem(data, index, data[index], data[index]);
	},
	updateExpenses: function() {
		var data = this.props.data.data, index = this.props.month;

		this.updateNonSplineCharts();
		this.refs.polarSplineChartExpenses.igControl.notifySetItem(data, index, data[index], data[index]);
	},
	updateProfit: function() {
		var data = this.props.data.data, index = this.props.month;

		this.updateNonSplineCharts();
		this.refs.polarSplineChartProfit.igControl.notifySetItem(data, index, data[index], data[index]);
	},
	updateNonSplineCharts: function() {
		var data = this.props.data.data, index = this.props.month;

		this.refs.lineChart.igControl.notifySetItem(data, index, data[index], data[index]);
		this.refs.barChart.igControl.notifySetItem(data, index, data[index], data[index]);
	},
	render: function () {
		this.updateCharts();
		return (
			<div className="row">
				<div className="sample-line-chart-holder">
				<IgDataChart
					id="lineChart"
					ref="lineChart"
					dataSource={this.props.data}
					responseDataKey="data"
					dataSourceType="json"
					width="900"
					height="200"
					title="Yearly Profit"
					leftMargin={5}
					legend={{ element: "legendLineChart" }}
					transitionDuration={ this.transitionDuration }
					axes={[
						{ name: "xAxis", type: "categoryX", interval: this.chartIntervalX, label: "month", labelLocation: "outsideTop" },
						{ name: "yAxis", type: "numericY", interval: 10, minimumValue: -50, maximumValue: 50 }
					]}
					series={[
						{ name: "line1", title: "Revenue", type: "line", isHighlightingEnabled: true, thickness: this.chartThickness,
							xAxis: "xAxis", yAxis: "yAxis", valueMemberPath: "revenue", transitionDuration: this.transitionDuration,
							brush: this.revenueColor },
						{ name: "line2", title: "Expenses", type: "line", isHighlightingEnabled: true, thickness: this.chartThickness,
							xAxis: "xAxis", yAxis: "yAxis", valueMemberPath: "expenses", transitionDuration: this.transitionDuration,
							brush: this.expensesColor },
						{ name: "line3", title: "Profit", type: "line", isHighlightingEnabled: true, thickness: this.chartThickness,
							xAxis: "xAxis", yAxis: "yAxis", valueMemberPath: "profit", transitionDuration: this.transitionDuration,
							brush: this.profitColor
					}]}
				/>
				<div id="legendLineChart"></div></div>

				<div className="sample-polar-chart-holder">
					<IgDataChart
						id="polarSplineChartRevenue"
						ref="polarSplineChartRevenue"
						dataSource={this.props.data}
						responseDataKey="data"
						dataSourceType="json"
						width="300"
						height="275"
						title="Revenue"
						legend={{ element: "legendPolarChartRevenue" }}
						transitionDuration={ this.transitionDuration }
						axes={[
							{ name: "angleAxis", type: "numericAngle", interval: this.chartIntervalX, formatLabel: this.formatMonth },
							{ name: "radiusAxis", type: "numericRadius"}
						]}
						series={[
							{ name: "polarSpline", type: "polarLine", title: "Revenue", angleAxis: "angleAxis", radiusAxis: "radiusAxis",
								angleMemberPath: "index", radiusMemberPath: "revenue", transitionDuration: this.transitionDuration,
								brush: this.revenueColor }
						]}
					/>
					<div id="legendPolarChartRevenue" className="polar-chart-legend"></div>
				</div>

				<div className="sample-polar-chart-holder">
					<IgDataChart
						id="polarSplineChartExpenses"
						ref="polarSplineChartExpenses"
						dataSource={this.props.data}
						responseDataKey="data"
						dataSourceType="json"
						width="300"
						height="275"
						title="Revenue"
						legend={{ element: "legendPolarChartExpenses" }}
						axes={[
							{ name: "angleAxis", type: "numericAngle", interval: this.chartIntervalX, formatLabel: this.formatMonth },
							{ name: "radiusAxis", type: "numericRadius"}
						]}
						series={[
							{ name: "polarSpline", type: "polarSpline", title: "Expenses", angleAxis: "angleAxis", radiusAxis: "radiusAxis",
								angleMemberPath: "index", radiusMemberPath: "expenses", transitionDuration: this.transitionDuration,
								brush: this.expensesColor }
						]}
					/>
					<div id="legendPolarChartExpenses" className="polar-chart-legend"></div>
				</div>

				<div className="sample-polar-chart-holder">
					<IgDataChart
						id="polarSplineChartProfit"
						ref="polarSplineChartProfit"
						dataSource={this.props.data}
						responseDataKey="data"
						dataSourceType="json"
						width="300"
						height="275"
						title="Revenue"
						legend={{ element: "legendPolarChartProfit" }}
						axes={[
							{ name: "angleAxis", type: "numericAngle", interval: this.chartIntervalX, formatLabel: this.formatMonth },
							{ name: "radiusAxis", type: "numericRadius"}
						]}
						series={[
							{ name: "polarSpline", type: "polarSpline", title: "Profit", angleAxis: "angleAxis", radiusAxis: "radiusAxis",
								angleMemberPath: "index", radiusMemberPath: "profit", transitionDuration: this.transitionDuration,
								brush: this.profitColor }
						]} />
						<div id="legendPolarChartProfit" className="polar-chart-legend"></div>
				</div>
				<div className="clear"></div>

				<div className="sample-line-chart-holder">
				<IgDataChart
					id="barChart"
					ref="barChart"
					dataSource={this.props.data}
					responseDataKey="data"
					dataSourceType="json"
					width="900"
					height="200"
					title="Yearly Profit"
					leftMargin={5}
					legend={{ element: "legendBarColumnChart" }}
					axes={[
						{ name: "xAxis", type: "categoryX", interval: this.chartIntervalX, label: "month", labelLocation: "outsideTop" },
						{ name: "yAxis", type: "numericY", interval: 10, minimumValue: -50, maximumValue: 50 }
					]}
					series={[
						{ name: "column1", title: "Revenue", type: "column", isHighlightingEnabled: true, thickness: this.chartThickness,
							xAxis: "xAxis", yAxis: "yAxis", valueMemberPath: "revenue", transitionDuration: this.transitionDuration,
							brush: this.revenueColor },
						{ name: "column2", title: "Expenses", type: "column", isHighlightingEnabled: true, thickness: this.chartThickness,
							xAxis: "xAxis", yAxis: "yAxis", valueMemberPath: "expenses", transitionDuration: this.transitionDuration,
							brush: this.expensesColor },
						{ name: "column3", title: "Profit", type: "column", isHighlightingEnabled: true, thickness: this.chartThickness,
							xAxis: "xAxis", yAxis: "yAxis", valueMemberPath: "profit", transitionDuration: this.transitionDuration,
							brush: this.profitColor
					}]}
				/>
				<div id="legendBarColumnChart"></div></div>
			</div>
		);
	}
});

export default ChartsBox;