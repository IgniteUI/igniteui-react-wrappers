import React from 'react';
import createReactClass from 'create-react-class';
import IgButton from 'igniteui-react-wrappers/ui/igButton.js';
import IgDialog from 'igniteui-react-wrappers/ui/igDialog.js';
import $ from 'jquery'
import '../sample.css';

var IgDialogBox = createReactClass({
    render: function () {
        return (
            <IgDialog
                id="dialog1"
                ref="deleteDialog"
                width="325px"
                height="210px"
                resizable={false}
                headerText="Confirm Row Delete"
                state={this.props.dialogState}
                stateChanging={this.handleDialogStateChanging}>
                <h3 ref="dialogText">Are you sure you want to delete row with ID?</h3>
                <br />
                <div className="col-md-6" style={{ "textAlign": "center" }}>
                    <IgButton id="btnAccept" labelText="Accept" click={this.handleDeleteDialogAccept} />
                </div>
                <div className="col-md-6" style={{ "textAlign": "center" }}>
                    <IgButton id="btnCancel" labelText="Cancel" click={this.handleDeleteDialogCancel} />
                </div>
            </IgDialog>
        );
    },
    componentWillReceiveProps(nextProps) {
        if (this.props.rowId !== nextProps.rowId) {
          $(this.refs.dialogText).html("Are you sure you want to delete row with ID " + nextProps.rowId + " ?");
        }
    },
    handleDialogStateChanging: function (evt, ui) {
        this.props.dialogStateChanging(evt, ui);
    },
    handleDeleteDialogAccept: function () {
        this.props.deleteDialogAccept();
    },
    handleDeleteDialogCancel: function () {
        this.props.deleteDialogCancel();
    }
});

export default IgDialogBox;
