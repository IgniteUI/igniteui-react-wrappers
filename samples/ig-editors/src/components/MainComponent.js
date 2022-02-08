import React from 'react';
import IgTextEditor from 'igniteui-react-wrappers/ui/igTextEditor.js';
import IgMaskEditor from 'igniteui-react-wrappers/ui/igMaskEditor.js';
import IgNumericEditor from 'igniteui-react-wrappers/ui/igNumericEditor.js';
import IgDateEditor from 'igniteui-react-wrappers/ui/igDateEditor.js';
import IgDatePicker from 'igniteui-react-wrappers/ui/igDatePicker.js';
import PropTypes from 'prop-types';

// Ignite UI Required Combined JavaScript Files
import "@infragistics/ignite-ui-full/en/js/infragistics.core.js";
import "@infragistics/ignite-ui-full/en/js/infragistics.lob.js";

// CSS files
import "@infragistics/ignite-ui-full/en/css/structure/infragistics.css";
import "@infragistics/ignite-ui-full/en/css/themes/infragistics/infragistics.theme.css";
import '../sample.css';

class MainComponent extends React.Component {
    static propTypes = {
		Email: PropTypes.string,
		userName: PropTypes.string,
		seats: PropTypes.number,
		phone: PropTypes.number,
		licensedue: PropTypes.string,
		birthday: PropTypes.string,
		yourLocation: PropTypes.string
	};

    state = {
        Email: "johndoe@gmail.com",
        userName: "USER",
        seats: 108,
        phone: 898123123,
        licensedue: "2018-10-10",
        birthday: "2001-12-9",
        yourLocation: "LA"
    };

    handleSubmit = (e) => {
		e.preventDefault();
	};

    /* //Util funcs */
    /* //handle EditForm specific events */
    emailChanged = (evt) => {
		var editor = this.refs.editorEmail;
		this.setState({ Email: editor.igControl.value() });
	};

    userChanged = (evt) => {
		var editor = this.refs.editorUserName;
		this.setState({ userName: editor.igControl.value() });
	};

    phoneChanged = (evt) => {
		var editor = this.refs.editorPhone;
		this.setState({ phone: editor.igControl.value() });
	};

    yearsChanged = (evt) => {
		var editor = this.refs.editorseats;
		this.setState({ seats: editor.igControl.value() });
	};

    licenseChanged = (evt) => {
		var editor = this.refs.editorLicense;
		this.setState({ licensedue: new Date(editor.igControl.value()).toLocaleDateString()});
	};

    birthdayChanged = (evt) => {
		var editor = this.refs.editorBirthday;
		this.setState({ birthday: new Date(editor.igControl.value()).toDateString()});
	};

    locationChanged = (evt) => {
		var editor = this.refs.editorLocation;
		this.setState({ yourLocation: editor.igControl.value() });
	};

    render() {
		const {Email, userName, seats, licensedue, birthday, yourLocation} = this.props;
		return(
			<div className="container">
				<form className="accountForm" onSubmit={this.handleSubmit}>
					<div className="row">
						<h1>Edit user account</h1>
						<div className="col-md-4">
							<h3 className="well"><span className="info">Email : {this.state.Email}</span></h3>
							<h3 className="well"><span className="info">User : {this.state.userName}</span></h3>
							<h3 className="well"><span className="info">Phone : {this.state.phone}</span></h3>
							<h3 className="well"><span className="info">Seats : {this.state.seats}</span></h3>
							<h3 className="well"><span className="info">License due : {this.state.licensedue}</span></h3>
							<h3 className="well"><span className="info">Birthday : {this.state.birthday}</span></h3>
							<h3 className="well"><span className="info">Occupation : {this.state.yourLocation}</span></h3>
						</div>

						<div className="col-md-4">
							<div className="well">
								<label className="lbl">Name:</label>
								<IgTextEditor	id="editor1"
												ref="editorEmail"
												maxLength={22}
												revertIfNotValid={true}
												value={this.state.Email}
												placeHolder={Email}
												validatorOptions={{
													success:this.emailChanged,
													required: true,
													email: true,
													errorMessage: "Unexpected Email format",
													onblur: true,
													successMessage: "Valid",
													notificationOptions: {mode: "inline"}
												}} />
							</div>
							<div className="well">
								<label className="lbl">User:</label>
								<IgTextEditor	 id="editor2"
												ref="editorUserName"
												maxLength={20}
												value={this.state.userName}
												validatorOptions={{
													success:this.userChanged,
													onblur: true,
													required: true,
													errorMessage: "Use letters numbers and underscores only",
													custom: function (value, fieldOptions) {
														var myRegEx = /^[A-Za-z0-9_]*[A-Za-z0-9][A-Za-z0-9_]*$/;
														var isValid = myRegEx.test(value);
														return isValid;
														},
													successMessage: "Valid",
													notificationOptions: {mode: "inline"}
												}} />
							</div>
							<div className="well">
								<label className="lbl">Phone:</label>
								<IgMaskEditor	 id="editor3"
												ref="editorPhone"
												inputMask='(000) 000-000'
												dataMode="rawText"
												revertIfNotValid={false}
												value={this.state.phone}
												valueChanged={this.phoneChanged}
												validatorOptions={{
													onblur: true,
													required: true,
													errorMessage: "Match the phone format",
													number: true,
													successMessage: "Valid",
													notificationOptions: {mode: "inline"}
												}} />
							</div>
							<div className="well">
									<label className="lbl">Seats: </label>
									<IgNumericEditor	id="editor4"
														ref="editorseats"
														maxValue = {9999}
														minValue = {1}
														textAlign = "left"
														groupSeparator = ""
														value={this.state.seats}
														valueChanged={this.yearsChanged}
														buttonType={"spin"} />
							</div>
							<div className="well">
									<label className="lbl">Extend License:</label>
									<IgDateEditor	id="editor5"
													ref="editorLicense"
													dataMode={"date"}
													minValue= {new Date(2017, 10, 10)}
													maxValue= {new Date(2022, 11, 31)}
													buttonType={"spin"}
													limitSpinToCurrentField={true}
													value={this.state.licensedue}
													valueChanged={this.licenseChanged} />
							</div>
							<div className="well">
									<label className="lbl">Birthday:</label>
									<IgDatePicker	id="editor6"
													ref="editorBirthday"
													revertIfNotValid={false}
													buttonType={"dropdown"}
													minValue={new Date("1/1/1920")}
													maxValue={new Date("1/1/2015")}
													value={this.state.birthday}
													validatorOptions={{
													success:this.birthdayChanged,
														required: false,
														onblur: true,
														successMessage: "Valid",
														notificationOptions: {mode: "auto"}
													}}
													datepickerOptions={{minDate: new Date(1920, 1, 1), maxDate: new Date(2015, 1, 1) }} />
							</div>
							<div className="well">
								<label className="lbl">Location:</label>
								<IgTextEditor	id="editor7"
												ref="editorLocation"
												maxLength={18}
												value={this.state.yourLocation}
												validatorOptions={{
													success:this.locationChanged,
													onblur: true,
													required: false,
													errorMessage: "Use min 2 letters",
													custom: function (value, fieldOptions) {
														var myRegEx = /^[a-zA-Z]{2,}$/;
														var isValid = myRegEx.test(value);
														return isValid;
													},
													successMessage: "Valid",
													notificationOptions: {mode: "inline"}
												}} />
							</div>
						</div>
					</div>
				</form>
			</div>
		);
	}
}

export default MainComponent;
