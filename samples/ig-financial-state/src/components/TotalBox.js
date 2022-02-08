import IgCurrencyEditor from 'igniteui-react-wrappers/ui/igCurrencyEditor.js';
import React from 'react';

class TotalBox extends React.Component {
    getTotal = () => {
		var data = this.props.data.data,
			total = 0, i;

		for (i = 0; i < data.length; i++) {
			total += data[i].profit;
		}
		return total * 1000000;
	};

    render() {
		return (
			<div className="total-container">
				<label className="labels">Overall Year Profit:</label><br />
				<IgCurrencyEditor
					id="totalEditor"
					value={this.getTotal()}
					readOnly={true}
					width={170}
					negativePattern="$ -n"
					postivePattern="$ n"
					dataMode="int"
					textAlign="left" />
			</div>
		)
	 }
}

export default TotalBox;