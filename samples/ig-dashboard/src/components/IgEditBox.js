import React from 'react';
import IgNumericEditor from 'igniteui-react/ui/igNumericEditor.js';
import IgButton from 'igniteui-react/ui/igButton.js';

// Ignite UI Required Combined JavaScript Files
import "@infragistics/ignite-ui-full/en/js/infragistics.core.js";
import "@infragistics/ignite-ui-full/en/js/infragistics.lob.js";

class IgEditBox extends React.Component {
    render() {
		var rowId =  this.props.rowId,
			v = rowId > -1;
		return (
			<div className="editorBox" style={{"display": v ? "block": "none"}}>
				<h4>Change values in row with ID <span style={{"fontWeight": "bold"}}>{this.props.rowId}</span>:</h4>
				<div className="well well-sm col-md-4">
					<div className="row">
						<label htmlFor="editor1" className="col-xs-2 col-form-label">Revenue: </label>
						<div className="col-xs-10">
							<IgNumericEditor
									ref="editorRevenue"
									id="editor1"
									width="100%"
									className="form-control"
									value={this.props.revenueValue}/>
						</div>
					</div>
					<div className="row">
						<label htmlFor="editor2" className="col-xs-2 col-form-label">Expenses: </label>
						<div className="col-xs-10">
							<IgNumericEditor
									ref="editorExpenses"
									id="editor2"
									width="100%"
									className="form-control"
									value={this.props.expensesValue}/>
						</div>
					</div>
					<div className="row">
						<div className="col-md-6" style={{ "float": "right" }}>
							<div style={{ "float": "inherit" }}>
								<IgButton id="btnUpdate" labelText="Update" click={this.handleButtonUpdateClick} />
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}

    handleButtonUpdateClick = (e) => {
		var func = this.props.btnUpdateClicked;

		if (func) {
			func(e,
			this.props.rowId,
			this.refs.editorRevenue.igControl.value(),
			this.refs.editorExpenses.igControl.value());
		}
	};
}

export default IgEditBox;