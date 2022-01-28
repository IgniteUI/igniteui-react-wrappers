import IgLinearGauge from 'igniteui-react-wrappers/ui/igLinearGauge.js';
import React from 'react';

class GaugesBox extends React.Component {
	gaugeInterval = 10;
	revenueColor = "#a4ba29";
	expensesColor = "#d3404b";
	profitColor = "#216EDD";
	needleColor = "white";
	needleOutlineColor = "#2582a9";

	render() {
		return (
			<div className="gauges">
				<div className="gauge-container">
					<IgLinearGauge
						id="revenueGauge"
						ref="revenueGauge"
						height="80"
						width="170"
						value={this.props.data.data[this.props.month].revenue}
						interval={this.gaugeInterval}
						minimumValue={0}
						maximumValue={50}
						needleBrush={this.needleColor}
						needleOutline={this.needleOutlineColor}
						isNeedleDraggingEnabled={true}
						ranges={[
							{
								name: 'first',
								startValue: 0,
								endValue: 50,
								brush: this.revenueColor
							}
						]}
						valueChanged={this.revenueChanged} />
				</div>
				<div className="gauge-container">
					<IgLinearGauge
						id="expensesGauge"
						height="80"
						width="170"
						value={this.props.data.data[this.props.month].expenses}
						interval={this.gaugeInterval}
						minimumValue={0}
						maximumValue={50}
						needleBrush={this.needleColor}
						needleOutline={this.needleOutlineColor}
						isNeedleDraggingEnabled={true}
						ranges={[
							{
								name: 'first',
								startValue: 0,
								endValue: 50,
								brush: this.expensesColor
							}
							]}
						valueChanged={this.expensesChanged} />
				</div>
				<div className="gauge-container">
					<IgLinearGauge
						id="profitGauge"
						height="80"
						width="170"
						value={this.props.data.data[this.props.month].profit}
						interval={this.gaugeInterval*2}
						minimumValue={-50}
						maximumValue={50}
						needleBrush={this.needleColor}
						needleOutline={this.needleOutlineColor}
						isNeedleDraggingEnabled={true}
						ranges={[
							{
								name: 'first',
								startValue: -50,
								endValue: 50,
								brush: this.profitColor
							}
						]}
						valueChanged={this.profitChanged} />
				</div>
				<div className="clear"></div>
			</div>
		)
	}

	revenueChanged = (e, args) => {
		this.props.changeRevenue(args.newValue);
	};

	expensesChanged = (e, args) => {
		this.props.changeExpenses(args.newValue);
	};

	profitChanged = (e, args) => {
		this.props.changeProfit(args.newValue);
	};
}

export default GaugesBox;