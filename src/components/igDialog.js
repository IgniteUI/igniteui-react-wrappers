(function (factory) {
	if (typeof define === "function" && define.amd) {
		define("IgDialog", [
			"react",
			"jquery"
		], factory );
	} else {
		factory(React, $);
	}
}
(function (React, $) {
	var IgDialog = React.createClass($.ig.react.core.buildComponent("igDialog"));
	if (window) {
		window.IgDialog = IgDialog;
	}
	return IgDialog;
}));


