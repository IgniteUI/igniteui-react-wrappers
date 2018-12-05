$.ig.react.propTypes.shapes.igSchedulerAgendaViewSettings = {
	dateRangeInterval: PropTypes.number
}

$.ig.react.propTypes.shapes.igSchedulerWeekViewSettings = {
	weekViewDisplayMode: PropTypes.number,
	workingHoursDisplayMode: PropTypes.number,
	timeSlotInterval: PropTypes.number
}

$.ig.react.propTypes.shapes.igSchedulerDayViewSettings = {
	timeSlotInterval: PropTypes.number,
	dayViewNumberOfDays: PropTypes.number,
	workingHoursDisplayMode: PropTypes.number
}

$.ig.react.propTypes.shapes.igSchedulerMonthViewSettings = {
	appointmentMode: PropTypes.string,
	isAgendaVisible: PropTypes.bool,
	agendaVisibilityType: PropTypes.string,
	viewSplitOrientation: PropTypes.string,
	isHorizontalSeparatorVisibile: PropTypes.bool,
	isVerticalSeparatorVisibile: PropTypes.bool,
	isWeekdayVisible: PropTypes.bool,
	isWeekNumberVisible: PropTypes.bool,
	isPreviousMonthShown: PropTypes.bool,
	isNextMonthShown: PropTypes.bool
}

$.ig.react.propTypes.igScheduler = {
	id: PropTypes.string.isRequired,
	views: PropTypes.array,
	viewMode: PropTypes.oneOf([
		"monthView",
		"agendaView"
	]),
	selectedDate: PropTypes.instanceOf(Date),
	enableTodayButton: PropTypes.bool,
	width: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number
	]),
	height: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number
	]),
	agendaViewSettings: PropTypes.shape(
		$.ig.react.propTypes.shapes.igSchedulerAgendaViewSettings
	),
	weekViewSettings: PropTypes.shape(
		$.ig.react.propTypes.shapes.igSchedulerWeekViewSettings
	),
	dayViewSettings: PropTypes.shape(
		$.ig.react.propTypes.shapes.igSchedulerDayViewSettings
	),
	monthViewSettings: PropTypes.shape(
		$.ig.react.propTypes.shapes.igSchedulerMonthViewSettings
	),
	appointmentDialogSuppress: PropTypes.bool,
	dataSource: PropTypes.object,
	resources: PropTypes.object
}
