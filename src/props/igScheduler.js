$.ig.react.propTypes.shapes.igSchedulerAgendaViewSettings = {
	dateRangeInterval: React.PropTypes.number
}

$.ig.react.propTypes.shapes.igSchedulerMonthViewSettings = {
	appointmentMode: React.PropTypes.string,
	isAgendaVisible: React.PropTypes.bool,
	agendaVisibilityType: React.PropTypes.string,
	viewSplitOrientation: React.PropTypes.string,
	isHorizontalSeparatorVisibile: React.PropTypes.bool,
	isVerticalSeparatorVisibile: React.PropTypes.bool,
	isWeekdayVisible: React.PropTypes.bool,
	isWeekNumberVisible: React.PropTypes.bool,
	isPreviousMonthShown: React.PropTypes.bool,
	isNextMonthShown: React.PropTypes.bool
}

$.ig.react.propTypes.igScheduler = {
	id: React.PropTypes.string.isRequired,
	views: React.PropTypes.array,
	viewMode: React.PropTypes.oneOf([
		"monthView",
		"agendaView"
	]),
	selectedDate: React.PropTypes.instanceOf(Date),
	enableTodayButton: React.PropTypes.bool,
	width: React.PropTypes.oneOfType([
		React.PropTypes.string,
		React.PropTypes.number
	]),
	height: React.PropTypes.oneOfType([
		React.PropTypes.string,
		React.PropTypes.number
	]),
	agendaViewSettings: React.PropTypes.shape(
		$.ig.react.propTypes.shapes.igSchedulerAgendaViewSettings
	),
	monthViewSettings: React.PropTypes.shape(
		$.ig.react.propTypes.shapes.igSchedulerMonthViewSettings
	),
	appointmentDialogSuppress: React.PropTypes.bool,
	dataSource: React.PropTypes.object,
	resources: React.PropTypes.object
}
