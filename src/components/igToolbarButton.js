(function (factory) {
	if (typeof define === "function" && define.amd) {
		define("IgToolbarButton", [
			"react",
			"jquery",
			"../dist/igniteui-react.js"
		], factory );
	} else {
		factory(React, $);
	}
}
(function (React, $) {
	var IgToolbarButton = React.createClass($.ig.react.core.buildComponent("igToolbarButton"));
	if (window) {
		window.IgToolbarButton = IgToolbarButton;
	}
	return IgToolbarButton;
}));

