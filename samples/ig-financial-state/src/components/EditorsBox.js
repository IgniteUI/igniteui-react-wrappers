import IgCombo from 'igniteui-react-wrappers/ui/igCombo.js';
import IgNumericEditor from 'igniteui-react-wrappers/ui/igNumericEditor.js';
import React from 'react';

class EditorsBox extends React.Component {
    render() {
		return (
			<div className="editors row">
				<div className="editor-container">
					<label className="labels">Month:</label>
					<IgCombo
						id="monthCombo"
						dataSource={this.props.months}
						responseDataKey="months"
						mode="dropdown"
						initialSelectedItems={ [{ index: this.props.month }] }
						enableClearButton={false}
						width="160"
						selectionChanged={this.monthChanged} />
				</div>
				<div className="editor-container">
					<label className="labels">Revenue:</label>
					<IgNumericEditor
						id="revenueEditor"
						ref="revenueEditor"
						width={160}
						value={this.props.data.data[this.props.month].revenue}
						minValue={0}
						maxValue={50}
						valueChanged={this.revenueChanged} />
				</div>
				<div className="editor-container">
					<label className="labels">Expenses:</label>
					<IgNumericEditor
						id="expensesEditor"
						width={160}
						value={this.props.data.data[this.props.month].expenses}
						minValue={0}
						maxValue={50}
						valueChanged={this.expensesChanged} />
				</div>
				<div className="editor-container">
					<label className="labels">Profit:</label>
					<IgNumericEditor
						id="profitEditor"
						width={160}
						value={this.props.data.data[this.props.month].profit}
						minValue={-50}
						maxValue={50}
						valueChanged={this.profitChanged} />
				</div>
				<div className="clear"></div>
			</div>
		);
	}

    monthChanged = (e, args) => {
		this.props.changeMonth(args.items[0].data.value);
	};

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

export default EditorsBox;