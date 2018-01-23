import React, { Component } from 'react';
import IgTextEditor from 'igniteui-react/ui/igTextEditor.js';
import IgNumericEditor from 'igniteui-react/ui/igNumericEditor.js';
import IgButton from 'igniteui-react/ui/igButton.js';
import '../sample.css';
import $ from 'jquery';

var IgEditBox = React.createClass({
    render: function () {
        var rowId =  this.props.rowId,
            v = rowId > -1;
        return (
            <div className="editorBox" style={{"display": v ? "block": "none"}}>
                <h4>Change values in row with ID <span style={{"fontWeight": "bold"}}>{this.props.rowId}</span>:</h4>
                <div className="well well-sm">
                    <div className="row">
                        <label htmlFor="editor1" className="col-xs-2 col-form-label" style={{"marginTop": "5px"}}>Name: </label>
                        <div className="col-xs-10">
                            <IgTextEditor
                                ref="editorName"
                                id="editor1"
                                width="100%"
                                keypress={this.handleTextEditorKeyPress}
                                value={this.props.nameValue}/>
                        </div>
                    </div>
                    <div className="row">
                        <label htmlFor="editor2" className="col-xs-2 col-form-label" style={{"marginTop": "5px"}}>Stock: </label>
                        <div className="col-xs-10">
                            <IgNumericEditor
                                ref="editorStock"
                                id="editor2"
                                width="100%"
                                textAlign="left"
                                keypress={this.handleTextEditorKeyPress}
                                value={this.props.stockValue}/>
                        </div>
                    </div>
                    <div className="row">
                        <label htmlFor="editor3" className="col-xs-2 col-form-label" style={{"marginTop": "5px"}}>Price: </label>
                        <div className="col-xs-10">
                            <IgNumericEditor
                                ref="editorPrice"
                                id="editor3"
                                width="100%"
                                textAlign="left"
                                keypress={this.handleTextEditorKeyPress}
                                value={this.props.priceValue}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6"><div style={{ "float": "right" }}><IgButton id="btnUpdate" labelText="Update" click={this.handleButtonUpdateClick} /></div></div>
                        <div className="col-md-6"><div style={{ "float": "left" }}><IgButton id="btnDelete" labelText="Delete" click={this.handleButtonDeleteClick} /></div></div>
                    </div>

                </div>
            </div>
        );
    },
    handleTextEditorKeyPress: function (e, args) {
        if (args.key === $.ui.keyCode.ENTER) {
            this.handleButtonUpdateClick(e);
        }
    },
    handleTextEditorKeyDown: function (e) {
        if (e.keyCode === $.ui.keyCode.ENTER) {
            this.handleButtonUpdateClick(e);
        }
    },
    handleButtonDeleteClick: function (e) {
        var func = this.props.btnDeleteClicked;
        if (func) {
            func(e, this.props.rowId);
        }
    },
    handleButtonUpdateClick: function (e) {
        var func = this.props.btnUpdateClicked;
        if (func) {
            func(e,
                this.props.rowId,
                this.refs.editorName.igControl.value(),
                this.refs.editorStock.igControl.value(),
                this.refs.editorPrice.igControl.value());
        }
    }
});

export default IgEditBox;