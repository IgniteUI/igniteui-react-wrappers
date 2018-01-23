import React, { Component } from 'react';
import IgGrid from 'igniteui-react/ui/igGrid.js';
import IgTextEditor from 'igniteui-react/ui/igTextEditor.js';
import IgEditBox from './IgEditBox.js';
import IgDialogBox from './IgDialogBox.js';

// Ignite UI Required Combined JavaScript Files
import "@infragistics/ignite-ui-full/en/js/infragistics.core.js";
import "@infragistics/ignite-ui-full/en/js/infragistics.lob.js";

// CSS files
import "@infragistics/ignite-ui-full/en/css/structure/infragistics.css";
import "@infragistics/ignite-ui-full/en/css/themes/infragistics/infragistics.theme.css";
import '../sample.css';

var MainComponent = React.createClass({
	render: function () {
		return (
			<div className="row">

				<div className="col-md-8">
					<IgGrid
						id="grid1"
						ref="grid1"
						autoGenerateColumns={false}
						dataSource={this.state.view}
						primaryKey="ProductID"
						autoCommit={true}
						height={this.state.gridHeight}
						width={this.state.gridWidth}
						columns={[
							{ headerText: "Product ID", key: "ProductID", dataType: "number" },
							{ headerText: "Name", key: "Name", dataType: "string" },
							{ headerText: "Stock", key: "UnitsInStock", dataType: "number" },
							{ headerText: "UnitPrice", key: "UnitPrice", dataType: "number", format: "#.##" },
							{ headerText: "DateAdded", key: "DateAdded", dataType: "date", format: "dateTime" }
						]}
						responseDataKey="Products"
						features={[
							{ name: "Selection", rowSelectionChanged: this.gridRowSelectionChanged },
							{ name: "Updating", editRowEnded: this.gridRowUpdated, rowDeleted: this.gridRowDeleted }
						]}
					/>
				</div>

				<div id="editArea" className="col-md-4">
					<h3>Grid options</h3>
					<div className="well well-sm">
						<div className="row">
							<label htmlFor="editor2" className="col-xs-2 col-form-label" style={{"marginTop": "5px"}}>Width: </label>
							<div className="col-xs-10">
								<IgTextEditor id="editor2"
									width="100%"
									ref="editorGridWidth"
									value={this.state.gridWidth}
									valueChanged={this.widthChanged} />
							</div>
						</div>
						<div className="row">
							<label htmlFor="editor3" className="col-xs-2 col-form-label" style={{"marginTop": "5px"}}>Height: </label>
							<div className="col-xs-10">
								<IgTextEditor id="editor3"
									width="100%"
									ref="editorGridHeight"
									value={this.state.gridHeight}
									valueChanged={this.heightChanged} />
							</div>
						</div>
					</div>

					<IgEditBox
						ref="selectedRowInfo"
						btnDeleteClicked={this.editBoxHandleDelete}
						btnUpdateClicked={this.editBoxHandleUpdate}
						nameValue={this.state.nameValue}
						stockValue={this.state.stockValue}
						priceValue={this.state.priceValue}
						rowId={this.state.selectedRowId}
						/>
				</div>

				<IgDialogBox
					dialogState={this.state.dialogState}
					rowId={this.state.deleteRowId}
					dialogStateChanging={this.handleDialogStateChanging}
					deleteDialogAccept={this.handleDeleteDialogAccept}
					deleteDialogCancel={this.handleDeleteDialogCancel}
					/>

			</div>
		);
	},
	getInitialState: function () {
		return {
			// the view is the grid data source in this case
			view: this.getSourceData(),
			gridHeight: "400px",
			gridWidth: "100%",
			selectedRowId: -1,
			deleteRowId: -1,
			nameValue: null,
			stockValue: null,
			priceValue: null,
			dialogState: "closed"
		}
	},
	/* helper functions */
	getGridInstance: function (gridRefName) {
		gridRefName = gridRefName || "grid1";
		return (this.refs[gridRefName] || {}).igControl;
	},
	getGridUpdating: function (gridRefName) {
		var grid = this.getGridInstance(gridRefName);
		if (!grid || !grid.element) {
			return null;
		}
		return grid.element.data("igGridUpdating");
	},
	getNameByRowId: function (rowId) {
		var grid = this.getGridInstance(),
			Name, record;
		if (rowId > -1 && grid) {
			record = grid.dataSource.findRecordByKey(rowId) || {};
			Name = record["Name"];
		}
		return Name;
	},
	getStockByRowId: function (rowId) {
		var grid = this.getGridInstance(),
			Stock, record;
		if (rowId > -1 && grid) {
			record = grid.dataSource.findRecordByKey(rowId) || {};
			Stock = record["UnitsInStock"];
		}
		return Stock;
	},
	getPriceByRowId: function (rowId) {
		var grid = this.getGridInstance(),
			Price, record;
		if (rowId > -1 && grid) {
			record = grid.dataSource.findRecordByKey(rowId) || {};
			Price = record["UnitPrice"];
		}
		return Price;
	},
	/* //helper functions */
	/* handle edit box specific events */
	editBoxHandleDelete: function (e, rowId) {
		this.setState({
			dialogState: "opened",
			deleteRowId: rowId
		});
	},
	editBoxHandleUpdate: function (e, rowId, name, stock, price) {
		var grid = this.getGridInstance(),
			upd;
		if (grid && rowId > -1) {
			upd = this.getGridUpdating();
			if (upd) {
				upd.updateRow(rowId,
					{
						"Name": name,
						"UnitsInStock": stock,
						"UnitPrice": price
					});
			}
		}
	},
	handleDialogStateChanging: function (evt, ui) {
		if(ui.action === "close" && this.state.dialogState === "opened" ) {
			this.setState({ dialogState: "closed" });
		}
	},
	handleDeleteDialogAccept: function () {
		var grid = this.getGridInstance(),
			rowId = this.state.deleteRowId,
			upd;
		if (grid && rowId > -1) {
			upd = this.getGridUpdating();//grid.dataSource.deleteRow(rowId, true);
			if (upd) {
				upd.deleteRow(rowId);
				this.setState({ selectedRowId: -1, deleteRowId: -1 });
			}
		}
		this.setState({ dialogState: "closed" });
	},
	handleDeleteDialogCancel: function () {
		this.setState({ dialogState: "closed" });
	},
	/* //handle edit box specific events */
	/* interactions with igGrid - rowDeleted, updated, etc. */
	gridRowUpdated: function (evt, ui) {
		var rowId = ui.rowID;
		if (this.state.selectedRowId !== rowId) {
			return;
		}
		if (!ui.rowAdding &&
			(ui.values["Name"] !== ui.oldValues["Name"] ||
			ui.values["UnitsInStock"] !== ui.oldValues["UnitsInStock"] ||
			ui.values["UnitPrice"] !== ui.oldValues["UnitPrice"])) {
			this.setState({
				nameValue: this.getNameByRowId(rowId),
				stockValue: this.getStockByRowId(rowId),
				priceValue: this.getPriceByRowId(rowId)
			});
		}
	},
	gridRowDeleted: function (evt, ui) {
		var rowId = ui.rowID;
		if (this.state.selectedRowId === rowId) {
			this.setState({ selectedRowId: -1 });
		}
	},
	gridRowSelectionChanged: function (evt, ui) {
		var rowId = ui.row.id;
		this.setState({ selectedRowId: rowId,
			nameValue: this.getNameByRowId(rowId),
			stockValue: this.getStockByRowId(rowId),
			priceValue: this.getPriceByRowId(rowId)
		});
	},
	/* //interactions with igGrid - rowDeleted, updated, etc. */
	heightChanged: function (evt) {
		// change grid height option
		var editor = this.refs.editorGridHeight;
		this.setState({ gridHeight: editor.igControl.value() });
	},
	widthChanged: function (evt) {
		// change grid width option
		var editor = this.refs.editorGridWidth;
		this.setState({ gridWidth: editor.igControl.value() });
	},
	getSourceData: function() {
		var sourceData = {
				"Products": [
					{ "ProductID": 1, "Name": "Chairs", "UnitsInStock": 385, "UnitPrice": 358.74353459046387, "DateAdded": "2004-06-20T20:18:20.469", InStock: true },
					{ "ProductID": 2, "Name": "Kitchen knifes", "UnitsInStock": 602, "UnitPrice": 140.2894189303226, "DateAdded": "2000-02-21T22:56:16.331", InStock: true },
					{ "ProductID": 3, "Name": "Screwdrivers", "UnitsInStock": 608, "UnitPrice": 567.43131092164253, "DateAdded": "2002-04-21T09:06:07.142", InStock: true },
					{ "ProductID": 4, "Name": "Desk lamps", "UnitsInStock": 402, "UnitPrice": 785.99307722691128, "DateAdded": "2001-03-27T03:57:27.373", InStock: true },
					{ "ProductID": 5, "Name": "Monitors", "UnitsInStock": 338, "UnitPrice": 157.42114473014192, "DateAdded": "2006-02-28T21:22:04.059", InStock: true },
					{ "ProductID": 6, "Name": "Beds", "UnitsInStock": 163, "UnitPrice": 178.17069924351324, "DateAdded": "1996-10-24T06:51:53.93", InStock: true },
					{ "ProductID": 7, "Name": "Dinner tables", "UnitsInStock": 163, "UnitPrice": 641.50092314998665, "DateAdded": "1999-11-19T06:10:35.984", InStock: true },
					{ "ProductID": 8, "Name": "Dinner tables", "UnitsInStock": 163, "UnitPrice": 641.50092314998665, "DateAdded": "1999-11-19T06:10:35.984", InStock: true },
					{ "ProductID": 9, "Name": "Dinner tables", "UnitsInStock": 163, "UnitPrice": 641.50092314998665, "DateAdded": "1999-11-19T06:10:35.984", InStock: true },
					{ "ProductID": 10, "Name": "Dinner tables", "UnitsInStock": 163, "UnitPrice": 641.50092314998665, "DateAdded": "1999-11-19T06:10:35.984", InStock: true },
					{ "ProductID": 11, "Name": "Dinner tables", "UnitsInStock": 163, "UnitPrice": 641.50092314998665, "DateAdded": "1999-11-19T06:10:35.984", InStock: true }
				]
		}
		return sourceData;
	}
});

export default MainComponent;