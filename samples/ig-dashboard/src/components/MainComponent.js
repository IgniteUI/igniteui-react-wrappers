import React from 'react';
import IgGrid from 'igniteui-react-wrappers/ui/igGrid.js';
import IgDataChart from 'igniteui-react-wrappers/ui/igDataChart.js';
import IgEditBox from './IgEditBox.js';

// Ignite UI Required Combined JavaScript Files
import "@infragistics/ignite-ui-full/en/js/infragistics.core.js";
import "@infragistics/ignite-ui-full/en/js/infragistics.lob.js";
import "@infragistics/ignite-ui-full/en/js/infragistics.dv.js";

// CSS files
import "@infragistics/ignite-ui-full/en/css/structure/infragistics.css";
import "@infragistics/ignite-ui-full/en/css/themes/infragistics/infragistics.theme.css";
import '../sample.css';

class MainComponent extends React.Component {
    render() {
		return (
			<div>
				<div className="row">
					<div className="col-md-8">
						<IgGrid
							id="grid1"
							ref="grid1"
							autoGenerateColumns={false}
							dataSource={this.state.view}
							primaryKey="Id"
							autoCommit={true}
							height="340px"
							width="700px"
							columns={[
								{ headerText: "Id", key: "Id", dataType: "number" },
								{ headerText: "Name", key: "Name", dataType: "string" },
								{ headerText: "Revenue", key: "Revenue", dataType: "number" },
								{ headerText: "Expenses", key: "Expenses", dataType: "number"},
								{ headerText: "Date", key: "Date", dataType: "date", format: "dateTime" }
							]}
							responseDataKey="PersonalFinance"
							features={[
								{ name: "Selection", rowSelectionChanged: this.gridRowSelectionChanged },
								{ name: "Updating", editRowEnded: this.gridRowUpdated, enableDeleteRow: false, enableAddRow: false, editMode: "none"}
							]}
						/>
					</div>
					<br />
					<div className="col-md-4">
							<IgDataChart
								id="chart1"
								ref="chart1"
								height="340px"
								dataSource={this.state.view}
								dataSourceType="json"
								responseDataKey="PersonalFinance"
								axes={[
									{
										name: "NameAxis",
										type: "categoryX",
										title: "Name",
										label: "Name"
									},
									{
										name: "FinanceAxis",
										type: "numericY",
										minimumValue: 0
									}
									]}
								series={[
									{
										name: "PersonalFinanceRevenue",
										type: "column",
										isTransitionInEnabled: true,
										xAxis: "NameAxis",
										yAxis: "FinanceAxis",
										valueMemberPath: "Revenue",
										lableMemberPath: "Name",
										transitionDuration: 300
									},
									{
										name: "PersonalFinanceExpenses",
										type: "column",
										isTransitionInEnabled: true,
										xAxis: "NameAxis",
										yAxis: "FinanceAxis",
										valueMemberPath: "Expenses",
										transitionDuration: 300
									}
								]}
							/>
					</div>
					<br />
					<IgEditBox ref="selectedRowInfo"
						btnUpdateClicked={this.editBoxHandleUpdate}
						revenueValue={this.state.revenueValue}
						expensesValue={this.state.expensesValue}
						rowId={this.state.selectedRowId}
					/>
				</div>
			</div>
		);
	}

    /* helper functions */
    getGridInstance = (gridRefName) => {
		gridRefName = gridRefName || "grid1";
		return (this.refs[gridRefName] || {}).igControl;
	};

    getChartInstance = (chartRefName) => {
		chartRefName = chartRefName || "chart1";
		return (this.refs[chartRefName] || {}).igControl;
	};

    getGridUpdating = (gridRefName) => {
		var grid = this.getGridInstance(gridRefName);
		if (!grid || !grid.element) {
			return null;
		}
		return grid.element.data("igGridUpdating");
	};

    getExpensesByRowId = (rowId) => {
		var grid = this.getGridInstance(),
			expenses, record;
		if (rowId > -1 && grid) {
			record = grid.dataSource.findRecordByKey(rowId) || {};
			expenses = record["Expenses"];
		}
		return expenses;
	};

    getRevenueByRowId = (rowId) => {
		var grid = this.getGridInstance(),
			revenue, record;
		if (rowId > -1 && grid) {
			record = grid.dataSource.findRecordByKey(rowId) || {};
			revenue = record["Revenue"];
		}
		return revenue;
	};

    editBoxHandleUpdate = (e, rowId, val1, val2) => {
		var grid = this.getGridInstance(),
			upd, ds = this.state.view, index = this.state.selectedRowIndex;
			ds.PersonalFinance[ index ].Revenue = parseInt(val1);
			ds.PersonalFinance[ index ].Expenses = parseInt(val2);

		if (grid && rowId > -1) {
			upd = this.getGridUpdating();
			if (upd) {
				upd.updateRow(
					rowId,
					{
						"Expenses": val2,
						"Revenue" : val1
					});
			}
		}
		this.editoBoxChartHandleUpdate();
	};

    editoBoxChartHandleUpdate = () => {
		var chartRef = this.getChartInstance(),
		index = this.state.selectedRowIndex,
		ds = this.state.view.PersonalFinance,
		item = ds[ index ];

		this.refs.chart1.igControl.notifySetItem(ds, index, item,item);

	};

    gridRowSelectionChanged = (evt, ui) => {
		var rowId = ui.row.id;
		this.setState({ selectedRowId: rowId,
						expensesValue: this.getExpensesByRowId(rowId) ,
						revenueValue: this.getRevenueByRowId(rowId) ,
						selectedRowIndex: ui.row.index
						});
	};

    getSourceData = () => {
		var sourceData = {
			"PersonalFinance": [
				{ "Id": "1", "Name":"Antony", "Revenue":650, "Expenses": 300, "Date":"10/20/2016" },
				{ "Id": "2", "Name":"Brick", "Revenue":1155, "Expenses": 800, "Date":"10/21/2016" },
				{ "Id": "3", "Name":"Mike", "Revenue":550, "Expenses": 400, "Date":"10/25/2016" },
				{ "Id": "4", "Name":"Anna", "Revenue":1050, "Expenses": 300, "Date":"10/10/2016" },
				{ "Id": "5", "Name":"Oleg", "Revenue":750, "Expenses": 400, "Date":"10/20/2016" },
				{ "Id": "6", "Name":"Sonya", "Revenue":950, "Expenses": 600, "Date":"10/10/2016" }
			]
		}
		return sourceData;
	};

    state = {
        // the view is the grid and the chart data source in this case
        view: this.getSourceData(),
        selectedRowId: -1,
        revenueValue: null,
        expensesValue: null,
        selectedRowIndex: -1
    };
}

export default MainComponent;