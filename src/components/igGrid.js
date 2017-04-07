(function (factory) {
	if (typeof define === "function" && define.amd) {
		define("IgGrid", [
			"react",
			"jquery"
		], factory );
	} else {
		factory(React, $);
	}
}
(function (React, $) {
	var IgGrid = React.createClass($.ig.react.core.buildComponent("igGrid"));
	if (window) {
		window.IgGrid = IgGrid;
	}
	return IgGrid;
}));

