(function (factory) {
	if (typeof define === "function" && define.amd) {
		define("IgSplitButton", [
			"react",
			"jquery"
		], factory );
	} else {
		factory(React, $);
	}
}
(function (React, $) {
	var IgSplitButton = React.createClass($.ig.react.core.buildComponent("igSplitButton"));
	if (window) {
		window.IgSplitButton = IgSplitButton;
	}
	return IgSplitButton;
}));

